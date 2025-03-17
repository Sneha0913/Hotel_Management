import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./Auth/Forgot";
// import SignIn from "./Auth/SignIn";
// import SignUp from "./Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/forgot" element={<Forgot />}></Route>
        {/* <Route path="/sign-in" element={<SignIn />}></Route> */}
        {/* <Route path="/sign-up" element={<SignIn />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;