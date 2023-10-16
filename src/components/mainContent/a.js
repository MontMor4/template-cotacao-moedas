import React from 'react';

function ComponenteA({ object }) {
  return (
    <div className="room">
      <h2>{object.type}</h2>
      {object.other && (<h2>{object.other}</h2>)}
    </div>
    
    
  );
}

export default ComponenteA;
