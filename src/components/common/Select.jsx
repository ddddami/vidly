const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="form-select" {...rest}>
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <small className="text-danger form-text">{error}</small>}
    </div>
  );
};

export default Select;
