import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold mt-4">Welcome to Admin Dashboard</h1>
      <p>Use the sidebar to manage wallets and accounts.</p>
    </div>
  );
}
