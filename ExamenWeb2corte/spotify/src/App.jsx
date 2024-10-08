import React from 'react';
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import PlayerControls from './components/PlayerControls';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <TopBar />  {/* Barra superior en la parte superior */}
      <div className="flex pt-16">  {/* Espaciado para la barra superior */}
        <Sidebar className="mt-16" />  {/* Margen superior para Sidebar */}
        <MainView className="mt-16" />  {/* Margen superior para MainView */}
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;
