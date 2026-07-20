import type { Express } from "express";
import fs from "fs";
import path from "path";
import { ENV } from "./env";

// Candidate on-disk locations for locally-bundled storage assets.
const LOCAL_STORAGE_DIRS = [
  path.resolve(process.cwd(), "client/public/manus-storage"),
  path.resolve(process.cwd(), "dist/public/manus-storage"),
];

export function registerStorageProxy(app: Express) {
  app.get("/manus-storage/*", async (req, res) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }

    // Prefer a locally-bundled copy if one exists, so assets render without
    // requiring Forge storage credentials.
    for (const dir of LOCAL_STORAGE_DIRS) {
      const localPath = path.resolve(dir, key);
      // Guard against path traversal outside the storage dir.
      if (!localPath.startsWith(dir + path.sep)) continue;
      if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
        res.sendFile(localPath);
        return;
      }
    }

    if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
      res.status(500).send("Storage proxy not configured");
      return;
    }

    try {
      const forgeUrl = new URL(
        "v1/storage/presign/get",
        ENV.forgeApiUrl.replace(/\/+$/, "") + "/",
      );
      forgeUrl.searchParams.set("path", key);

      const forgeResp = await fetch(forgeUrl, {
        headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
      });

      if (!forgeResp.ok) {
        const body = await forgeResp.text().catch(() => "");
        console.error(`[StorageProxy] forge error: ${forgeResp.status} ${body}`);
        res.status(502).send("Storage backend error");
        return;
      }

      const { url } = (await forgeResp.json()) as { url: string };
      if (!url) {
        res.status(502).send("Empty signed URL from backend");
        return;
      }

      res.set("Cache-Control", "no-store");
      res.redirect(307, url);
    } catch (err) {
      console.error("[StorageProxy] failed:", err);
      res.status(502).send("Storage proxy error");
    }
  });
}
