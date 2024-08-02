import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Chum Bucket",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
