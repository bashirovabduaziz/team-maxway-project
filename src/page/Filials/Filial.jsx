import React, { useState } from 'react';
import { MapProvider } from './MapContext';
import BranchList from './BranchList';
import MapComponent from './Map';

const Filial = () => {
  const [activeComponent, setActiveComponent] = useState('list');
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <MapProvider>
      <div className="App">
        <div className="flex justify-between p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <h1 className='text-4xl font-[700]'>Filiallar</h1>
          <div className='flex space-x-4'>
            <button
              className={`p-2 w-36 h-12 rounded-[50px] font-[600] duration-300 ${activeComponent === 'list' ? 'bg-[#51267D] text-white' : 'bg-[#F1EFF4] text-[#525659]'}`}
              onClick={() => setActiveComponent('list')}
            >
              Ro'yxat
            </button>
            <button
              className={`p-2 w-36 h-12 rounded-[50px] font-[600] duration-300 ${activeComponent === 'map' ? 'bg-[#51267D] text-white' : 'bg-[#F1EFF4] text-[#525659]'}`}
              onClick={() => setActiveComponent('map')}
            >
              Xarita
            </button>
          </div>
        </div>
        <main>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>{activeComponent === 'list' && <BranchList />}</div>
        {activeComponent === 'map' &&  <div className=' mt-10 relative left-0 w-full h-[700px] bg-slate-300 overflow-hidden '> <MapComponent onBranchSelect={setSelectedBranch} /></div>}
        </main>
      </div>
    </MapProvider>
  );
};

export default Filial;
