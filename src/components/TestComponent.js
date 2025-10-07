const TestComponent = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        border: "2px solid rgb(60, 94, 188)",
        borderRadius: "10px",
        textAlign: "center",
        margin: "20px",
        color: "black",
      }}
    >
      <h1>Компонент працює!</h1>
      <p>Це тестовий компонент для перевірки налаштувань</p>
      <button
        style={{
          padding: "10px 100px",
          backgroundColor: "rgb(60, 94, 188)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Успіх!")}
      >
        Click!
      </button>
    </div>
  );
};

export default TestComponent;
