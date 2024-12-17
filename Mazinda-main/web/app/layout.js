import "./global.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Admin Panel",
  description: "Wallet and Account Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
