import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  const user = WebApp.initDataUnsafe?.user;

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    WebApp.MainButton.setText("🚀 Продолжить");
    WebApp.MainButton.show();

    WebApp.MainButton.onClick(() => {
      alert("Кнопка нажата!");
    });
  }, []);

  if (!user) {
    return <p>Запусти мини-аппу из Telegram</p>;
  }

  return (
    <div>
      <h1>Привет, {user.first_name}</h1>
    </div>
  );
}

export default App;
