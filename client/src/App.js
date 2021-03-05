import Signup from "./components/customer/signup";
import Login from "./components/customer/login";
import Home from "./components/customer/home";
import AddComplaint from "./components/customer/addcomplaint";

function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
      <Home />
      <AddComplaint />
    </div>
  );
}

export default App;
