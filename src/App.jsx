import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/Main.page";

function App() {
  return (
    <>
    <div style={{width: "100%", height: "100%"}}>
      <Switch>
        <Redirect exact from="/" to="/main" />
        <Route path="/main" component={MainPage} />
      </Switch>
    </div>
    </>
  );
}

export default App;
