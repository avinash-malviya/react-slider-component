import "./testimonialCard.css";

const Card = ({ location, designation, message, lorem, name }) => {
  return (
    <div className="card-container">
      <h2 id="main-heading">{message}</h2>
      <p>{lorem}</p>
      <div className="user-details">
        <div>
          <span className="user">{name} </span>
          <span id="other-details">
            ,{designation}, {location}
          </span>
        </div>
        <div>
          <a href="#">READ FULL STORY</a>
        </div>
      </div>
    </div>
  );
};
export default Card;
