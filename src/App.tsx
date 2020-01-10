import React from "react";
import { CloudForm } from "CloudForm";
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 200, margin: "auto" }}>
          <Route path="/form" component={CloudForm} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
