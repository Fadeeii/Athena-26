import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

export default function Toast({ toasts, removeToast }) {
  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ToastItem({ toast, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = toast.type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.95, transition: { duration: 0.25 } }}
      layout
      className={`pointer-events-auto w-full p-4 rounded-2xl glass-light border backdrop-blur-xl shadow-2xl flex items-start space-x-3.5 ${
        isSuccess
          ? "border-emerald-500/25 shadow-emerald-950/10"
          : "border-rose-500/25 shadow-rose-950/10"
      }`}
    >
      {/* Icon */}
      <div className={`mt-0.5 p-1 rounded-lg ${isSuccess ? "bg-emerald-950/45 text-emerald-400" : "bg-rose-950/45 text-rose-400"}`}>
        {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
      </div>

      {/* Content */}
      <div className="flex-grow text-left">
        <h5 className={`font-display font-bold text-sm ${isSuccess ? "text-emerald-400" : "text-rose-400"}`}>
          {isSuccess ? "Success" : "Error"}
        </h5>
        <p className="font-sans text-xs text-slate-200 mt-1 leading-relaxed font-semibold">
          {toast.message}
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-200 transition-colors mt-0.5 hover:bg-white/5 p-1 rounded-md"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
