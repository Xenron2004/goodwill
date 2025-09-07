import SmoothScrollProvider from "../components/SmoothScroll";
import "./globals.css";
import Navbar from "../components/Navbar";
import { FooterSection } from "../components/Footer";
import AnnouncementBar from "../components/AnnouncementBar";
import ChatbotButton from "../components/ChatbotButton";
export const metadata = {
  title: "Good Will Institute of Hospitality & Catering Technology",
  description: "Launch Your World-Class Hospitality Career in Just 60 Days",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrollProvider>
        <body>
          <AnnouncementBar/>
          <Navbar />
          <main>{children}</main>
          <FooterSection />
          <ChatbotButton/>
        </body>
      </SmoothScrollProvider>
    </html>
  );
}
