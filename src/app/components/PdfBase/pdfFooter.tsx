import React from "react";

interface PdfFooterProps {
  fixed?: boolean;
  flexible?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function PdfFooter({
  fixed,
  flexible,
  children,
  className,
}: PdfFooterProps) {
  return (
    <div
      className={`pdf-footer ${
        fixed ? "fixed bottom-3 left-0 w-full" : flexible ? "mt-6" : ""
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}
