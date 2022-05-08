const ViewButtonNavigasi = (props) => {
  return (
    <div className="flex justify-center gap-6 mt-5">
      {props.prevSurat && (
        <button
          onClick={props.buttonPrevNextHandler.bind(false, "-")}
          className="rounded-lg py-1 px-2 bg-primary text-white"
        >
          Surat Sebelumnya
        </button>
      )}
      {props.nextSurat && (
        <button
          onClick={props.buttonPrevNextHandler.bind(false, "+")}
          className="rounded-lg py-1 px-2 bg-primary text-white"
        >
          Surat Setelahnya
        </button>
      )}
    </div>
  );
};
export default ViewButtonNavigasi;
