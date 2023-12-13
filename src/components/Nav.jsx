import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-menu">
      <Link to={"/api"}>
        <nav className="nav-item"> Home</nav>
      </Link>
      <Link to={"/api/articles"}>
        <nav className="nav-item"> Articles</nav>
      </Link>
      <Link to={"/api/topics"}>
        <nav className="nav-item"> Topics</nav>
      </Link>
    </div>
  );
};

export default Nav;
