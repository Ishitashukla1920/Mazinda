import react from 'react';

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link href="/wallets">Wallets</Link>
        </li>
        <li className="mb-2">
          <Link href="/accounts">Accounts</Link>
        </li>
      </ul>
    </div>
  );
}