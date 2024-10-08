import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-neutral-950 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">Spotify Clone</h2>
      <ul>
        <li className="mb-4 hover:text-green-500 transition-colors">
          <a href="#">Inicio</a>
        </li>
        <li className="mb-4 hover:text-green-500 transition-colors">
          <a href="#">Buscar</a>
        </li>
        <li className="mb-4 hover:text-green-500 transition-colors">
          <a href="#">Tu Biblioteca</a>
        </li>
        {/* Agrega más enlaces si es necesario */}
      </ul>
    </div>
  );
}
