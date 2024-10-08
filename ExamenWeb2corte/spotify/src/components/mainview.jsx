import React from 'react';

export default function MainView() {
  // Aquí puedes definir los álbumes como un array de objetos
  const albums = [
    {
      id: 1,
      title: "Álbum 1",
      artist: "Artista 1",
      cover: "ruta_album1.jpg", // Reemplaza con la ruta de la imagen del álbum
    },
    {
      id: 2,
      title: "Álbum 2",
      artist: "Artista 2",
      cover: "ruta_album2.jpg", // Reemplaza con la ruta de la imagen del álbum
    },
    {
      id: 3,
      title: "Álbum 3",
      artist: "Artista 3",
      cover: "ruta_album3.jpg", // Reemplaza con la ruta de la imagen del álbum
    },
    // Agrega más álbumes según sea necesario
  ];

  return (
    <div className="flex-1 bg-neutral-900 text-white p-5 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-5">Bienvenido a tu música</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-black p-4 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <img
              src={album.cover}
              alt={`Portada de ${album.title}`}
              className="w-full h-32 object-cover mb-2 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{album.title}</h3>
            <p className="text-sm text-gray-400">{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
