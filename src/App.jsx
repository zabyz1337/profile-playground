import { useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
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

  const fullName = `${profileSettings.name} ${profileSettings.surname}`;
  const firstLetter = profileSettings.name.trim()
    ? profileSettings.name.trim()[0].toUpperCase()
    : "?";

  return (
    <div className="app">
      <div className="layout">
        <div className="panel">
          <h2 className="section-title">👤 Карточка профиля</h2>

          <Card
            variant={profileSettings.cardVariant}
            elevation={profileSettings.cardVariant === "elevation" ? 3 : 0}
            className="profile-card"
          >
            <CardContent>
              <div className="profile-top">
                <Avatar
                  className={`avatar avatar-${profileSettings.buttonColor}`}
                  style={{
                    width: `${profileSettings.avatarSize}px`,
                    height: `${profileSettings.avatarSize}px`,
                    fontSize: `${profileSettings.avatarSize / 2.2}px`,
                  }}
                >
                  {firstLetter}
                </Avatar>

                <div className="profile-info">
                  <Typography variant="h6" className="profile-name">
                    {fullName}
                  </Typography>

                  <Typography
                    variant="body2"
                    className={
                      profileSettings.isOnline
                        ? "status status-online"
                        : "status status-offline"
                    }
                  >
                    {profileSettings.isOnline ? "● Онлайн" : "○ Офлайн"}
                  </Typography>
                </div>
              </div>

              <div className="chip-row">
                <Chip
                  icon={<PersonIcon />}
                  label={profileSettings.role}
                  variant="outlined"
                  color={profileSettings.buttonColor}
                />
              </div>
            </CardContent>

            <CardActions className="actions-row">
              <Button
                variant="contained"
                color={profileSettings.buttonColor}
                size={profileSettings.buttonSize}
              >
                Написать
              </Button>

              <Button
                variant="outlined"
                color={profileSettings.buttonColor}
                size={profileSettings.buttonSize}
              >
                Предложить работу
              </Button>
            </CardActions>

            {profileSettings.showAlert && (
              <div className="alert-box">
                <Alert severity="info">Идет поиск стажеров</Alert>
              </div>
            )}
          </Card>
        </div>

        <div className="panel">
          <h2 className="section-title">🎮 Настройки</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
