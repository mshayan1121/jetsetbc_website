"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const TRIGGER_AFTER_MS = 25000;
const WHATSAPP_NUMBER = "971585779312";

export default function QuickInquiryPopup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [companySize, setCompanySize] = useState("");
  const [interest, setInterest] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (hasTriggered) return;
    const t = setTimeout(() => {
      setHasTriggered(true);
      setIsOpen(true);
    }, TRIGGER_AFTER_MS);
    return () => clearTimeout(t);
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I need a workspace fast. Company size: ${companySize || "Not specified"}. Interested in: ${interest || "Not specified"}. My WhatsApp: ${whatsapp || "Provided in chat."}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setIsOpen(false);
    router.push("/thank-you");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-navy-900/50 z-40 backdrop-blur-sm"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-4 right-4 sm:left-1/2 sm:right-auto sm:w-full sm:max-w-md sm:-translate-x-1/2 top-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl border border-cream-200 p-6 sm:p-8"
            role="dialog"
            aria-labelledby="popup-title"
            aria-modal="true"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 text-navy-500 hover:text-navy-900"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 id="popup-title" className="font-display text-xl sm:text-2xl text-navy-900 mb-4 pr-8">
              Need a workspace fast?
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-size" className="block text-sm font-medium text-navy-700 mb-1">
                  Company size
                </label>
                <select
                  id="popup-size"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full rounded-lg border border-cream-200 px-3 py-2 text-navy-900 bg-white"
                >
                  <option value="">Select</option>
                  <option value="1">Just me</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21+">21+</option>
                </select>
              </div>
              <div>
                <label htmlFor="popup-interest" className="block text-sm font-medium text-navy-700 mb-1">
                  Interested in
                </label>
                <select
                  id="popup-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-lg border border-cream-200 px-3 py-2 text-navy-900 bg-white"
                >
                  <option value="">Select</option>
                  <option value="Private Office">Private Office</option>
                  <option value="Coworking">Coworking</option>
                  <option value="Virtual Office">Virtual Office</option>
                </select>
              </div>
              <div>
                <label htmlFor="popup-whatsapp" className="block text-sm font-medium text-navy-700 mb-1">
                  WhatsApp number
                </label>
                <input
                  id="popup-whatsapp"
                  type="tel"
                  placeholder="e.g. +971 50 123 4567"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full rounded-lg border border-cream-200 px-3 py-2 text-navy-900"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy-900 text-white font-accent font-bold uppercase tracking-wider py-3 px-6 rounded-lg hover:bg-navy-800 transition-colors"
              >
                Get Options in 30 Minutes →
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
