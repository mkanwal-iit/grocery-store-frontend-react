import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <LogoutLink />
      </nav>
    </header>
  );
}
