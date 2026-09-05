"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination-wrap" aria-label="Navigasi Halaman">
      {/* Tombol Sebelumnya */}
      <button
        type="button"
        className="pagination-btn pagination-nav-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        title="Halaman Sebelumnya"
      >
        ← Prev
      </button>

      {/* Nomor Halaman */}
      <div className="pagination-numbers">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={`pagination-btn pagination-num-btn ${
              p === currentPage ? "active" : ""
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Tombol Berikutnya */}
      <button
        type="button"
        className="pagination-btn pagination-nav-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        title="Halaman Berikutnya"
      >
        Next →
      </button>
    </nav>
  );
}
