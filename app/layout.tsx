import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Losch Dental | Endodontologie met aandacht — Utrecht", template: "%s | Losch Dental" },
  description: "Elke Losch is tandarts met expertise in endodontologie in Utrecht en omgeving. Zorgvuldige wortelkanaalbehandelingen, herbehandelingen en aandacht voor uw comfort.",
  robots: { index: true, follow: true },
  openGraph: { title: "Losch Dental | Endodontologie met aandacht", description: "Deskundige endodontologische zorg, met rust en persoonlijke aandacht.", type: "website", locale: "nl_NL" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#163d35" };

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="nl"><body>{children}</body></html>;
}
