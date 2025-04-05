import { useState } from 'react';
import StatInput from './StatInput';

function StatCard({ stat, category, onUpdate }) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">{stat.label}</h2>
      {editing ? (
        <StatInput
          value={stat.value}
          onSave={(newValue) => {
            onUpdate(category, stat.label, newValue);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <>
          <p className="text-gray-600 mb-2">{stat.value}</p>
          <button
            className="bg-blue-500 text-white rounded px-3 py-1 text-sm"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default StatCard;
