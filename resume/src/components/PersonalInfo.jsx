import FormComponent from "./FormComponent";

const PersonalInfo = ({ formData, handleChange }) => {
  const fields = ["name", "email", "phone", "place"];
  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
      fields={fields}
      section="PersonalInfo"
    />
  );
};

export default PersonalInfo;
