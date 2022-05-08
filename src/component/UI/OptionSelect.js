import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const OptionSelect = (props) => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const fetchData = useCallback(async function () {
    const response = await fetch(
      `https://api.quran.com/api/v4/chapters?language=en`
    );
    const { chapters } = await response.json();
    const dataJadi = chapters.map((chapter) => {
      return {
        id: chapter.id,
        name: chapter.name_simple,
      };
    });
    setData(dataJadi);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // console.log(data)

  const optionChangeHandler = (e) => {
    const valueString = e.target.value;
    const indexFind = valueString.indexOf("-");
    const getNumber = valueString.slice(indexFind + 1);
    history.replace(getNumber);
  };

  return (
    <select
      className="bg-white rounded-lg py-1 px-2"
      value={`surat-${props.number}`}
      onChange={optionChangeHandler}
    >
      {data.map((option) => {
        return (
          <option key={option.id} value={`surat-${option.id}`}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};
export default OptionSelect;
