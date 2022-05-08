const AudioAyat = (props) => {
  const onEndedHandler = () => {
    const id = `audio-${+props.index + 1}`;
    const nextAudio = document.getElementById(id);

    if (nextAudio != null) {
      nextAudio.load();
      nextAudio.play();
      const coordinate = nextAudio.getBoundingClientRect();

      window.scrollTo({
        left: coordinate.left + window.scrollX,
        top: coordinate.top + window.scrollY - 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <audio
      id={`audio-${props.index}`}
      controls
      src={`https://verses.quran.com/${props.urlReciter}${props.audioFormat}.mp3`}
      onEnded={onEndedHandler}
    >
      Your browser does not support audio
    </audio>
  );
};
export default AudioAyat;
