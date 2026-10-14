import { Geist, Geist_Mono,Padauk,Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const padauk = Padauk({
  subsets: ["myanmar"],
  weight: ["400", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "Agri dashboard",
  description: "Track your orders with ease using our order tracking system. Stay updated on the status of your purchases and receive real-time notifications. Our user-friendly interface allows you to quickly check the progress of your orders, ensuring a seamless shopping experience.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${padauk.className} ${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
         <Toaster />
      </body>
    </html>
  );
}
