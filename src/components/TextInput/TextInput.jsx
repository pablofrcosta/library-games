import PropTypes from "prop-types"

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func
}



export default function TextInput({ label, value, setValue }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
      <label htmlFor="label">{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        placeholder={label} />
    </div>
  )
}