import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Navbar } from "./Pages/Navbar";
import { RegisterPageOne } from "./Pages/RegisterPageOne";
import { RegisterPageTwo } from "./Pages/RegisterPageTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/register/one"
          element={<RegisterPageOne></RegisterPageOne>}
        ></Route>
        <Route
          path="/register/two"
          element={<RegisterPageTwo></RegisterPageTwo>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
