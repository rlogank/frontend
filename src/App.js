import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Category from "./pages/Category";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AOS from "aos";
import "aos/dist/aos.css";

dayjs.extend(relativeTime);
AOS.init();

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:text-neutral-300 dark:bg-neutral-900 text-neutral-800 p-10 transition-all">
      <div className="max-w-screen-2xl mx-auto">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
