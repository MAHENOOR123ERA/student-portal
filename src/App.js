import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CourseSelect from "./pages/CourseSelect";
import StudentCard from "./pages/StudentCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseSelect />} />
        <Route path="/card" element={<StudentCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
