import { Navbar } from "@/Components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CubeCod: Software Development Company",
  description: "Easy to go software solution Company For your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`inter.className bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
