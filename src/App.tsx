import React from "react";
import { CloudForm } from "CloudForm";
import { postData } from "api";

const App: React.FC = () => {
  return <CloudForm sendData={postData} />;
};

export default App;
