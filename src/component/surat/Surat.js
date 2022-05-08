import Card from "../UI/Card";
import { Link } from "react-router-dom";

const Surat = (props) => {
  const nomorSurat = props.nomorSurat;
  return (
    <li className=" w-80 text-center">
      <Link to={`/surat/persurat/${nomorSurat}`}>
        <Card className="flex items-center justify-between px-5">
          <div>
            <p className="font-bold text-lg">{props.nomorSurat}.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">{props.namaSurat}</h3>
            <p className="font-light text-sm mb-3">{props.artiNamaSurat}</p>
            <h2 className="font-semibold text-xl ">{props.namaArabic}</h2>
          </div>
          <div className="">
            <p>
              <span className="font-bold">{props.jumlahSurat}</span>{" "}
              <span className="block font-light">ayat</span>
            </p>
          </div>
        </Card>
      </Link>
    </li>
  );
};
export default Surat;
