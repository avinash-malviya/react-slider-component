import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardRoundedIcon
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
export default NextBtn;
