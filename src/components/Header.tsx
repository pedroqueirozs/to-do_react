import logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="bg-gray__700 h-32 flex items-center justify-center">
      {<img src={logo} alt="Aqui esta a logo do Todo" />}
    </div>
  );
}
