/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

interface PPE {
  id: string;
  name: string;
  caNumber: string;
}

export default function App() {
  const [ppes, setPpes] = useState<PPE[]>([]);

  useEffect(() => {
    fetch('/api/ppes')
      .then((res) => res.json())
      .then((data) => setPpes(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão de EPIs</h1>
      <ul className="space-y-2">
        {ppes.map((ppe) => (
          <li key={ppe.id} className="border p-2 rounded">
            {ppe.name} - CA: {ppe.caNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}
