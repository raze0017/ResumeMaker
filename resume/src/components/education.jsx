import FormComponent from "./FormComponent";

const Education = ({ formData, handleChange }) => {
  const fields = ["university", "grade", "start", "end"]; // Matches state keys
  return (
    <FormComponent
      formData={formData}
      handleChange={handleChange}
      fields={fields}
      section="education"
    />
  );
};

export default Education;
