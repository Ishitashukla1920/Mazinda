import react from 'react';

export default function WalletTable({ wallets, onFreezeToggle }) {
    return (
      <table className="min-w-full bg-white shadow-md rounded mt-4">
        <thead>
          <tr>
            <th className="p-2 border-b">ID</th>
            <th className="p-2 border-b">User</th>
            <th className="p-2 border-b">Balance</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet) => (
            <tr key={wallet.id}>
              <td className="p-2 border-b">{wallet.id}</td>
              <td className="p-2 border-b">{wallet.user}</td>
              <td className="p-2 border-b">{wallet.balance}</td>
              <td className="p-2 border-b">{wallet.status}</td>
              <td className="p-2 border-b">
                <button
                  onClick={() =>
                    onFreezeToggle(wallet.id, wallet.status === "active" ? "freeze" : "unfreeze")
                  }
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {wallet.status === "active" ? "Freeze" : "Unfreeze"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  