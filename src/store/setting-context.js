import { createContext } from "react";

const SettingContext = createContext({
  idReciter: null,
  fontSize: 5,
  changeReciter: (id) => {},
  onChangeFontSize: () => {},
});

export default SettingContext;
