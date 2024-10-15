import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Photography Post Production Service | Vivian Studio",
  description:
    "Photography Post Production Service is the most vital parts of photography. We offer Bulk Professional Photo Editing Service for Photographers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
