"use client";

import React, { useState } from "react";

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
  compact?: boolean;
}

export default function ShareButton({
  title = "TEN — Ruang Personal & Catatan Karya",
  text = "Kunjungi dan lihat inisiatif karya di TEN Platform",
  url,
  className = "",
  compact = false,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const getShareUrl = () => {
    if (url) {
      if (url.startsWith("http")) return url;
      if (typeof window !== "undefined") {
        return `${window.location.origin}${url.startsWith("/") ? url : `/${url}`}`;
      }
    }
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "https://ten.my.id";
  };

  const handleNativeShare = async () => {
    const shareUrl = getShareUrl();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, proceed to fallback dropdown
        if ((err as Error).name !== "AbortError") {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  const copyToClipboard = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shareUrl = getShareUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback prompt if clipboard fails
      prompt("Salin tautan berikut:", shareUrl);
    }
  };

  const shareUrl = getShareUrl();
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(`${title} - ${text}`);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: "💬",
      href: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
    },
    {
      name: "X (Twitter)",
      icon: "𝕏",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "Telegram",
      icon: "✈️",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
  ];

  return (
    <div className={`share-btn-wrapper ${className}`} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={handleNativeShare}
        className="share-trigger-btn"
        title="Bagikan halaman ini"
        aria-label="Bagikan"
        aria-expanded={showDropdown}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="share-icon-svg"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        {!compact && <span className="share-btn-label">Bagikan</span>}
      </button>

      {/* Dropdown Menu untuk fallback desktop / opsi langsung */}
      {showDropdown && (
        <>
          <div
            className="share-backdrop"
            onClick={() => setShowDropdown(false)}
            aria-hidden="true"
          />
          <div className="share-dropdown-menu">
            <div className="share-dropdown-header">
              <span>Bagikan Tautan</span>
              <button
                type="button"
                className="share-close-btn"
                onClick={() => setShowDropdown(false)}
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            {/* Tombol Salin Cepat */}
            <div className="share-copy-box">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="share-copy-input"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                className={`share-copy-btn ${copied ? "copied" : ""}`}
              >
                {copied ? "✓ Tersalin" : "Salin"}
              </button>
            </div>

            {/* Social Share List */}
            <div className="share-social-grid">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-social-item"
                  onClick={() => setShowDropdown(false)}
                >
                  <span className="share-social-icon">{item.icon}</span>
                  <span className="share-social-text">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Floating Copied Toast jika disalin via tombol langsung */}
      {copied && !showDropdown && (
        <div className="share-toast-bubble">
          ✓ Tautan disalin ke clipboard!
        </div>
      )}
    </div>
  );
}
