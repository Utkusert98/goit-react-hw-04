const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        color: "red",
        textAlign: "center",
        marginTop: "20px",
        fontWeight: "bold",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
