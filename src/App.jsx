import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SingleArticle from "./SingleArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1> NC NEWS</h1>
        <Routes>
          <Route path="api/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
