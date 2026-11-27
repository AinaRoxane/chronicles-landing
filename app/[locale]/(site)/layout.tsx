import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { Feedback } from "@/components/layout/feedback";

/**
 * Chrome shared by every public page. The 404 lives outside this group so it
 * keeps the bare layout of the original `404.html`.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
      <Feedback />
    </>
  );
}
