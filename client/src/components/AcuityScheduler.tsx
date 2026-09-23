// AcuityScheduler — Juris Ledger
// Embeds the Acuity Scheduling booking page so leads can book without leaving
// the site. Pass `lead` to pre-fill the client's name, email, and phone.
import { useExternalScript } from "@/hooks/useExternalScript";
import { buildAcuityUrl, type LeadDetails } from "@/lib/booking";
import { FIRM } from "@/lib/siteData";

// Acuity's embed.js resizes the iframe to fit the scheduler as it changes.
const ACUITY_EMBED_SCRIPT_SRC =
  "https://embed.acuityscheduling.com/js/embed.js";

interface AcuitySchedulerProps {
  lead?: LeadDetails | null;
}

export default function AcuityScheduler({ lead }: AcuitySchedulerProps) {
  useExternalScript(ACUITY_EMBED_SCRIPT_SRC);

  return (
    <iframe
      src={buildAcuityUrl(FIRM.bookingUrl, lead)}
      title="Schedule a consultation with Juris Ledger"
      width="100%"
      height="800"
      allow="payment"
      loading="lazy"
      style={{ border: "none" }}
    />
  );
}
