import classes from "./InfoSurat.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const InfoSuratOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");
const InfoSurat = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <InfoSuratOverlay>{props.children}</InfoSuratOverlay>,
        portalElement
      )}
    </>
  );
};

export default InfoSurat;
