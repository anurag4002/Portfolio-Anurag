"use client";

import { useRef, useState } from "react";

// Email link that copies the address on click and falls back to mailto when the clipboard is unavailable.
export default function EmailCopy({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!navigator.clipboard) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={onClick}
      className={`email ${copied ? "is-copied" : ""} ${className}`}
      title="Click to copy"
    >
      <span className="email-address">{email}</span>
      <span className="email-done" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </a>
  );
}
