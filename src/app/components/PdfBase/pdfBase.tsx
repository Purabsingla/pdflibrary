import React from "react";

interface PdfBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ref: React.Ref<HTMLDivElement | null>;
}

interface referal {
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export default function PdfBase({
  id,
  className,
  children,
  ref,
}: PdfBaseProps) {
  return (
    <div
      ref={ref}
      id={id || "pdf-base"}
      className={`pdf-base ${className || ""}`}
    >
      {children}
    </div>
  );
}

export const HandleExport = async ({ contentRef }: referal) => {
  try {
    const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>PDF Export</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body class="p-6">
    ${contentRef.current?.innerHTML}
  </body>
</html>`;

    const res = await fetch("/api/export-pdf", {
      method: "POST",
      body: JSON.stringify({ html }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to export PDF");

    // Get the PDF blob
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    // Open in new tab (browser's default PDF viewer)
    window.open(url, "_blank");
  } catch (err) {
    console.error("Error exporting PDF:", err);
  }
};
