import "../../index.css";
import classesSize from "./ListAyat.module.css";
import AudioAyat from "./AudioAyat";
const ListAyat = (props) => {
  return (
    <div
      id={`section-${props.id}`}
      className={`${classesSize["list-ayat"]} w-full flex justify-between py-12 border-b-2 border-primary`}
    >
      <div className="inline tracking-wider font-bold">{props.verse}</div>
      <div className="w-11/12">
        <p
          className={`text-right font-medium mb-4 ${
            classesSize[`font${props.fontSize}`]
          }`}
        >
          {props.arabic}
        </p>
        <AudioAyat
          nomorSurat={props.nomorSurat}
          urlReciter={props.urlReciter}
          audioFormat={props.audioFormat}
          index={props.index}
        />
        <p
          className={`text-2xl mt-4`}
          dangerouslySetInnerHTML={{ __html: props.terjemahan }}
        ></p>
      </div>
    </div>
  );
};
export default ListAyat;
