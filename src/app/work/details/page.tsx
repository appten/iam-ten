"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { WORK_ITEMS } from "@/data/profileData";
import ShareButton from "@/components/ShareButton";

function WorkDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const work = WORK_ITEMS.find((w) => w.id === id) || WORK_ITEMS[0];

  return (
    <div style={{ paddingBottom: "2.5rem" }}>
      <div className="detail-top-nav">
        <Link href="/work" className="action-btn-detail">
          ← Kembali ke Pengalaman
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShareButton
            title={`${work.role} di ${work.company} — TEN`}
            text={work.summary}
            url={`/work/details?id=${work.id}`}
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
            src={work.imageUrl}
            alt={work.role}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="card-badge-overlay" style={{ position: "static", display: "inline-block", marginBottom: "0.5rem" }}>
              {work.period}
            </span>
            <h1 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.2rem" }}>
              {work.role}
            </h1>
            <div style={{ fontSize: "0.9rem", color: "var(--mono-gray-mid)", fontFamily: "var(--font-mono)" }}>
              {work.company} • {work.location}
            </div>
          </div>

          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn-goto"
          >
            Tautan Inisiatif ↗
          </a>
        </div>

        <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem" }}>
          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Deskripsi Peran
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
            {work.summary}
          </p>

          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Tanggung Jawab & Pencapaian Utama
          </h3>
          <ul className="modal-bullet-list" style={{ marginBottom: "1.25rem" }}>
            {work.details.map((d, i) => (
              <li key={i} className="modal-bullet-item">
                {d}
              </li>
            ))}
          </ul>

          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Keahlian & Teknologi Terapan
          </h3>
          <div className="tag-pills">
            {work.skills.map((s) => (
              <span key={s} className="tag-pill" style={{ padding: "0.15rem 0.55rem", fontSize: "0.72rem" }}>
                #{s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function WorkDetailPage() {
  return (
    <Suspense fallback={<div style={{ padding: "3rem 0", textAlign: "center", color: "var(--text-dim)" }}>Memuat detail pekerjaan...</div>}>
      <WorkDetailContent />
    </Suspense>
  );
}
