import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const QUIPS = [
  "Satire... in this economy?",
  "This button doesn't do anything. Much like the framework itself.",
  "You clicked something on a fake website. Bold.",
  "404: Ambition not found.",
  "This feature was removed in the latest release to save bytes.",
  "Your click has been logged and will be deleted to reduce overhead.",
  "We considered adding functionality here, but it conflicted with our minimalist values.",
  "This interaction consumed more compute than OzempicClaw itself.",
];

export function QuipApp() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [quip, setQuip] = useState("");

  useEffect(() => {
    const handleQuipTrigger = () => {
      setQuip(QUIPS[Math.floor(Math.random() * QUIPS.length)]);
      setDialogOpen(true);
    };

    document.querySelectorAll("[data-quip-trigger]").forEach((el) => {
      el.addEventListener("click", handleQuipTrigger);
    });

    return () => {
      document.querySelectorAll("[data-quip-trigger]").forEach((el) => {
        el.removeEventListener("click", handleQuipTrigger);
      });
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDialogOpen(false);
    };
    if (dialogOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [dialogOpen]);

  if (!dialogOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/80 transition-opacity"
        onClick={() => setDialogOpen(false)}
      />
      <div className="relative z-50 w-full max-w-md mx-4 bg-background border border-border rounded-lg p-6 shadow-lg animate-in fade-in zoom-in-95">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">⚖️ OzempicClaw</h2>
          <p className="text-base text-muted-foreground pt-2">{quip}</p>
        </div>
        <button
          onClick={() => setDialogOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>,
    document.body
  );
}
