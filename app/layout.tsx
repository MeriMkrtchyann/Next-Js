import "./globals.css";
import React from "react";
import {TheHeader} from "@/components/TheHeader";
import {TheFooter} from "@/components/TheFooter";

export const metadata = {
    title : "Home",
    description : "Home Home"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <TheHeader/>
              <main>
                  {children}
              </main>
          <TheFooter/>
      </body>
    </html>
  );
}
