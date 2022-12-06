import "./App.css";
import MainPage from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import ProductPage from "./products/index.js";
import UploadPage from "./upload";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<PlusOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
          <div id="footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
