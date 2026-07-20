// Privacy Policy — Juris Ledger LLC
// A2P/10DLC compliant. Exact content as provided by client.
// Effective Date: January 1, 2026
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/animations";

const sections = [
  {
    num: "1",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">We may collect information that you voluntarily provide to us, including:</p>
        <ul className="list-disc pl-6 space-y-1 text-base mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Business information you choose to provide</li>
          <li>Appointment or consultation details</li>
          <li>Information submitted through contact forms, quote forms, scheduling forms, or website forms</li>
          <li>Communication preferences</li>
          <li>SMS opt-in records, consent records, timestamps, and related consent details</li>
          <li>Payment or billing-related information, when applicable</li>
        </ul>
        <p className="text-base leading-relaxed mb-3">We may also collect limited technical and website usage information, including:</p>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Website usage patterns</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </>
    ),
  },
  {
    num: "2",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">We may use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Respond to your inquiries</li>
          <li>Schedule appointments and consultations</li>
          <li>Provide accounting, bookkeeping, tax, advisory, and related business services</li>
          <li>Send appointment confirmations and reminders</li>
          <li>Send service-related updates</li>
          <li>Send quote follow-ups or customer support messages</li>
          <li>Send marketing or promotional messages only when you have provided proper consent</li>
          <li>Improve our website and services</li>
          <li>Maintain records of your communication preferences and consent</li>
          <li>Process payments or billing when applicable</li>
          <li>Comply with legal obligations</li>
          <li>Protect our website, business, and users from fraud or misuse</li>
        </ul>
      </>
    ),
  },
  {
    num: "3",
    title: "SMS Messaging and A2P/10DLC Compliance",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">
          By opting in to receive SMS/text messages from JURIS LEDGER LLC, you agree to receive text messages related to our services and, where separately consented to, marketing or promotional communications.
        </p>
        <p className="text-base leading-relaxed mb-3">Messages may include:</p>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Appointment confirmations</li>
          <li>Appointment reminders</li>
          <li>Rescheduling updates</li>
          <li>Customer support messages</li>
          <li>Service-related updates</li>
          <li>Quote or inquiry follow-ups</li>
          <li>Account or client communication</li>
          <li>Marketing or promotional messages, only if you opted in to receive them</li>
        </ul>
      </>
    ),
  },
  {
    num: "4",
    title: "SMS Opt-In Consent",
    content: (
      <p className="text-base leading-relaxed">
        You will only receive SMS messages from us if you have provided consent. Consent may be collected through website forms, contact forms, scheduling forms, quote forms, checkboxes, or other consent-based methods. Consent to receive SMS messages is not a condition of purchasing any goods or services. We maintain records of SMS consent, including opt-in source, timestamp, and related consent details when available.
      </p>
    ),
  },
  {
    num: "5",
    title: "Marketing and Promotional Text Messages",
    content: (
      <p className="text-base leading-relaxed">
        Marketing or promotional text messages may include information about services, offers, updates, discounts, promotions, or other business-related communications from JURIS LEDGER LLC. Marketing and promotional SMS messages will only be sent to individuals who have provided clear consent to receive them. Users may opt out at any time by replying STOP.
      </p>
    ),
  },
  {
    num: "6",
    title: "SMS Opt-Out Instructions",
    content: (
      <p className="text-base leading-relaxed">
        You may opt out of receiving SMS messages at any time by replying STOP to any text message from us. After you reply STOP, we may send one final confirmation message confirming that you have been unsubscribed. After that, you will no longer receive SMS messages from us unless you opt in again.
      </p>
    ),
  },
  {
    num: "7",
    title: "SMS Help Instructions",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">For help, reply HELP to any text message from us.</p>
        <p className="text-base leading-relaxed mb-1">You may also contact us directly:</p>
        <p className="text-base">Phone: <a href="tel:2405810123" className="text-[#075c5b] underline">240-581-0123</a></p>
        <p className="text-base">Email: <a href="mailto:frances@jurisledger.com" className="text-[#075c5b] underline">frances@jurisledger.com</a></p>
      </>
    ),
  },
  {
    num: "8",
    title: "Message Frequency",
    content: (
      <p className="text-base leading-relaxed">
        Message frequency may vary depending on your appointments, service requests, communication with us, and whether you have opted in to marketing or promotional messages.
      </p>
    ),
  },
  {
    num: "9",
    title: "Message and Data Rates",
    content: (
      <p className="text-base leading-relaxed">
        Message and data rates may apply. Please contact your wireless provider with questions about your text or data plan.
      </p>
    ),
  },
  {
    num: "10",
    title: "Carrier Disclaimer",
    content: (
      <p className="text-base leading-relaxed">
        Carriers are not liable for delayed or undelivered messages.
      </p>
    ),
  },
  {
    num: "11",
    title: "SMS Data Protection Statement",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3 font-semibold">
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>
        <p className="text-base leading-relaxed mb-3">
          SMS opt-in data, phone numbers, mobile information, and consent records will not be sold, rented, shared, or disclosed to third parties or affiliates for marketing or promotional purposes.
        </p>
        <p className="text-base leading-relaxed">
          Information may be shared with subcontractors or service providers only when necessary to support services, such as customer service, appointment scheduling, communication support, or message delivery. All other use case categories exclude text messaging originator opt-in data and consent. SMS opt-in information will not be shared with any third parties or affiliates for marketing or promotional purposes.
        </p>
      </>
    ),
  },
  {
    num: "12",
    title: "Information Sharing and Disclosure",
    content: (
      <>
        <p className="text-base leading-relaxed mb-4">We do not sell, rent, or trade personal information.</p>
        <p className="text-base leading-relaxed mb-3">We may share limited information only when necessary with:</p>
        <div className="space-y-4">
          <div>
            <p className="text-base font-semibold mb-1">Service Providers:</p>
            <p className="text-base leading-relaxed">We may use vendors or service providers to help operate our website, schedule appointments, process payments, provide customer support, deliver SMS messages, or support business operations.</p>
          </div>
          <div>
            <p className="text-base font-semibold mb-1">SMS Providers and Aggregators:</p>
            <p className="text-base leading-relaxed">We may share information with SMS service providers only as necessary to send messages you have consented to receive. These providers are not permitted to use SMS opt-in data, phone numbers, mobile information, or consent records for their own marketing or promotional purposes.</p>
          </div>
          <div>
            <p className="text-base font-semibold mb-1">Legal Compliance:</p>
            <p className="text-base leading-relaxed">We may disclose information when required by law, legal process, court order, government request, or when necessary to protect our rights, property, business, or users.</p>
          </div>
        </div>
        <p className="text-base leading-relaxed mt-4 font-semibold">
          All sharing categories above exclude SMS opt-in data and consent records. SMS opt-in data, phone numbers, mobile information, and consent records are not shared with third parties or affiliates for marketing or promotional purposes.
        </p>
      </>
    ),
  },
  {
    num: "13",
    title: "Data Security",
    content: (
      <p className="text-base leading-relaxed">
        We use reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, loss, misuse, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security, but we take reasonable steps to protect your information.
      </p>
    ),
  },
  {
    num: "14",
    title: "Cookies and Tracking Technologies",
    content: (
      <p className="text-base leading-relaxed">
        Our website may use cookies and similar technologies to improve website functionality, analyze traffic, understand visitor behavior, and improve user experience. You may control cookies through your browser settings. Disabling cookies may affect some website features.
      </p>
    ),
  },
  {
    num: "15",
    title: "Your Rights and Choices",
    content: (
      <>
        <p className="text-base leading-relaxed mb-3">You may contact us to:</p>
        <ul className="list-disc pl-6 space-y-1 text-base mb-4">
          <li>Request access to your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Opt out of marketing emails</li>
          <li>Opt out of SMS messages by replying STOP</li>
          <li>Withdraw consent for future communications</li>
          <li>Ask questions about how your information is used</li>
        </ul>
        <p className="text-base leading-relaxed">
          To make a request, contact us at <a href="mailto:frances@jurisledger.com" className="text-[#075c5b] underline">frances@jurisledger.com</a> or call <a href="tel:2405810123" className="text-[#075c5b] underline">240-581-0123</a>.
        </p>
      </>
    ),
  },
  {
    num: "16",
    title: "Third-Party Links",
    content: (
      <p className="text-base leading-relaxed">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or policies of third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.
      </p>
    ),
  },
  {
    num: "17",
    title: "Changes to This Privacy Policy",
    content: (
      <p className="text-base leading-relaxed">
        We may update this Privacy Policy from time to time. The latest version will be posted on this website with the updated effective date. Your continued use of our website or services after updates are posted means you accept the revised Privacy Policy.
      </p>
    ),
  },
  {
    num: "18",
    title: "Contact Us",
    content: (
      <div className="space-y-1 text-base">
        <p className="mb-2">If you have questions about this Privacy Policy or how your information is handled, please contact us:</p>
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

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Juris Ledger LLC";
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
            Privacy Policy
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
            <motion.div variants={staggerItem} className="mb-10">
              <p className="text-lg leading-relaxed mb-4 text-[#3a3530]">
                JURIS LEDGER LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you provide when you visit our website, contact us, submit a form, schedule an appointment, request services, or communicate with us.
              </p>
              <p className="text-lg leading-relaxed text-[#3a3530]">
                This Privacy Policy explains what information we collect, how we use it, how we protect it, and your choices regarding your information.
              </p>
            </motion.div>

            {/* SMS Notice Box */}
            <motion.div variants={staggerItem} className="bg-[#075c5b]/8 border border-[#075c5b]/25 rounded-sm p-7 mb-12">
              <h2 className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#075c5b] mb-4">
                Important Notice Regarding SMS/Text Messaging Data
              </h2>
              <p className="text-base leading-relaxed mb-3 text-[#3a3530]">
                JURIS LEDGER LLC does not sell, rent, trade, share, or disclose SMS opt-in data, phone numbers, mobile information, or consent records with third parties or affiliates for marketing or promotional purposes.
              </p>
              <p className="text-base leading-relaxed mb-3 text-[#3a3530]">
                Text messaging originator opt-in data and consent information will not be shared with any third parties or affiliates for marketing or promotional purposes. SMS consent data is used only to send messages the user has agreed to receive.
              </p>
              <p className="text-base leading-relaxed text-[#3a3530]">
                We may use service providers, such as SMS platforms, carriers, aggregators, customer service tools, or scheduling platforms, only as needed to deliver messages or provide services requested by the user. These service providers are not allowed to use SMS opt-in data, phone numbers, mobile information, or consent records for their own marketing or promotional purposes.
              </p>
            </motion.div>
          </motion.div>

          {/* Numbered Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-10"
          >
            {sections.map((section) => (
              <motion.div key={section.num} variants={staggerItem} className="pb-10 border-b border-[#b6afa8]/25 last:border-b-0">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-['Cormorant_Garamond'] text-4xl font-600 text-[#075c5b]/20 leading-none flex-shrink-0 w-10">
                    {section.num.padStart(2, "0")}
                  </span>
                  <h2 className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#1a1714] leading-snug">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-14 text-[#3a3530]">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
