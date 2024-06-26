import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "friends-eleven-dhobaura",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <hr />
        {children}
        <Footer />
        </body>
    </html>
  );
}
