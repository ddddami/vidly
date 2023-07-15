const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input name={name} id={name} className="form-control" {...rest} />
      {error && <small className="text-danger form-text">{error}</small>}
    </div>
  );
};

export default Input;
