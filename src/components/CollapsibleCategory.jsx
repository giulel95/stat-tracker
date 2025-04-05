import { useState } from 'react';

function CollapsibleCategory({ category, children }) {
  const [isOpen, setIsOpen] = useState(false); // Start with the category closed

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center cursor-pointer">
        <h2
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-semibold text-blue-500"
        >
          {category}
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          {isOpen ? '▼' : '▶️'}
        </button>
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default CollapsibleCategory;
