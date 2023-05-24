import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "Generated by Nukrobzero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} prose lg:prose-2xl mx-auto bg-slate-800 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
