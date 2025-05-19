import { useState } from 'react';

export default function ClickableCategories() {
  // Tell TS the state can be either null or one of the category strings
  const [selected, setSelected] = useState<string | null>(null);

  const images: Record<string, string> = {
    STEM: '/images/Stem.png',
    ABM: '/images/Stem.png',
    HUMMS: '/images/Stem.png',
  };

  return (
    <div className="space-y-4 max-w-xs mx-auto mt-10 text-center">
      {Object.keys(images).map((category) => (
        <div
          key={category}
          className="cursor-pointer p-4 bg-[#02327a] text-white rounded-md hover:bg-[#34578b]"
          onClick={() => setSelected(category)}
        >
          {category}
        </div>
      ))}

      {selected && (
        <img
          src={images[selected]}
          alt={selected}
          className="mt-6 mx-auto rounded shadow max-w-full h-auto"
        />
      )}
    </div>
  );
}
