import React,{lazy,Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Spin} from "antd";
import SignUp from './Containers/Pages/SignUp';
import NotFound from './Containers/Pages/NotFound';
import SignInPage from "./Containers/Pages/SignIn";
import './App.css';
const Dashboard = lazy(()=>import("./Containers/Dashboard/Dashboard"));


function App() {

  const style = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    position:"relative",
    top:"50vh"
  }

  return (
   <Router>
     <Switch>
            <Route exact path="/">
              <Suspense fallback={
                  <div style={style}>
                    <Spin 
                      spinning={true}
                      tip="Hold on tight as we get things ready for you"
                    />
                  </div>
              }>
                <Dashboard />
              </Suspense>
            </Route>
            <Route exact path="/sign-up">
                <SignUp />
            </Route>
            <Route exact path="/sign-in" >
              <SignInPage />
            </Route>
            <Route path='/404' component={NotFound} />
            <Redirect from="*" to="/404" />
        </Switch>
    </Router>
  );
}

export default App;
