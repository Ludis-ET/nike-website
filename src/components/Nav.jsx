import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

export const Nav = () => {
  return (
    <header>
      <nav>
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
};
