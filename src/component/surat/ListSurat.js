import { useCallback, useEffect, useState } from "react";
import Surat from "./Surat";

const ListSurat = () => {
  const [dataSurat, setDataSurat] = useState([]);

  // Mengambil list surat menggunakan API
  const fetchDataSurat = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.quran.com/api/v4/chapters?language=id"
      );

      const data = await response.json();

      const storeDataSurat = data.chapters.map((perSurat) => {
        return {
          nomorSurat: perSurat.id,
          namaSurat: perSurat.name_simple,
          namaArabic: perSurat.name_arabic,
          artiNamaSurat: perSurat.translated_name.name,
          jumlahSurat: perSurat.verses_count,
        };
      });

      setDataSurat(storeDataSurat);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchDataSurat();
  }, [fetchDataSurat]);

  return (
    <section>
      <div className="container m-auto p-5">
        <ul className="flex flex-wrap gap-6 justify-between p-16">
          {dataSurat.map((data) => {
            return (
              <Surat
                key={data.nomorSurat}
                namaSurat={data.namaSurat}
                nomorSurat={data.nomorSurat}
                namaArabic={data.namaArabic}
                jumlahSurat={data.jumlahSurat}
                artiNamaSurat={data.artiNamaSurat}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default ListSurat;
