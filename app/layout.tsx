import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Gaming boi",
  description: "this is a gaming website dod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}   antialiased`}>
        <p className="font-bold">this is test text</p>
        {children}
        {/* <NavBar /> */}
      </body>
    </html>
  );
}
