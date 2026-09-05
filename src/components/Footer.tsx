import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/profileData";

export default function Footer() {
  return (
    <footer className="footer-contact">
      <div className="footer-minimal-inner">
        <div className="footer-copy">
          © {new Date().getFullYear()} {PROFILE_DATA.name} • {PROFILE_DATA.status}
          <span className="footer-admin-sep"> • </span>
          <Link href="/admin" className="footer-admin-link" title="Portal Admin Pengelola">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
