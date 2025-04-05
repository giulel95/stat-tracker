import { useState } from 'react';

function StatInput({ value, onSave, onCancel }) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => onSave(inputValue)}
        >
          Save
        </button>
        <button
          className="bg-gray-400 text-white px-3 py-1 rounded"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default StatInput;
