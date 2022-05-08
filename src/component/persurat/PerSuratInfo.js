import InfoSurat from "../UI/InfoSurat";
import { useCallback, useEffect, useState } from "react";
import LoadingScreen from "../UI/LoadingScreen";

const PerSuratInfo = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchInfoSurat = useCallback(async () => {
    setIsLoading(true);
    const responseInfoSurat = await fetch(
      `https://api.quran.com/api/v4/chapters/${props.nomorSurat}?language=id`
    );
    const infoSurat = await responseInfoSurat.json();
    const {
      chapter: {
        name_simple: namaSurat,
        revelation_place: tempatTurun,
        translated_name: { name: artiNamaSurat },
        verses_count: jumlahSurat,
      },
    } = infoSurat;

    // fetch info lengkap
    const responseInfoSuratLengkap = await fetch(
      `https://api.quran.com/api/v4/chapters/${props.nomorSurat}/info?language=id`
    );
    const infoSuratLengkap = await responseInfoSuratLengkap.json();
    const {
      chapter_info: { text: penjelasanSingkat, source },
    } = infoSuratLengkap;
    setData({
      namaSurat,
      tempatTurun,
      artiNamaSurat,
      jumlahSurat,
      penjelasanSingkat,
      source,
    });
    setIsLoading(false);
  }, [props.nomorSurat]);

  useEffect(() => {
    fetchInfoSurat();
  }, [fetchInfoSurat]);
  return (
    <>
      <InfoSurat onClose={props.onClose}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="px-6 py-2">
            <div className="text-center mb-5">
              <h3 className="font-bold text-lg">{data.namaSurat}</h3>
              <p className="font-light -mt-1 text-sm">{data.artiNamaSurat}</p>
            </div>
            <div>
              <div className="text-sm mb-5 font-bold">
                <p>Jumlah Surat : {data.jumlahSurat}</p>
                <p>Tempat Di turunkan : {data.tempatTurun}</p>
              </div>
              <div className="mb-4">
                <h4 className="mb-1">Info Surat :</h4>
                <div
                  className="text-justify overflow-y-scroll h-80 pr-2    "
                  dangerouslySetInnerHTML={{ __html: data.penjelasanSingkat }}
                ></div>
              </div>
              <div className="text-right mb-4">
                <button
                  onClick={props.onClose}
                  className="py-2 px-4 bg-primary rounded-xl text-white hover:bg-opacity-80"
                >
                  Tutup
                </button>
              </div>
              <div>
                <p className="text-sm font-light">Sumber : {data.source}</p>
              </div>
            </div>
          </div>
        )}
      </InfoSurat>
    </>
  );
};
export default PerSuratInfo;
