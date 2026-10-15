import type { Metadata } from "next";
import RedirectPage from "@/components/RedirectPage";

export const metadata: Metadata = {
  title: "Software has moved",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function OldSoftwareIndex() {
  return <RedirectPage to="/#products" label="our products" />;
}
