import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MailDetail from "./components/MailDetail";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mail/:id" element={<MailDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
