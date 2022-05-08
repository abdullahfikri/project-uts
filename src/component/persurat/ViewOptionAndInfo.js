import OptionSelect from "../UI/OptionSelect";

const ViewOptionAndInfo = (props) => {
  return (
    <div className="flex justify-center gap-2 font-bold text-xl text-center text-primary mt-8 mb-3">
      <div>
        <OptionSelect number={props.nomor} />
      </div>
      <div>|</div>
      <div>
        <button
          onClick={props.showInfoSurat}
          className="text-dark hover:text-gray-400"
        >
          Info Surat
        </button>
      </div>
    </div>
  );
};
export default ViewOptionAndInfo;
