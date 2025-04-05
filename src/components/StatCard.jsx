import { useState } from 'react';
import StatInput from './StatInput';

function StatCard({ stat, category, onUpdate }) {
    const handleEdit = () => {
      const newValue = prompt('Enter new value:', stat.value);
      if (newValue) {
        onUpdate(category, stat.label, newValue);
      }
    };
  
    return (
      <div className="border rounded-lg p-4 shadow bg-white">
        <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
        <p className="text-gray-600 mb-2">{stat.value}</p>
        <button
          className="bg-blue-500 text-white rounded px-3 py-1 text-sm"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    );
  }
  
  export default StatCard;
  