import { Link } from 'react-router-dom';

export default function NivaLogo() {
  return (
    <Link to="/" className="niva-logo" aria-label="NIVA home">
      <span className="niva-word">NIVA</span>
      <span className="niva-accent" aria-hidden="true">
        <span className="niva-dot" />
        <span className="niva-bar" />
      </span>
    </Link>
  );
}
