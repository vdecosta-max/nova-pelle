import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { RegionProvider } from "@/lib/region-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nôva Pelle - Sustainable Footwear",
  description: "Handcrafted footwear from recycled materials. Style meets sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RegionProvider>
          <CartProvider>{children}</CartProvider>
        </RegionProvider>
        <Script
          src="https://orgfarm-17f42fbf54-dev-ed.develop.my.site.com/ESWNovaPelleWeb1775799532824/assets/js/bootstrap.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            try {
              // @ts-ignore
              (window as any).embeddedservice_bootstrap.settings.language = 'en_US';
              // @ts-ignore
              (window as any).embeddedservice_bootstrap.init(
                '00DgL00000P6pSu',
                'Nova_Pelle_Web',
                'https://orgfarm-17f42fbf54-dev-ed.develop.my.site.com/ESWNovaPelleWeb1775799532824',
                {
                  scrt2URL: 'https://orgfarm-17f42fbf54-dev-ed.develop.my.salesforce-scrt.com'
                }
              );
            } catch (err) {
              console.error('Error loading Embedded Messaging: ', err);
            }
          }}
        />
      </body>
    </html>
  );
}
