import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-black p-4 flex items-center justify-between w-full fixed top-0 left-0 z-10">
        <button>
            <span className="iconify text-white" data-icon="mdi:menu" />
        </button>
        <button>
            <span className='iconify text-white' data-icon='mdi:home' />
        </button>
      <input
        type="text"
        placeholder="Buscar canciones..."
        className="bg-neutral-700 text-white rounded-md px-4 py-2 w-1/3 focus:outline-none"
      />
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-green-500 transition">
          <span className="iconify" data-icon="mdi:account-circle" />
        </button>
        <button className="text-white hover:text-green-500 transition">
          <span className="iconify" data-icon="mdi:bell" />
        </button>
      </div>
    </div>
  );
}
