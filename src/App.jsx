import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Controls from "./components/Controls";
import "./App.css";

function App() {
  const [profileSettings, setProfileSettings] = useState({
    name: "Анна",
    surname: "Петрова",
    role: "Разработчик",
    avatarSize: 80,
    buttonColor: "primary",
    buttonSize: "medium",
    isOnline: false,
    cardVariant: "elevation",
    showAlert: true,
    avatarImage: "",
  });

  return (
    <div className="app">
      <div className="layout">
        <div className="panel">
          <h2 className="section-title">👤 Карточка профиля</h2>
          <ProfileCard
            settings={profileSettings}
            setSettings={setProfileSettings}
          />
        </div>

        <div className="panel">
          <h2 className="section-title">🎮 Настройки</h2>
          <Controls
            settings={profileSettings}
            setSettings={setProfileSettings}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
