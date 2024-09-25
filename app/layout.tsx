import type { Metadata } from "next";
import { font } from "@/src/assets/fonts/fonts";
import { Footer, Navbar } from "@/src/components";
import ProviderWrapper from "@/redux/ProviderWrapper";
import "../src/assets/sass/index.scss";

export const metadata: Metadata = {
  title: "Historical Place",
  description: "information@@",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => (
  <ProviderWrapper>
    <html lang="en" className={font.className}>
      <body>
        <header className="container">
          {/* <Navbar /> */}
        <div className="padding">
        <Footer />
        </div>

        </header>
        {children}
        <Footer />
      </body>
    </html>
  </ProviderWrapper>
);

export default RootLayout;
