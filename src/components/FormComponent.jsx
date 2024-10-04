const FormComponent = ({ formData, handleChange, fields, section }) => {
  return (
    <form>
      {fields.map((field) => (
        <div key={field}>
          <label>{field}</label>
          <input
            type="text"
            name={`${section}.${field}`}
            value={formData[field]}
            onChange={(e) => handleChange(e)}
          />
        </div>
      ))}
    </form>
  );
};

export default FormComponent;
