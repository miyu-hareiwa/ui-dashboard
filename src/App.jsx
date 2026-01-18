import Input from "./Input";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Input placeholder="名前" />
      <Input placeholder="メール" disabled />
    </div>
  );
}

export default App;
