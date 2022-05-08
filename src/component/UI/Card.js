const Card = (props) => {
  return (
    <div className={`bg-white p-3 rounded-xl w-full ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Card;
