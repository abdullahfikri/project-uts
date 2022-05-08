import bismillah from "../../assets/bismillah.png";
import ListAyat from "./ListAyat";
import { useEffect, useState } from "react";
import { useContext } from "react";
import SettingContext from "../../store/setting-context";

const ViewSurat = (props) => {
  const [showBismillah, setShowBismillah] = useState(true);
  const settingCtx = useContext(SettingContext);

  useEffect(() => {
    if (props.nomor === "1") {
      setShowBismillah(false);
    } else {
      setShowBismillah(true);
    }
  }, [props.nomor]);
  return (
    <div>
      {showBismillah && (
        <img
          src={bismillah}
          alt="Bismillah"
          className="text-black w-52 mx-auto mt-8"
        />
      )}

      {props.dataArab.map((data, index) => {
        return (
          <ListAyat
            fontSize={settingCtx.fontSize}
            key={data.id}
            id={data.id}
            verse={data.verses}
            arabic={data.textArab}
            terjemahan={data.terjemahan}
            audioFormat={data.audioFormat}
            urlReciter={props.urlReciter}
            nomorSurat={props.nomor}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default ViewSurat;
