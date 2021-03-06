import SignupC from "./components/customer/signup";
import LoginC from "./components/customer/login";
import Home from "./components/customer/home";
import AddComplaint from "./components/customer/addcomplaint";
import ComplaintsList from "./components/customer/complaints";
import SignupA from "./components/admin/signup";
import LoginA from "./components/admin/login";
import AllComplaints from "./components/admin/allComplaints";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="container">
      <div className="App">
        {/* <SignupA />
        <LoginA />
        <AllComplaints /> */}
        <SignupC />
        <LoginC />
        <Home />
        <AddComplaint />
        <ComplaintsList />
      </div>
    </Router>
  );
}

export default App;
