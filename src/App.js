import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import PageSurat from "./pages/PageSurat";
import Navbar from "./component/UI/Navbar";
import Footer from "./component/UI/Footer";
import NavbarSetting from "./component/UI/NavbarSetting";
import SettingProvider from "./store/SettingProvider";
import { useState } from "react";

const App = () => {
  const [isSetting, setIsSetting] = useState(false);

  const onClose = () => {
    setIsSetting((prevState) => !prevState);
  };
  return (
    <SettingProvider>
      <Navbar onOpen={onClose} />
      {isSetting && <NavbarSetting onClose={onClose} />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/surat/list-surat" />
        </Route>
        <Route path="/surat">
          <PageSurat />
        </Route>
      </Switch>
      <Footer></Footer>
    </SettingProvider>
  );
};

export default App;
