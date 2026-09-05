"use client";

import React from "react";
import Link from "next/link";

export default function CloudflareStatusApp() {
  return (
    <div style={{ paddingBottom: "2.5rem" }}>
      <div className="detail-top-nav">
        <Link href="/projects" className="action-btn-detail">
          ← Kembali ke Karya & Proyek
        </Link>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <a
            href="https://www.cloudflarestatus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn-goto"
          >
            Tab Baru ↗
          </a>
          <Link href="/" className="detail-brand-badge" title="Ke Halaman Utama">
            TEN
          </Link>
        </div>
      </div>

      <div className="content-card" style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "1.6rem" }}>⚡</span>
          <div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)" }}>
              Cloudflare Network & CDN Status Monitor
            </h1>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Live iframe integrasi pemantauan status ketersediaan edge global.
            </p>
          </div>
        </div>

        <div style={{ width: "100%", height: "620px", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-subtle)", background: "#ffffff" }}>
          <iframe
            src="https://www.cloudflarestatus.com"
            title="Cloudflare Status Live"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
