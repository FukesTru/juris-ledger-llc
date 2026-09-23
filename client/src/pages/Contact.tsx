// Contact page — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
// Booking flow: GHL form (step 1) hands the lead to Acuity Scheduling (step 2)
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, CheckCircle2, ArrowDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import AcuityScheduler from "@/components/AcuityScheduler";
import { useExternalScript } from "@/hooks/useExternalScript";
import { parseGhlFormSubmission, type LeadDetails } from "@/lib/booking";
import { FIRM } from "@/lib/siteData";
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerContainerFast, staggerItem,
  viewport,
} from "@/lib/animations";

// GoHighLevel embedded form (Website Form — JURIS LEDGER LLC)
const GHL_FORM_ID = "QskFxQsYnm3NNY4FviKq";
const GHL_FORM_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export default function Contact() {
  // Load GHL's form_embed.js once — it wires up iframe auto-resizing.
  useExternalScript(GHL_FORM_SCRIPT_SRC);

  const formFrameRef = useRef<HTMLIFrameElement>(null);
  const bookingRef = useRef<HTMLElement>(null);
  const [lead, setLead] = useState<LeadDetails | null>(null);

  // Scroll to step 2 and move focus there so keyboard users continue from it.
  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    bookingRef.current?.focus({ preventScroll: true });
  };

  // Once the lead submits the form, carry their details into the scheduler
  // and move them on to picking a time.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only our form's own window counts (the GHL chat widget posts messages too).
      if (event.source !== formFrameRef.current?.contentWindow) return;
      const submitted = parseGhlFormSubmission(event.data);
      if (!submitted) return;
      setLead(submitted);
      scrollToBooking();
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div>
      <PageHero
        eyebrow="Contact Juris Ledger"
        headline="Schedule a Consultation"
        subtext="Ready to get your finances organized and your business on solid financial ground? Reach out to Juris Ledger to schedule a consultation."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <motion.div
              className="space-y-8"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div>
                <p className="jl-eyebrow mb-4">Get In Touch</p>
                <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-600 text-[#2a2825] leading-tight mb-6">
                  Juris Ledger LLC
                </h2>
                <motion.div
                  className="space-y-5"
                  variants={staggerContainerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <motion.a variants={staggerItem} href={`tel:${FIRM.phone}`} className="flex items-start gap-4 group">
                    <Phone size={16} className="text-[#075c5b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-['DM_Sans'] font-600 text-[#b6afa8] uppercase tracking-wide mb-0.5">Phone</p>
                      <p className="text-[#2a2825] font-['DM_Sans'] text-base group-hover:text-[#075c5b] transition-colors">{FIRM.phone}</p>
                    </div>
                  </motion.a>
                  <motion.a variants={staggerItem} href={`mailto:${FIRM.email}`} className="flex items-start gap-4 group">
                    <Mail size={16} className="text-[#075c5b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-['DM_Sans'] font-600 text-[#b6afa8] uppercase tracking-wide mb-0.5">Email</p>
                      <p className="text-[#2a2825] font-['DM_Sans'] text-base group-hover:text-[#075c5b] transition-colors">{FIRM.email}</p>
                    </div>
                  </motion.a>
                  <motion.div variants={staggerItem} className="flex items-start gap-4">
                    <MapPin size={16} className="text-[#075c5b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-['DM_Sans'] font-600 text-[#b6afa8] uppercase tracking-wide mb-0.5">Office</p>
                      <p className="text-[#2a2825] font-['DM_Sans'] text-base leading-relaxed">{FIRM.address.full}</p>
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItem} className="flex items-start gap-4">
                    <Clock size={16} className="text-[#075c5b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-['DM_Sans'] font-600 text-[#b6afa8] uppercase tracking-wide mb-0.5">Office Hours</p>
                      <p className="text-[#2a2825] font-['DM_Sans'] text-base">{FIRM.hours}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Social */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <p className="text-xs font-['DM_Sans'] font-600 text-[#b6afa8] uppercase tracking-wide mb-3">Follow Us</p>
                <div className="flex items-center gap-5">
                  <motion.a whileHover={{ x: 2 }} href={FIRM.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2a2825]/60 hover:text-[#075c5b] text-base font-['DM_Sans'] transition-colors">
                    <Facebook size={16} /> Facebook
                  </motion.a>
                  <motion.a whileHover={{ x: 2 }} href={FIRM.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2a2825]/60 hover:text-[#075c5b] text-base font-['DM_Sans'] transition-colors">
                    <Instagram size={16} /> Instagram
                  </motion.a>
                  <motion.a whileHover={{ x: 2 }} href={FIRM.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2a2825]/60 hover:text-[#075c5b] text-base font-['DM_Sans'] transition-colors">
                    <Linkedin size={16} /> LinkedIn
                  </motion.a>
                </div>
              </motion.div>

              {/* Trust */}
              <motion.div
                className="bg-[#075c5b]/5 border border-[#075c5b]/15 rounded-sm p-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                whileHover={{ borderColor: "rgba(7,92,91,0.3)" }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-['DM_Sans'] font-600 text-[#075c5b] text-base mb-4">What to Expect</p>
                <div className="space-y-3">
                  {[
                    "A response within one business day",
                    "A no-pressure initial consultation",
                    "Honest answers about what we can help with",
                    "No commitment required to speak with us",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-[#075c5b] flex-shrink-0 mt-0.5" />
                      <p className="text-[#2a2825]/70 text-base font-['DM_Sans'] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form, then booking */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Step 1 — GoHighLevel form */}
              <div className="bg-white border border-[#e6e0da] rounded-sm p-6 lg:p-8">
                <div className="mb-6">
                  <p className="jl-eyebrow mb-2">Step 1 of 2</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-600 text-[#2a2825] mb-1">
                    Request a Consultation
                  </h3>
                  <p className="text-[#b6afa8] text-base font-['DM_Sans']">
                    Tell us a little about your business, then choose a time for your consultation.
                  </p>
                </div>

                <iframe
                  ref={formFrameRef}
                  src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
                  style={{ width: "100%", height: "600px", border: "none", borderRadius: "10px" }}
                  id={`inline-${GHL_FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Form (JURIS LEDGER LLC)"
                  data-height="542"
                  data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                  data-form-id={GHL_FORM_ID}
                  title="Website Form (JURIS LEDGER LLC)"
                />

                <p className="text-[#b6afa8] text-sm font-['DM_Sans'] text-center leading-relaxed mt-4">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-[#075c5b] transition-colors">Privacy Policy</a>.
                  We will never share your information.
                </p>

                <div className="border-t border-[#e6e0da] mt-6 pt-5 text-center">
                  <a
                    href="#book"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToBooking();
                    }}
                    className="inline-flex items-center gap-1.5 text-[#075c5b] text-sm font-['DM_Sans'] font-600 tracking-wide hover:gap-3 transition-all duration-200"
                  >
                    Next, choose a time for your consultation <ArrowDown size={13} />
                  </a>
                </div>
              </div>

              {/* Step 2 — Acuity Scheduling */}
              <section
                id="book"
                ref={bookingRef}
                tabIndex={-1}
                aria-labelledby="book-heading"
                className="bg-white border border-[#e6e0da] rounded-sm p-6 lg:p-8 scroll-mt-24 lg:scroll-mt-28 focus:outline-none"
              >
                <div className="mb-6">
                  <p className="jl-eyebrow mb-2">Step 2 of 2</p>
                  <h3 id="book-heading" className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-600 text-[#2a2825] mb-1">
                    Choose a Time
                  </h3>
                  <p className="text-[#b6afa8] text-base font-['DM_Sans']">
                    Pick a date and time that works for you to book your consultation.
                  </p>
                </div>

                <div role="status">
                  {lead && (
                    <div className="flex items-start gap-3 bg-[#075c5b]/5 border border-[#075c5b]/15 rounded-sm p-4 mb-6">
                      <CheckCircle2 size={16} className="text-[#075c5b] flex-shrink-0 mt-1" />
                      <p className="text-[#2a2825]/80 text-base font-['DM_Sans'] leading-relaxed">
                        Thanks{lead.firstName ? `, ${lead.firstName}` : ""}! We have your details. Choose a time below to book your consultation.
                      </p>
                    </div>
                  )}
                </div>

                {/* Full card width on phones — the scheduler needs the room */}
                <div className="-mx-6 sm:mx-0">
                  <AcuityScheduler lead={lead} />
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
