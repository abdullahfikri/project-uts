import { useContext } from "react";

import SettingContext from "../../store/setting-context";
const NavbarSetting = (props) => {
  const settingCtx = useContext(SettingContext);
  const onChangeHandler = (e) => {
    let value = e.target.value;
    if (value > 6) value = 6;
    else if (value < 1) value = 1;
    settingCtx.onChangeFontSize(value);
  };

  const onChangeReciterHandler = (e) => {
    const value = e.target.value;
    settingCtx.changeReciter(value);
  };

  return (
    <div className="absolute w-96 top-0 right-0 bg-white h-auto px-5 py-10  ">
      <div className="flex justify-between border-b-2 pb-2 mb-2">
        <h4 className="font-bold text-lg ">Setting</h4>
        <button
          className="font-bold text-xl px-2 hover:bg-primary hover:text-white hover:rounded-full"
          onClick={props.onClose}
        >
          x
        </button>
      </div>
      <div className="mb-2">
        <p className="font-bold text-gray-500">Ukuran Font</p>
        <div>
          <input
            className="border text-center"
            type="number"
            min="2"
            max="6"
            onChange={onChangeHandler}
            value={settingCtx.fontSize}
          />
        </div>
      </div>
      <div>
        <p className="font-bold text-lg text-gray-500 mb-1">Reciter</p>
        <select
          value={settingCtx.idReciter}
          className="text-white bg-primary p-2 rounded-lg"
          onChange={onChangeReciterHandler}
        >
          <option value="7">Mishari Rashid al-`Afasy</option>
          <option value="3">Abdur-Rahman as-Sudais</option>
          <option value="9">Mohamed Siddiq al-Minshawi</option>
        </select>
      </div>
    </div>
  );
};

export default NavbarSetting;
