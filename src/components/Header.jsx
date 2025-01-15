import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h4>ВКОНТАКТЕ</h4>
    </header>
  );
}
