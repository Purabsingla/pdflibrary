"use client";

import {
  HandleExport,
  PdfBase,
  PdfContent,
  PdfFooter,
  PdfHeader,
} from "./components";
import { useRef } from "react";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <PdfBase
        ref={contentRef}
        className="w-[800px] mx-auto bg-white shadow-lg p-6 border border-gray-300"
      >
        <PdfHeader
          className={
            "border-b border-gray-400 pb-2 mb-4 bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 "
          }
        >
          <h1 className="text-2xl font-bold text-center">My PDF Report</h1>
          <p className="text-sm text-gray-300 text-center">
            Generated with Next.js
          </p>
        </PdfHeader>
        <PdfContent className="text-gray-800 leading-relaxed space-y-4">
          <p>
            This is the main content of your PDF. You can add tables, charts, or
            text here.
          </p>
          <ul className="list-disc list-inside">
            <li>Supports Tailwind CSS</li>
            <li>Easy to export</li>
            <li>Reusable Components</li>
          </ul>
        </PdfContent>
        <PdfFooter
          fixed
          className="border-t border-gray-400 mt-6 pt-2 text-center text-sm text-gray-600"
        >
          <p>© 2025 My Company. All rights reserved.</p>
        </PdfFooter>
      </PdfBase>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
        onClick={async () => {
          if (!contentRef.current) return;
          await HandleExport({ contentRef });
        }}
      >
        Download PDF
      </button>
    </>
  );
}
