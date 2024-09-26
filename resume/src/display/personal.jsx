const PersonalDisplay = ({ personalInfo }) => {
  const { name, email, phone, place } = personalInfo;
  return (
    <div>
      <div className="name">{name}</div>
      <div className="sub">
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
        <div className="place">{place}</div>
      </div>
    </div>
  );
};

export default PersonalDisplay;
