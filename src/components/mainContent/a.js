function ComponenteA({ object }) {
  return (
    <div className="main">
      <h2>{object.type}</h2>
      {object.other && (<h2>{object.other}</h2>)}
    </div>
  );
}

export default ComponenteA;
