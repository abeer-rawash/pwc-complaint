import SignupC from "./components/customer/signup";
import SignupA from "./components/admin/signup";
import LoginC from "./components/customer/login";
import LoginA from "./components/admin/login";
import Home from "./components/customer/home";
import AddComplaint from "./components/customer/addcomplaint";
import ComplaintsList from "./components/customer/complaints";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="container">
      <div className="App">
        <SignupA />
        <LoginA />
        {/* <SignupC />
        <LoginC />
        <Home />
        <AddComplaint />
        <ComplaintsList /> */}
      </div>
    </Router>
  );
}

export default App;
