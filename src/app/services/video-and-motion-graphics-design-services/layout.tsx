import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "#1 Video editing & Motion design studio | Vivian Studio",
  description:
    "Get moving with a team of fully stacked video editing & motion designing team and enhance your brand's assets across your website, digital campaigns ads and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
