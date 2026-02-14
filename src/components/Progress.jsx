export default function Progress({ current, total }) {
  return (
    <div className="progress">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={i <= current ? "dot active" : "dot"}
        />
      ))}
    </div>
  );
}
