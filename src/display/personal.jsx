import "./display.css";
const PersonalDisplay = ({ personalInfo }) => {
  const { name, email, phone, place } = personalInfo;
  return (
    <div className="perOut">
      <div className="name">{name}</div>
      <div className="sub">
        <div className="item email">Email:{email}</div>
        <div className="item phone">Ph:{phone}</div>
        <div className="item place">{place}</div>
      </div>
    </div>
  );
};

export default PersonalDisplay;
