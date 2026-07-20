// Terms of Service — Juris Ledger LLC
// A2P/10DLC compliant. Exact content as provided by client.
// Effective Date: January 1, 2026
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const smsSections = [
  {
    num: "1",
    title: "SMS Program Description",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          The SMS messaging program for JURIS LEDGER LLC sends text messages to customers and prospective customers who have opted in to receive messages from us.
        </p>
        <p className="text-base leading-relaxed mb-2">Messages may include:</p>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Appointment confirmations</li>
          <li>Appointment reminders</li>
          <li>Rescheduling updates</li>
          <li>Customer support messages</li>
          <li>Service-related updates</li>
          <li>Quote or inquiry follow-ups</li>
          <li>Client communication</li>
          <li>Marketing or promotional messages, only when the user has provided consent to receive them</li>
        </ul>
      </>
    ),
  },
  {
    num: "2",
    title: "SMS Opt-In Consent",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          By providing your phone number and opting in through a website form, contact form, scheduling form, quote form, checkbox, or other consent-based method, you agree to receive SMS/text messages from JURIS LEDGER LLC.
        </p>
        <p className="text-base leading-relaxed">
          Consent to receive SMS messages is not a condition of purchase. You may choose not to opt in and may still contact us by phone or email.
        </p>
      </>
    ),
  },
  {
    num: "3",
    title: "Marketing and Promotional SMS Messages",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          If you opt in to receive marketing or promotional text messages, you may receive messages about services, offers, updates, discounts, promotions, or related communications from JURIS LEDGER LLC.
        </p>
        <p className="text-base leading-relaxed">
          Marketing and promotional text messages are only sent when clear consent has been provided.
        </p>
      </>
    ),
  },
  {
    num: "4",
    title: "SMS Cancellation Instructions",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          You may cancel SMS messages at any time by replying STOP to any text message from us.
        </p>
        <p className="text-base leading-relaxed">
          After you send STOP, we may send one final confirmation message confirming that you have been unsubscribed. After this confirmation, you will no longer receive SMS messages from us unless you opt in again.
        </p>
      </>
    ),
  },
  {
    num: "5",
    title: "SMS Help Instructions",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">For help with our SMS messaging program, reply HELP to any text message from us.</p>
        <p className="text-base leading-relaxed mb-1">You may also contact us directly:</p>
        <p className="text-base">Phone: <a href="tel:2405810123" className="text-[#075c5b] underline">240-581-0123</a></p>
        <p className="text-base">Email: <a href="mailto:frances@jurisledger.com" className="text-[#075c5b] underline">frances@jurisledger.com</a></p>
      </>
    ),
  },
  {
    num: "6",
    title: "Message Frequency",
    content: (
      <p className="text-base leading-relaxed">
        Message frequency may vary based on your appointment schedule, service requests, customer relationship, communication preferences, and whether you opted in to receive marketing or promotional messages.
      </p>
    ),
  },
  {
    num: "7",
    title: "Message and Data Rates",
    content: (
      <p className="text-base leading-relaxed">
        Message and data rates may apply for messages sent to you from us and messages sent from you to us. Contact your wireless provider with questions about your text or data plan.
      </p>
    ),
  },
  {
    num: "8",
    title: "Carrier Liability",
    content: (
      <p className="text-base leading-relaxed">
        Carriers are not liable for delayed or undelivered messages.
      </p>
    ),
  },
  {
    num: "9",
    title: "Supported Carriers",
    content: (
      <p className="text-base leading-relaxed">
        Our SMS program works with most major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, and most regional carriers. Availability may vary by carrier.
      </p>
    ),
  },
  {
    num: "10",
    title: "Age Restriction",
    content: (
      <p className="text-base leading-relaxed">
        You must be 18 years or older to participate in our SMS messaging program.
      </p>
    ),
  },
  {
    num: "11",
    title: "SMS Privacy and Data Sharing Statement",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3 font-semibold">
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>
        <p className="text-base leading-relaxed mb-3">
          SMS opt-in data, phone numbers, mobile information, and consent records will not be sold, rented, shared, or disclosed to third parties or affiliates for marketing or promotional purposes.
        </p>
        <p className="text-base leading-relaxed">
          Information may be shared with service providers only as necessary to deliver SMS messages you have consented to receive. These service providers are not permitted to use SMS opt-in data, phone numbers, mobile information, or consent records for their own marketing or promotional purposes.
        </p>
      </>
    ),
  },
  {
    num: "12",
    title: "Privacy Policy",
    content: (
      <p className="text-base leading-relaxed">
        For more information about how we collect, use, and protect your information, please review our Privacy Policy at:{" "}
        <a href="/privacy-policy" className="text-[#075c5b] underline">https://jurisledger.com/privacy-policy</a>
      </p>
    ),
  },
];

