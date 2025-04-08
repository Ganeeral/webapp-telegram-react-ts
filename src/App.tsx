import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const tg = window.Telegram.WebApp;
  const user = tg.initDataUnsafe?.user;

  const [theme] = useState<"light" | "dark">(tg.colorScheme);

  useEffect(() => {
    tg.ready();
    tg.expand();

    tg.MainButton.setText("🚀 Продолжить");
    tg.MainButton.show();

    console.log("TG:", tg);
    console.log("USER:", user);

    tg.MainButton.onClick(() => {
      alert("Кнопка нажата!");
    });
  }, []);

  if (!user) {
    return (
      <p>
        Не удалось получить данные пользователя. Запустите мини-аппу из
        Telegram.
      </p>
    );
  }

  if (!window.Telegram?.WebApp) {
    return <p>WebApp API не доступен</p>;
  }

  return (
    <div className={`app ${theme}`}>
      <h1>Привет, {user?.first_name || "гость"} 👋</h1>
      <p>Вы запустили мини-приложение в Telegram!</p>

      <div className="card">
        <p>
          <strong>ID:</strong> {user?.id}
        </p>
        <p>
          <strong>Имя:</strong> {user?.first_name} {user?.last_name}
        </p>
        <p>
          <strong>Юзернейм:</strong> @{user?.username}
        </p>
      </div>
    </div>
  );
}

export default App;
