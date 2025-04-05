import { useState, useEffect } from 'react';
import StatCard from './components/StatCard';
import CollapsibleCategory from './components/CollapsibleCategory';
import StatInput from './components/StatInput';

function StatTracker() {
  const [stats, setStats] = useState(() => {
    // Load stats from localStorage or set default if none found
    const storedStats = localStorage.getItem('stats');
    return storedStats
      ? JSON.parse(storedStats)
      : {
          Environment: [
            { label: 'Current Location', value: 'Yale Library' },
            { label: 'Temperature', value: '21°C' },
            { label: 'Noise Level', value: 'Low' },
            { label: 'Air Circulation', value: 'Artificial (Heated indoor air, comfortable but slightly dry.)' },
            { label: 'Lighting Condition', value: 'Moderate (Soft indoor lighting, natural light increasing through windows.)' },
            { label: 'Crowd Density', value: 'Sparse (Only a few students present, calm study environment.)' },
            { label: 'Accessibility', value: 'High (Unobstructed seating, free movement between study areas.)' },
          ],
          Health: [
            { label: 'Sleep Debt', value: '0%' },
            { label: 'Blood Sugar Levels', value: '57%' }
          ],
          Devices: [
            { label: 'Phone Battery Level', value: '94%' }
          ]
        };
  });

  const [search, setSearch] = useState(''); // Search state

  // Effect hook to store stats in localStorage whenever the stats change
  useEffect(() => {
    localStorage.setItem('stats', JSON.stringify(stats));
  }, [stats]);

  // Handle update of stats
  const handleUpdate = (category, label, newValue) => {
    setStats(prevStats => ({
      ...prevStats,
      [category]: prevStats[category].map(stat =>
        stat.label === label ? { ...stat, value: newValue } : stat
      ),
    }));
  };

  // Filter stats based on search term
  const filteredStats = Object.entries(stats).reduce((acc, [category, items]) => {
    const filteredItems = items.filter(stat =>
      stat.label.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredItems.length) acc[category] = filteredItems;
    return acc;
  }, {});

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">📊 Statistics Tracker</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search stats..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loop through filtered categories */}
      {Object.entries(filteredStats).map(([category, items]) => (
        <div key={category} className="mb-6">
          <CollapsibleCategory category={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Loop through items inside category */}
              {items.map(stat => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  category={category}
                  onUpdate={handleUpdate}
                />
              ))}
            </div>
          </CollapsibleCategory>
        </div>
      ))}
    </div>
  );
}

export default StatTracker;
