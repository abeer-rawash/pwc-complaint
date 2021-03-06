import SignupC from "./components/customer/signup";
import LoginC from "./components/customer/login";
import Home from "./components/customer/home";
import AddComplaint from "./components/customer/addcomplaint";
import ComplaintsList from "./components/customer/complaints";
import SignupA from "./components/admin/signup";
import LoginA from "./components/admin/login";
import AllComplaints from "./components/admin/allComplaints";
import EditComplaint from "./components/admin/editComplaint";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="container">
      <div>
        <Route path="/signupC" component={SignupC} />
        <Route path="/loginC" component={LoginC} />
        <Route path="/home" component={Home} />
        <Route path="/addcomp" component={AddComplaint} />
        <Route path="/complaintsId" component={ComplaintsList} />
        <Route path="/signupA" component={SignupA} />
        <Route path="/loginA" component={LoginA} />
        <Route path="/complaints" component={AllComplaints} />
        <Route path="/edit/:id" component={EditComplaint} />
        {/* <ProtectedRoute
          path="/ItemsList"
          component={ItemsList}
          isAuth={localStorage.length > 0}
        />
        <ProtectedRoute
          path="/addItems"
          component={AddItems}
          isAuth={localStorage.length > 0}
        />
        <Route path="/addUser" component={Signup} />
        <Route path="/login" component={Login} />
        */}
      </div>
    </Router>
  );
}

export default App;