const generalSections = [
  {
    num: "13",
    title: "Use of Website",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          You agree to use this website only for lawful purposes. You may not use this website in any way that damages the website, interferes with another user's access, or violates applicable law.
        </p>
        <p className="text-base leading-relaxed mb-2">You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Submit false or misleading information</li>
          <li>Attempt to gain unauthorized access to the website or related systems</li>
          <li>Use the website to transmit spam, malware, or harmful content</li>
          <li>Copy, reproduce, or misuse website content without permission</li>
          <li>Use the website for unlawful, fraudulent, or abusive purposes</li>
        </ul>
      </>
    ),
  },
  {
    num: "14",
    title: "Services",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          JURIS LEDGER LLC may provide accounting, bookkeeping, tax, advisory, consultation, and related business services.
        </p>
        <p className="text-base leading-relaxed mb-3">
          Information on this website is provided for general informational purposes only. Using this website, submitting a form, sending a message, or scheduling a consultation does not automatically create a professional-client relationship.
        </p>
        <p className="text-base leading-relaxed">
          A professional-client relationship is only created when both parties agree to the specific terms of service or engagement.
        </p>
      </>
    ),
  },
  {
    num: "15",
    title: "No Professional Advice Disclaimer",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          The information on this website is for general informational purposes only and should not be considered legal, tax, accounting, financial, or professional advice specific to your situation.
        </p>
        <p className="text-base leading-relaxed">
          You should consult directly with a qualified professional before making decisions based on your specific business, tax, financial, or accounting needs.
        </p>
      </>
    ),
  },
  {
    num: "16",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          All content on this website, including text, images, graphics, logos, designs, layouts, videos, and other materials, is owned by or licensed to JURIS LEDGER LLC unless otherwise stated.
        </p>
        <p className="text-base leading-relaxed">
          You may not copy, reproduce, modify, distribute, republish, or use website content for commercial purposes without written permission from JURIS LEDGER LLC.
        </p>
      </>
    ),
  },
  {
    num: "17",
    title: "Third-Party Links",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          This website may contain links to third-party websites or services. These links are provided for convenience only.
        </p>
        <p className="text-base leading-relaxed">
          We do not control and are not responsible for third-party websites, content, policies, practices, products, or services. Your use of third-party websites is at your own risk and subject to their terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    num: "18",
    title: "Payments and Online Transactions",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          If payment or billing features are available through this website or through a third-party provider, you agree to provide accurate and complete payment information.
        </p>
        <p className="text-base leading-relaxed">
          Third-party payment processors may collect and process payment information according to their own terms and privacy policies. JURIS LEDGER LLC is not responsible for the acts, errors, or omissions of third-party payment processors.
        </p>
      </>
    ),
  },
  {
    num: "19",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not guarantee that the website will be uninterrupted, secure, error-free, or free from harmful components.
        </p>
        <p className="text-base leading-relaxed">
          To the fullest extent permitted by law, we disclaim all warranties, express or implied, related to the website and its content.
        </p>
      </>
    ),
  },
  {
    num: "20",
    title: "Limitation of Liability",
    content: (
      <p className="text-base leading-relaxed">
        To the fullest extent permitted by law, JURIS LEDGER LLC will not be liable for any direct, indirect, incidental, consequential, special, punitive, or other damages arising from your use of this website or reliance on information provided on this website.
      </p>
    ),
  },
  {
    num: "21",
    title: "Indemnification",
    content: (
      <p className="text-base leading-relaxed">
        You agree to indemnify and hold harmless JURIS LEDGER LLC, its owners, employees, contractors, partners, and affiliates from any claims, damages, liabilities, costs, or expenses arising from your use of this website, your violation of these Terms of Service, or your violation of any rights of another person or entity.
      </p>
    ),
  },
  {
    num: "22",
    title: "Termination of Access",
    content: (
      <p className="text-base leading-relaxed">
        We reserve the right to suspend or terminate your access to this website at any time, without notice, if we believe you have violated these Terms of Service or used the website in an unlawful, harmful, or abusive manner.
      </p>
    ),
  },
  {
    num: "23",
    title: "Governing Law",
    content: (
      <p className="text-base leading-relaxed">
        These Terms of Service are governed by the laws of the State of Maryland. Any disputes related to these Terms of Service or your use of this website shall be handled in accordance with applicable Maryland law.
      </p>
    ),
  },
  {
    num: "24",
    title: "Changes to Terms of Service",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          We may update these Terms of Service from time to time. The latest version will be posted on this website with the updated effective date.
        </p>
        <p className="text-base leading-relaxed">
          Your continued use of the website after changes are posted means you accept the updated Terms of Service.
        </p>
      </>
    ),
  },
  {
    num: "25",
    title: "Contact Information",
    content: (
      <div className="space-y-1 text-base">
        <p className="mb-2">If you have questions about these Terms of Service, please contact us:</p>
        <p className="font-semibold">JURIS LEDGER LLC</p>
        <p>1344 Ashton Rd, Suite 205</p>
        <p>Hanover, MD 21076</p>
        <p>Phone: <a href="tel:2405810123" className="text-[#075c5b] underline">240-581-0123</a></p>
        <p>Email: <a href="mailto:frances@jurisledger.com" className="text-[#075c5b] underline">frances@jurisledger.com</a></p>
        <p>Website: <a href="https://jurisledger.com/" className="text-[#075c5b] underline" target="_blank" rel="noopener noreferrer">https://jurisledger.com/</a></p>
      </div>
    ),
  },
];

