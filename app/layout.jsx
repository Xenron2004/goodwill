import SmoothScrollProvider from "../components/SmoothScroll";
import "./globals.css";
import Navbar from "../components/Navbar";
import { FooterSection } from "../components/Footer";
export const metadata = {
  title: "Good Will Institute of Hospitality & Catering Technology",
  description: "Launch Your World-Class Hospitality Career in Just 60 Days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrollProvider>
        <body>
          <Navbar />
          <main>{children}</main>
          <FooterSection />
        </body>
      </SmoothScrollProvider>
    </html>
  );
}
