import "./App.css";
import MainPage from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./products/index.js";
import UploadPage from "./upload";

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPage />
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <ProductPage />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
