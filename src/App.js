import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Rectangle from "./component/Rectangle";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Routes>
        <Route path="/:id" element={<Rectangle />} />
        <Route path="*" element={<Rectangle />} />
      </Routes>
    </div>
  );
}

export default App;
