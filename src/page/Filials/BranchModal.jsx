import React from 'react';

const BranchModal = ({ branch, onClose }) => {
  if (!branch) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{branch.name}</h2>
        <p>{branch.address}</p>
        <p>Ish vaqti: {branch.hours}</p>
        <p>Telefon: {branch.phone}</p>
        <button onClick={onClose}>Yopish</button>
      </div>
    </div>
  );
};

export default BranchModal;