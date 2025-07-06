import { useState } from 'react';
import {
  BuildingOfficeIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';


function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [businessData, setBusinessData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://growth-x1hg.onrender.com/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });

    const data = await res.json();
    setBusinessData(data);
  };

  const regenerateHeadline = async () => {
    const res = await fetch(`https://growth-x1hg.onrender.com/regenerate-headline?name=${name}&location=${location}`);
    const data = await res.json();
    setBusinessData((prev) => ({ ...prev, headline: data.headline }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center px-4 py-8 sm:px-6">
  <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-700 text-center">
    Mini Local Business Dashboard
  </h1>
  <p className="text-gray-700 mb-6 text-center max-w-md">
    Simulate your local business SEO data and Google ratings. Perfect for small business owners
    to see how AI can generate catchy headlines!
  </p>

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-sm bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-700 flex items-center gap-1">
        <BuildingOfficeIcon className="h-5 w-5 text-green-600" />
        Business Name
      </label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g. Cake & Co"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-700 flex items-center gap-1">
        <MapPinIcon className="h-5 w-5 text-red-600" />
        Location
      </label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g. Mumbai"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
    </div>

    <button
      type="submit"
      className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
    >
      <MagnifyingGlassIcon className="h-5 w-5" />
      Get Business Data
    </button>
  </form>

  {businessData && (
    <div className="w-full max-w-sm mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-800">
      <h2 className="text-lg sm:text-xl font-semibold mb-1 flex items-center gap-1">
        <BuildingOfficeIcon className="h-6 w-6 text-red-600" />
        {name} ({location})
      </h2>
      <p className="text-xs sm:text-sm mb-3 text-gray-600">Your simulated local business performance:</p>

      <div className="flex items-center mb-2">
        <StarIcon className="h-5 w-5 text-yellow-400" />
        <span className="ml-2 font-medium">Google Rating:</span> {businessData.rating}⭐
      </div>

      <div className="flex items-center mb-2">
        <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-green-500" />
        <span className="ml-2 font-medium">Reviews:</span> {businessData.reviews}
      </div>

      <p className="mt-4 italic bg-blue-50 p-3 rounded text-blue-700 text-sm">
        "{businessData.headline}"
      </p>

      <button
        onClick={regenerateHeadline}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base"
      >
        <ArrowPathIcon className="h-5 w-5" />
        Regenerate SEO Headline
      </button>
    </div>
  )}
</div>



  );
}

export default App;
