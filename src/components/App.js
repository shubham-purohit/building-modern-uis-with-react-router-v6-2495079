import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import TestRoute from './TestRoute';
import Nested from "./Nested";
import Categories from "./Categories";
import Category from "./Category";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>} />
        </Route>
        <Route path="register" element={<Register/>} />
        <Route path="confirmed" element={<Confirmation/>} />
        <Route path="main" element={<TestRoute />} />
        <Route path="main">
          <Route path="nested" element={<Nested />}/>
        </Route>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
