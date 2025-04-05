import { useState } from 'react';

function StatInput({ value, onSave, onCancel }) {
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white rounded px-3 py-1 text-sm mr-2"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white rounded px-3 py-1 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default StatInput;
