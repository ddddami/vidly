const Input = ({ name, label, value, onChange, autoFocus }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        value={value}
        type={name}
        id={name}
        name={name}
        className="form-control"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
