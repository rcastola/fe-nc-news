import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-menu">
      <Link to={"/"}>
        <nav className="nav-item"> Home</nav>
      </Link>
      <Link to={"/articles"}>
        <nav className="nav-item"> Articles</nav>
      </Link>
      <Link to={"/topics"}>
        <nav className="nav-item"> Topics</nav>
      </Link>
    </div>
  );
};

export default Nav;
