import type { Metadata } from "next";
import RedirectPage from "@/components/RedirectPage";

export const metadata: Metadata = {
  title: "Our work has moved",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function OldWorkIndex() {
  return <RedirectPage to="/#products" label="our products" />;
}
