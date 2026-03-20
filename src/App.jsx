import { useState } from "react";
import "./App.css";

function App() {
  const [profileSettings, setProfileSettings] = useState({
    name: "Анна",
    surname: "Петрова",
    role: "Разработчик",
    avatarSize: 40,
    buttonColor: "primary",
    buttonSize: "medium",
    isOnline: false,
    cardVariant: "elevation",
    showAlert: true,
  });

  return (
    <div className="app">
      <div className="layout">
        <div className="panel">
          <pre>{JSON.stringify(profileSettings, null, 2)}</pre>
        </div>
        <div className="panel">Настройки</div>
      </div>
    </div>
  );
}

export default App;
