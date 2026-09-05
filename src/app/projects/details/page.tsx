"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECT_ITEMS } from "@/data/profileData";
import ShareButton from "@/components/ShareButton";

function ProjectDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const project = PROJECT_ITEMS.find((p) => p.slug === slug) || PROJECT_ITEMS[0];

  return (
    <div style={{ paddingBottom: "2.5rem" }}>
      <div className="detail-top-nav">
        <Link href="/projects" className="action-btn-detail">
          ← Kembali ke Karya & Proyek
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShareButton
            title={`${project.name} — TEN`}
            text={project.description}
            url={`/projects/details?slug=${project.slug}`}
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
            src={project.imageUrl}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
            <div style={{ fontSize: "2rem" }}>{project.icon}</div>
            <div>
              <span className="card-badge-overlay" style={{ position: "static", display: "inline-block", marginBottom: "0.3rem" }}>
                {project.category}
              </span>
              <h1 style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)" }}>
                {project.name}
              </h1>
              <div style={{ fontSize: "0.82rem", color: "var(--mono-gray-mid)", fontFamily: "var(--font-mono)" }}>
                {project.metrics}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link
              href={`/projects/${project.slug}`}
              className="action-btn-goto"
            >
              Buka Karya / Modul ↗
            </Link>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem" }}>
          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Deskripsi Proyek
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
            {project.description}
          </p>

          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Arsitektur & Spesifikasi Detail
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
            {project.details}
          </p>

          <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
            Stack Teknologi & Integrasi
          </h3>
          <div className="tag-pills">
            {project.tech.map((t) => (
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

export default function ProjectDetailPage() {
  return (
    <Suspense fallback={<div style={{ padding: "3rem 0", textAlign: "center", color: "var(--text-dim)" }}>Memuat detail proyek...</div>}>
      <ProjectDetailContent />
    </Suspense>
  );
}
