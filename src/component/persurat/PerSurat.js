import { useHistory, useParams } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import PerSuratInfo from "./PerSuratInfo";
import ViewButtonNavigasi from "./ViewButtonNavigasi";
import ViewOptionAndInfo from "./ViewOptionAndInfo";
import ViewSurat from "./ViewSurat";
import SettingContext from "../../store/setting-context";
import LoadingScreen from "../UI/LoadingScreen";

const PerSurat = () => {
  const [shownInfoSurat, setShownInfoSurat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { nomor } = useParams();
  const history = useHistory();
  const [prevSurat, setPrevSurat] = useState(true);
  const [nextSurat, setNextSurat] = useState(true);
  const [dataArab, setDataArab] = useState([]);
  const [urlReciter, setUrlReciter] = useState(null);
  const suratFormat = nomor.padStart(3, "0");
  const settingCtx = useContext(SettingContext);

  const fetchDataSuratArab = useCallback(async () => {
    setIsLoading(true);
    //get arabic ayah
    const response = await fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${nomor}`
    );
    const data = await response.json();

    // get translation ayah
    const responseTranslation = await fetch(
      `https://api.quran.com/api/v4/quran/translations/33?chapter_number=${nomor}`
    );
    const dataTranslation = await responseTranslation.json();

    const dataAyat = data.verses.map((perAyat, index) => {
      const ayatFormat = (index + 1 + "").padStart(3, "0");
      return {
        id: perAyat.id,
        verses: perAyat.verse_key,
        textArab: perAyat.text_uthmani,
        terjemahan: dataTranslation.translations[index].text,
        audioFormat: suratFormat + ayatFormat,
      };
    });
    setDataArab(dataAyat);
    setIsLoading(false);
  }, [nomor, suratFormat]);

  const fetchDataUrl = useCallback(async () => {
    setIsLoading(true);
    const response =
      await fetch(`https://api.quran.com/api/v4/recitations/${settingCtx.idReciter}/by_chapter/${nomor}
`);
    const { audio_files } = await response.json();
    const { url } = audio_files[0];

    const indexEnd = url.indexOf(suratFormat + "001");
    const getUrlReciter = url.slice(0, indexEnd);

    setUrlReciter(getUrlReciter);
    setIsLoading(false);
  }, [nomor, suratFormat, settingCtx.idReciter]);

  // ********* useEffect
  useEffect(() => {
    fetchDataSuratArab();
    fetchDataUrl();
    window.scrollTo(0, 0);

    //Button handler
    if (nomor - 1 === 0) setPrevSurat(false);
    else setPrevSurat(true);

    if (+nomor + 1 === 115) setNextSurat(false);
    else setNextSurat(true);
  }, [nomor, fetchDataSuratArab, fetchDataUrl]);

  const showInfoSurat = () => setShownInfoSurat((prevState) => !prevState);

  // prev and next
  const buttonPrevNextHandler = (action) => {
    let ayatKe = nomor;
    if (action === "+") ayatKe++;
    else ayatKe--;
    history.replace(ayatKe + "");
  };

  return (
    <section className="min-h-screen">
      {shownInfoSurat && (
        <PerSuratInfo nomorSurat={nomor} onClose={showInfoSurat} />
      )}
      <div className="container mx-auto px-16 py-2">
        <ViewOptionAndInfo nomor={nomor} showInfoSurat={showInfoSurat} />
        <ViewButtonNavigasi
          prevSurat={prevSurat}
          nextSurat={nextSurat}
          buttonPrevNextHandler={buttonPrevNextHandler}
        />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <ViewSurat
            dataArab={dataArab}
            nomor={nomor}
            urlReciter={urlReciter}
          />
        )}
      </div>
    </section>
  );
};

export default PerSurat;
