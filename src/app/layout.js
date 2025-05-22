import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Noomim",
  description: "Noomim specializes in the production of durable and sustainable bigbags (FIBCs) for industrial transport and storage solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        {/* Background Video */}
        <div className="global-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/videos/cloud.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Main Content */}
        <Navbar />
        <div className="global-content-overlay">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}