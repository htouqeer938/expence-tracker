import React, { Suspense } from "react";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={SignIn} />
          <Suspense
            fallback={
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "10%",
                }}
              >
                <CircularProgress style={{ color: "#007a7a " }} />
              </div>
            }
          >
            <Route path={"/app"} component={Routes} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}

export default App;
