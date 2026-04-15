import type { Metadata } from "next";
import "./globals.css";
import HomePage from './page';

export const metadata: Metadata = {
  title: "Finance RPG",
  description: "A playful finance tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HomePage />
        {/* <main>{children}</main> */}
      </body>
    </html>
  );
}
