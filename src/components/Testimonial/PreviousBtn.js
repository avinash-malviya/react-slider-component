import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackRoundedIcon
        style={{
          color: "black",
          fontSize: "3rem",
          borderRadius: "50%",
          backgroundColor: "rgb(160, 195, 248, 0.1)",
        }}
      />
    </div>
  );
};
export default PreviousBtn;
