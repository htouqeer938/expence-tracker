import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// Components
import Dashboard from "./components/Dashboard/Dashboard";

function Routes() {
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("user_detail"))?.token;
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token]);

  return (
    <div>
      {!token ? (
        history.push({
          pathname: "/",
          state: { msg: "Please Login to view" },
        })
      ) : (
        <Switch>
          <Route exact path={"/app"} component={Dashboard} />
        </Switch>
      )}
    </div>
  );
}

export default Routes;
