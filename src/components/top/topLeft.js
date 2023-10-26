function TopLeft({ text }) {
  return (
    <div className="top-left">
      <h1>
        {text.title}
        <br />
        {text.subtitle}
      </h1>
    </div>
  );
}

export default TopLeft;
