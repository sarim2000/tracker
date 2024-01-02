
type Props = {
    type: string,
    name: string,
    labelText: string,
    defaultValue: string
}

const FormRow = ({type,name,labelText,defaultValue}: Props) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}

export default FormRow