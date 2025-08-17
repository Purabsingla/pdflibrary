import React from "react";

interface PdfHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function PdfHeader({ children, className }: PdfHeaderProps) {
  return <div className={`pdf-header ${className || ""}`}>{children}</div>;
}