function SectionBlock({ num, title, content }: { num: string; title: string; content: React.ReactNode }) {
  return (
    <motion.div variants={staggerItem} className="pb-10 border-b border-[#b6afa8]/25 last:border-b-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-['Cormorant_Garamond'] text-4xl font-600 text-[#075c5b]/20 leading-none flex-shrink-0 w-10">
          {num.padStart(2, "0")}
        </span>
        <h2 className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#1a1714] leading-snug">
          {title}
        </h2>
      </div>
      <div className="pl-14 text-[#3a3530]">
        {content}
      </div>
    </motion.div>
  );
}

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | Juris Ledger LLC";
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#075c5b] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#e9ff89] font-['DM_Sans'] text-xs tracking-[0.15em] uppercase mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-600 text-white leading-tight"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-white/70 font-['DM_Sans'] text-base mt-4"
          >
            JURIS LEDGER LLC &mdash; Effective Date: January 1, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">

          {/* Intro */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div variants={staggerItem} className="mb-12">
              <p className="text-lg leading-relaxed mb-4 text-[#3a3530]">
                These Terms of Service govern your use of the website operated by JURIS LEDGER LLC at{" "}
                <a href="https://jurisledger.com/" className="text-[#075c5b] underline" target="_blank" rel="noopener noreferrer">https://jurisledger.com/</a>.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-[#3a3530]">
                By using this website, submitting a form, scheduling an appointment, or communicating with us, you agree to these Terms of Service and our{" "}
                <a href="/privacy-policy" className="text-[#075c5b] underline">Privacy Policy</a>.
              </p>
              <p className="text-lg leading-relaxed text-[#3a3530]">
                If you do not agree with these Terms of Service, please do not use this website.
              </p>
            </motion.div>
          </motion.div>

          {/* SMS Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-[#075c5b]/20" />
              <span className="font-['DM_Sans'] text-xs tracking-[0.15em] uppercase text-[#075c5b] font-600">
                SMS Messaging Terms &amp; A2P/10DLC Compliance
              </span>
              <div className="h-px flex-1 bg-[#075c5b]/20" />
            </div>
          </motion.div>

          {/* SMS Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-0 mb-12"
          >
            {smsSections.map((s) => (
              <SectionBlock key={s.num} num={s.num} title={s.title} content={s.content} />
            ))}
          </motion.div>

          {/* General Terms Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-[#075c5b]/20" />
              <span className="font-['DM_Sans'] text-xs tracking-[0.15em] uppercase text-[#075c5b] font-600">
                General Website Terms
              </span>
              <div className="h-px flex-1 bg-[#075c5b]/20" />
            </div>
          </motion.div>

          {/* General Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-0"
          >
            {generalSections.map((s) => (
              <SectionBlock key={s.num} num={s.num} title={s.title} content={s.content} />
            ))}
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
