import ListSurat from "../component/surat/ListSurat";
import { Route } from "react-router-dom";
import PerSurat from "../component/persurat/PerSurat";

const PageSurat = () => {
  return (
    <>
      <Route path="/surat/list-surat">
        <ListSurat />
      </Route>
      <Route path="/surat/persurat/:nomor">
        <PerSurat />
      </Route>
    </>
  );
};

export default PageSurat;
