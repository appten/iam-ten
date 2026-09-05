"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PUBLICATION_ITEMS } from "@/data/profileData";
import ShareButton from "@/components/ShareButton";

function PublicationDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const pub = PUBLICATION_ITEMS.find((p) => p.id === id) || PUBLICATION_ITEMS[0];

  return (
    <div style={{ paddingBottom: "2.5rem" }}>
      <div className="detail-top-nav">
        <Link href="/publications" className="action-btn-detail">
          ← Kembali ke Tulisan & Publikasi
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShareButton
            title={`${pub.title} — TEN`}
            text={pub.summary}
            url={`/publications/details?id=${pub.id}`}
          />
          <Link href="/" className="detail-brand-badge" title="Ke Halaman Utama">
            TEN
          </Link>
        </div>
      </div>

      <article className="content-card-detail">
        {/* Banner Gambar */}
        <div style={{ width: "100%", height: "220px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "1.5rem", border: "1px solid var(--border-subtle)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pub.imageUrl}
            alt={pub.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="card-badge-overlay" style={{ position: "static", display: "inline-block", marginBottom: "0.5rem" }}>
              Tahun {pub.year}
            </span>
            <h1 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.2rem" }}>
              {pub.title}
            </h1>
            <div style={{ fontSize: "0.9rem", color: "var(--mono-gray-mid)", fontFamily: "var(--font-mono)" }}>
              {pub.publisher}
            </div>
          </div>

          <a
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn-goto"
          >
            Baca Tulisan Lengkap ↗
          </a>
        </div>

        <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem" }}>
          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Ringkasan Publikasi
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
            {pub.summary}
          </p>

          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Abstrak Riset
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, background: "#f8fafc", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)", marginBottom: "1.25rem" }}>
            {pub.abstract}
          </p>

          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Topik & Kata Kunci
          </h3>
          <div className="tag-pills">
            {pub.tags.map((t) => (
              <span key={t} className="tag-pill" style={{ padding: "0.15rem 0.55rem", fontSize: "0.72rem" }}>
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function PublicationDetailPage() {
  return (
    <Suspense fallback={<div style={{ padding: "3rem 0", textAlign: "center", color: "var(--text-dim)" }}>Memuat detail publikasi...</div>}>
      <PublicationDetailContent />
    </Suspense>
  );
}
