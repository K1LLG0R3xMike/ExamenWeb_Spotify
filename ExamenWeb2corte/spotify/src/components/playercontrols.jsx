import React from 'react';

export default function PlayerControls() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <img
          src="ruta_album.jpg"
          alt="Album cover"
          className="w-12 h-12 mr-4 rounded-lg"
        />
        <div>
          <h3 className="text-sm font-semibold">Nombre de la canción</h3>
          <p className="text-xs text-gray-400">Artista</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span
          className="iconify text-green-500 text-2xl cursor-pointer hover:text-green-400 transition"
          data-icon="ri:skip-back-line"
          title="Rewind"
        ></span>
        <span
          className="iconify text-green-500 text-2xl cursor-pointer hover:text-green-400 transition"
          data-icon="ri:play-circle-line"
          title="Play"
        ></span>
        <span
          className="iconify text-green-500 text-2xl cursor-pointer hover:text-green-400 transition"
          data-icon="ri:skip-forward-line"
          title="Forward"
        ></span>
      </div>
      <div className="flex items-center w-1/2 mx-4">
        <input
          type="range"
          min="0"
          max="100"
          className="w-full h-1 bg-neutral-700 rounded-lg cursor-pointer appearance-none"
        />
      </div>
      <div className="flex items-center">
        <span className="iconify text-green-500 text-xl cursor-pointer hover:text-green-400 transition" data-icon="ri:volume-up-line" title="Volumen"></span>
      </div>
    </div>
  );
}
