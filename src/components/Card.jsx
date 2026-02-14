export default function Card({ text, children }) {
  return (
    <div className="card">
      <p className="cardText">{text}</p>
      {children}
    </div>
  );
}
