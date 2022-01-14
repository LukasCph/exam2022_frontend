import { useState, useEffect } from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import Signup from "./components/Signup";
import AssistantEndpoint from "./components/Endpoints/AssistantEndpoint";
import BookingEndpoint from "./components/Endpoints/BookingEndpoint";
import AdminEndpoint from "./components/Endpoints/AdminEndpoint";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Facade
import { facade } from "./apiFacade";

function App() {
  const initialState = {
    username: "",
    password: "",
  };
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);

  useEffect(() => {
    if (sessionStorage.getItem("username") && facade.loggedIn) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
      />
      {loggedIn && <SideBar />}
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        
        <Route
          path="/signup"
          element={
            <Signup
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/allAssistants" element={<AssistantEndpoint />} />
        <Route path="/makebooking" element ={<BookingEndpoint/>}/>
        <Route path="/third" />
        <Route path="/forth" />
        <Route path="/admin" element ={<AdminEndpoint/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
