import React from "react";
import { CloudForm } from "CloudForm";
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={CloudForm} />
    </BrowserRouter>
  );
};

export default App;
