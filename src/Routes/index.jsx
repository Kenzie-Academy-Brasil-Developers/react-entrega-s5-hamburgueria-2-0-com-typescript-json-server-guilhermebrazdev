import { Switch, Route } from "react-router-dom";

import Login from "../Pages/Login";
import SignUp from "../Pages/Register";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
