import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" exact element={<PageNotFound />} />
      </Routes>
    </Router>
  </DndProvider>
);

export default App;
