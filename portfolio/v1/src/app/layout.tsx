import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div className="w-full h-screen">
          <iframe
            title="3D Model"
            src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?ui_infos=0&ui_watermark_link=0&ui_watermark=0"
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            className="w-full h-full"
          ></iframe>
        </div> */}

        <Navbar />
        {children}
      </body>
    </html>
  );
}
