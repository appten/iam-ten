"use client";

import React from "react";
import Link from "next/link";

export default function DocsApiApp() {
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

      <div className="content-card" style={{ padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "1.8rem" }}>📖</span>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-main)" }}>
              Dokumentasi API & SDK Platform
            </h1>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Spesifikasi endpoint REST API dan integrasi Single Sign-On (auth.ten.my.id).
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
              1. Endpoint Metrik & Modul
            </h3>
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", color: "var(--mono-dark)", fontFamily: "var(--font-mono)", fontSize: "0.82rem", overflowX: "auto" }}>
              <code>{`GET  /api/apps/list        -> Mengambil daftar katalog modul aktif
GET  /api/apps/views       -> Metrik kunjungan real-time
POST /api/apps/like        -> Memberikan like: { "slug": "views-counter", "add": true }`}</code>
            </pre>
          </div>

          <div>
            <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
              2. Autentikasi SSO (auth.ten.my.id)
            </h3>
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", color: "var(--mono-dark)", fontFamily: "var(--font-mono)", fontSize: "0.82rem", overflowX: "auto" }}>
              <code>{`GET  /api/auth/login       -> Redirect ke portal login auth.ten.my.id
GET  /api/auth/callback    -> Menerima payload token SSO dan membuat sesi cookie
POST /api/auth/verify      -> Verifikasi token server-to-server via payload`}</code>
            </pre>
          </div>

          <div>
            <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem", fontSize: "1rem", fontWeight: 700 }}>
              3. Contoh Integrasi SDK Klien
            </h3>
            <pre style={{ background: "#f8fafc", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", color: "var(--mono-dark)", fontFamily: "var(--font-mono)", fontSize: "0.82rem", overflowX: "auto" }}>
              <code>{`<script src="https://auth.ten.my.id/sso-sdk.js"></script>
<script>
  const sso = new TenSSO({
    appName: "Client App",
    ssoHost: "https://auth.ten.my.id",
    onSuccess: (user) => console.log("Login user:", user.email)
  });
  sso.renderLoginButton("#btn-container");
</script>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
