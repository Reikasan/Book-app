import React, { useEffect } from "react";
import axios from "axios";

const App: React.FC = () => {
  useEffect(() => {
    const fecthFromLaravel = async () => {
        const res = await axios.get("/api/hello");
        alert(res.data.hello);
    };
    fecthFromLaravel();
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;