export default function Input({
  value,
  onChange,
  placeholder,
  error = false,
  errorMessage = ""
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: error ? "1px solid red" : "1px solid #ccc",
          width: "100%"
        }}
      />

      {error && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}
