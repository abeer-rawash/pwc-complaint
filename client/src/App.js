import SignupC from "./components/customer/signup";
import LoginC from "./components/customer/login";
import Home from "./components/customer/home";
import ProtectedRoute from "./protectedRoute";
import AddComplaint from "./components/customer/addcomplaint";
import ComplaintsList from "./components/customer/complaints";
import SignupA from "./components/admin/signup";
import LoginA from "./components/admin/login";
import AllComplaints from "./components/admin/allComplaints";
import EditComplaint from "./components/admin/editComplaint";
import Welcome from "./components/welcome";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="container">
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/signupC" component={SignupC} />
        <Route path="/loginC" component={LoginC} />
        <ProtectedRoute
          path="/home"
          component={Home}
          isAuth={localStorage.length > 0 && localStorage.user === "Customer"}
        />
        <ProtectedRoute
          path="/addcomp"
          component={AddComplaint}
          isAuth={localStorage.length > 0 && localStorage.user === "Customer"}
        />
        <Route path="/complaintsId" component={ComplaintsList} />
        <Route path="/signupA" component={SignupA} />
        <Route path="/loginA" component={LoginA} />
        <ProtectedRoute
          path="/complaints"
          component={AllComplaints}
          isAuth={localStorage.length > 0 && localStorage.user === "Admin"}
        />
        <Route path="/edit/:id" component={EditComplaint} />
      </div>
    </Router>
  );
}

export default App;
