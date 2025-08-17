import React from "react";

interface PdfContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function PdfContent({ children, className }: PdfContentProps) {
  return <div className={`pdf-content ${className || ""}`}>{children}</div>;
}
