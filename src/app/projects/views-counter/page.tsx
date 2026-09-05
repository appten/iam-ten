"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ViewsCounterApp() {
  const [views, setViews] = useState(1240);
  const [likes, setLikes] = useState(34);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleSimulateVisit = () => {
    setViews((v) => v + 1);
  };

  return (
    <div style={{ paddingBottom: "2.5rem" }}>
      <div className="detail-top-nav">
        <Link href="/projects" className="action-btn-detail">
          ← Kembali ke Karya & Proyek
        </Link>
        <Link href="/" className="detail-brand-badge" title="Ke Halaman Utama">
          TEN
        </Link>
      </div>

      <div className="content-card" style={{ padding: "2.5rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          📊
        </div>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.5rem" }}>
          Views Counter & Edge Metrics (Live)
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", maxWidth: "520px", margin: "0 auto 2rem" }}>
          Modul analitik kunjungan real-time terintegrasi dengan Cloudflare KV dan simulasi state atomik.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem 2.5rem", minWidth: "220px", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--mono-gray-mid)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "var(--font-mono)" }}>
              Total Hits Terpantau
            </div>
            <div style={{ fontSize: "2.85rem", fontWeight: 800, color: "var(--text-main)", fontFamily: "var(--font-mono)" }}>
              {views.toLocaleString()}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "1.5rem 2.5rem", minWidth: "220px", boxShadow: "var(--shadow-card)" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--mono-gray-mid)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "var(--font-mono)" }}>
              Rekomendasi / Likes
            </div>
            <div style={{ fontSize: "2.85rem", fontWeight: 800, color: "var(--text-main)", fontFamily: "var(--font-mono)" }}>
              {likes.toLocaleString()}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <button onClick={handleSimulateVisit} className="btn-primary">
            <span>Simulasi Kunjungan (+1 Hit)</span>
          </button>
          <button
            onClick={handleLike}
            className="action-btn-detail"
            style={{
              borderColor: hasLiked ? "var(--mono-black)" : undefined,
              background: hasLiked ? "#f1f5f9" : undefined,
            }}
          >
            <span>{hasLiked ? "✓ Rekomendasi Diberikan" : "+ Beri Rekomendasi"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
