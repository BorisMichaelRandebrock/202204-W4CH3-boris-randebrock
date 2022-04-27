const NumberButton = ({ number, action, nameClass }) => {
  return (
    <button onClick={action} className={nameClass}>
      {number}
    </button>
  );
};
export default NumberButton;
