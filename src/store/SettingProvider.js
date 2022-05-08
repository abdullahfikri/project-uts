import SettingContext from "./setting-context";
import { useReducer } from "react";

const defaultSetting = {
  idReciter: 3,
  fontSize: 5,
};
const settingReducer = (state, action) => {
  if (action.type === "CHANGE") {
    const updatedSize = action.size;
    return {
      idReciter: state.idReciter,
      fontSize: updatedSize,
    };
  }
  if (action.type === "RECITER") {
    return {
      idReciter: action.id,
      fontSize: state.fontSize,
    };
  }

  return defaultSetting;
};

const SettingProvider = (props) => {
  const [settingState, dispatchSetting] = useReducer(
    settingReducer,
    defaultSetting
  );

  const onChangeFontSize = (size) => {
    dispatchSetting({
      type: "CHANGE",
      size: size,
    });
  };

  const onChangeReciter = (id) => {
    dispatchSetting({
      type: "RECITER",
      id: id,
    });
  };

  const settingContext = {
    idReciter: settingState.idReciter,
    fontSize: settingState.fontSize,
    changeReciter: onChangeReciter,
    onChangeFontSize: onChangeFontSize,
  };
  return (
    <SettingContext.Provider value={settingContext}>
      {props.children}
    </SettingContext.Provider>
  );
};
export default SettingProvider;
