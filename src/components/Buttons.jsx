export default function Buttons({
  primaryText,
  secondaryText,
  onPrimary,
  onSecondary,
}) {
  return (
    <div className="buttons">
      <button className="primary" onClick={onPrimary}>
        {primaryText}
      </button>
      {secondaryText && (
        <button className="secondary" onClick={onSecondary}>
          {secondaryText}
        </button>
      )}
    </div>
  );
}
