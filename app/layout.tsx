import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1B6FEB",
};

export const metadata: Metadata = {
  title: "Ninelm Technologies — Building technology for Africa",
  description:
    "Ninelm Technologies builds products that solve real, everyday problems for Africans. Our first product is LRR — Lagos Roadside Rescue.",
  metadataBase: new URL("https://ninelm.com"),
  openGraph: {
    title: "Ninelm Technologies — Building technology for Africa",
    description: "We build products that solve real, everyday problems for Africans.",
    url: "https://ninelm.com",
    siteName: "Ninelm Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
