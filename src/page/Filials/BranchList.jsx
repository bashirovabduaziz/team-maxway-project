import React from 'react';
import branchesData from '../../../public/branches.json';
import './filial.css';
const BranchList = () => {
  return (
    <div className=' space-y-6 mt-5'>
      {branchesData.map((branch) => (
        <div key={branch.id} className=" branchlist h-[180px] w-[600px] p-5 rounded-2xl  border-gray-200">
         <div className='flex w-full justify-between'><h3 className=" text-xl font-[700] ">{branch.name}</h3><h4 className="text-[#5AC53A]">{branch.open}</h4></div> 
          <p>{branch.address}</p>
            <div className='w-full border-t mt-3 mb-3'></div>
          <div className='flex w-full justify-between'>
            <div>
              <h4 className='text-[#808080]'>Ish vaqti:</h4>
          <p>{branch.hours}</p>
          </div>
          <div className='flex flex-col items-end'>
            <h4 className=' text-[#808080]'>Telefon:</h4>
          <p>{branch.phone}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BranchList;
