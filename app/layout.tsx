import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProviders from "@/components/providers/query-providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <QueryProviders>
          {children}
        </QueryProviders>
      </body>
    </html>
  );
}
