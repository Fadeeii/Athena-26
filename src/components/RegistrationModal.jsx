import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function RegistrationModal({ isOpen, onClose, selectedPass, addToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    isIeee: false,
    ieeeId: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Sync isIeee status when pass type changes or matches standard rates
  useEffect(() => {
    if (selectedPass) {
      const isIeeePass = selectedPass.name.toLowerCase().includes("ieee");
      setFormData((prev) => ({
        ...prev,
        isIeee: isIeeePass,
        ieeeId: isIeeePass ? prev.ieeeId : "",
      }));
    }
  }, [selectedPass]);

  if (!isOpen || !selectedPass) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear errors for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid Email format";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Phone Number must be exactly 10 digits";
    }

    if (!formData.college.trim()) tempErrors.college = "College / Institution is required";

    if (formData.isIeee && !formData.ieeeId.trim()) {
      tempErrors.ieeeId = "IEEE Member ID is required for IEEE rate pass";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateUserId = import.meta.env.VITE_EMAILJS_TEMPLATE_USER_ID;
    const templateAdminId = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_college: formData.college,
      is_ieee_member: formData.isIeee ? "Yes" : "No",
      ieee_id: formData.ieeeId || "N/A",
      chosen_pass: selectedPass.name,
      pass_price: selectedPass.price,
      event_name: "ATHENA 2026",
      event_dates: "July 25 & 26, 2026",
      event_venue: "Government Engineering College Kozhikode",
    };

    // Check if configuration is present. If not, trigger the production-ready simulation flow
    if (!serviceId || !templateUserId || !templateAdminId || !publicKey) {
      console.warn(
        "EmailJS credentials missing. Running in Simulated Production Mode. To connect live, set Vite environment variables in your deployment."
      );
      console.log("SIMULATED DISPATCH DETAILS:", templateParams);
      
      setTimeout(() => {
        setLoading(false);
        addToast(
          `Registered successfully for ${selectedPass.name}! Confirmation email simulated.`,
          "success"
        );
        onClose();
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          isIeee: false,
          ieeeId: "",
        });
      }, 1500);
      return;
    }

    try {
      // Send User Confirmation and Admin Notification parallelly
      await Promise.all([
        emailjs.send(serviceId, templateUserId, templateParams, publicKey),
        emailjs.send(serviceId, templateAdminId, templateParams, publicKey),
      ]);

      addToast(
        `Registered successfully for ${selectedPass.name}! Confirmation emails sent.`,
        "success"
      );
      onClose();
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        isIeee: false,
        ieeeId: "",
      });
    } catch (err) {
      console.error("EmailJS dispatch failed:", err);
      addToast(
        "Failed to send registration confirmation. Please check network connection or credentials.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#050000]/80 backdrop-blur-md"
      />

      {/* Modal Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 280 }}
        className="relative max-w-lg w-full glass-dark p-8 sm:p-10 rounded-3xl border border-red-900/35 shadow-2xl shadow-black bg-[#0d0204]/95 overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Visual Top Highlight Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-red-950/20 hover:bg-red-950/40 p-2 rounded-full border border-red-900/20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Heading Info */}
        <div className="mb-6 text-left pr-10">
          <div className="flex items-center space-x-2 text-athena-pink mb-2">
            <Sparkles className="w-4.5 h-4.5 animate-pulse" />
            <span className="font-display font-extrabold text-xs uppercase tracking-widest">
              Pass Registration Form
            </span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-100 mb-1">
            Register for {selectedPass.name}
          </h3>
          <p className="font-sans text-xs text-slate-400 font-semibold">
            Please fill in your details to secure your pass at the rate of{" "}
            <span className="text-gradient-gold font-bold">{selectedPass.price}</span>.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-sans font-bold uppercase text-slate-400 tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-xl bg-red-950/15 border text-sm text-slate-100 placeholder:text-slate-550 transition-all duration-200 focus:outline-none focus:bg-red-950/25 ${
                errors.name ? "border-rose-600/70" : "border-red-950/60 focus:border-athena-pink/55"
              }`}
            />
            {errors.name && (
              <span className="text-[11px] font-sans font-bold text-rose-500 mt-1 block">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-sans font-bold uppercase text-slate-400 tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@example.com"
              className={`w-full px-4 py-3 rounded-xl bg-red-950/15 border text-sm text-slate-100 placeholder:text-slate-550 transition-all duration-200 focus:outline-none focus:bg-red-950/25 ${
                errors.email ? "border-rose-600/70" : "border-red-950/60 focus:border-athena-pink/55"
              }`}
            />
            {errors.email && (
              <span className="text-[11px] font-sans font-bold text-rose-500 mt-1 block">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-sans font-bold uppercase text-slate-400 tracking-wider mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={`w-full px-4 py-3 rounded-xl bg-red-950/15 border text-sm text-slate-100 placeholder:text-slate-550 transition-all duration-200 focus:outline-none focus:bg-red-950/25 ${
                errors.phone ? "border-rose-600/70" : "border-red-950/60 focus:border-athena-pink/55"
              }`}
            />
            {errors.phone && (
              <span className="text-[11px] font-sans font-bold text-rose-500 mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          {/* College / Institution */}
          <div>
            <label className="block text-xs font-sans font-bold uppercase text-slate-400 tracking-wider mb-1.5">
              College / Institution
            </label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="e.g. Government Engineering College Kozhikode"
              className={`w-full px-4 py-3 rounded-xl bg-red-950/15 border text-sm text-slate-100 placeholder:text-slate-550 transition-all duration-200 focus:outline-none focus:bg-red-950/25 ${
                errors.college ? "border-rose-600/70" : "border-red-950/60 focus:border-athena-pink/55"
              }`}
            />
            {errors.college && (
              <span className="text-[11px] font-sans font-bold text-rose-500 mt-1 block">
                {errors.college}
              </span>
            )}
          </div>

          {/* IEEE Member checkbox */}
          <div className="flex items-center space-x-2.5 py-1.5">
            <input
              type="checkbox"
              id="isIeee"
              name="isIeee"
              checked={formData.isIeee}
              onChange={handleChange}
              className="w-4 h-4 rounded border-red-950 text-athena-pink focus:ring-athena-pink/30 bg-red-950/20 cursor-pointer"
            />
            <label
              htmlFor="isIeee"
              className="text-xs font-sans font-bold text-slate-300 cursor-pointer select-none"
            >
              I am a registered IEEE Member
            </label>
          </div>

          {/* Conditionally Render IEEE Member ID */}
          <AnimatePresence initial={false}>
            {formData.isIeee && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-1.5 pb-2">
                  <label className="block text-xs font-sans font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                    IEEE Member ID
                  </label>
                  <input
                    type="text"
                    name="ieeeId"
                    value={formData.ieeeId}
                    onChange={handleChange}
                    placeholder="Enter your 8-digit IEEE Member ID"
                    className={`w-full px-4 py-3 rounded-xl bg-red-950/15 border text-sm text-slate-100 placeholder:text-slate-550 transition-all duration-200 focus:outline-none focus:bg-red-950/25 ${
                      errors.ieeeId ? "border-rose-600/70" : "border-red-950/60 focus:border-athena-pink/55"
                    }`}
                  />
                  {errors.ieeeId && (
                    <span className="text-[11px] font-sans font-bold text-rose-500 mt-1 block">
                      {errors.ieeeId}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-athena-crimson via-athena-maroon to-athena-gold text-white font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-athena-crimson/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Confirm Registration</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
