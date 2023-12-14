import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-page">
      <h1 className="page-title">HOME</h1>
      <Link to={"/articles"}>
        <h2>Read all our articles by clicking here.</h2>
      </Link>
      <Link to={"/topics"}>
        <h2>See a list of topics by clicking here. </h2>
      </Link>
      <h2>Want to submit an article? Click here.</h2>
    </div>
  );
};

export default Home;
