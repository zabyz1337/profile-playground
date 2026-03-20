import { useState } from "react";
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextField,
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

          <div className="controls">
            <div className="name-row">
              <TextField
                label="Имя"
                value={profileSettings.name}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    name: e.target.value,
                  })
                }
                fullWidth
                size="small"
              />

              <TextField
                label="Фамилия"
                value={profileSettings.surname}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    surname: e.target.value,
                  })
                }
                fullWidth
                size="small"
              />
            </div>

            <FormControl fullWidth size="small">
              <Select
                value={profileSettings.role}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    role: e.target.value,
                  })
                }
              >
                <MenuItem value="Разработчик">💻 Разработчик</MenuItem>
                <MenuItem value="Дизайнер">🎨 Дизайнер</MenuItem>
                <MenuItem value="Тестировщик">🧪 Тестировщик</MenuItem>
                <MenuItem value="Менеджер">📋 Менеджер</MenuItem>
              </Select>
            </FormControl>

            <div className="control-block">
              <p className="control-label">
                Размер аватара: {profileSettings.avatarSize}px
              </p>

              <Slider
                value={profileSettings.avatarSize}
                min={40}
                max={100}
                step={10}
                onChange={(e, newValue) =>
                  setProfileSettings({
                    ...profileSettings,
                    avatarSize: newValue,
                  })
                }
              />
            </div>

            <div className="radio-row">
              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonColor === "primary"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonColor: "primary",
                      })
                    }
                  />
                }
                label="Primary"
              />

              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonColor === "secondary"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonColor: "secondary",
                      })
                    }
                  />
                }
                label="Secondary"
              />

              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonColor === "success"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonColor: "success",
                      })
                    }
                  />
                }
                label="Success"
              />

              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonColor === "error"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonColor: "error",
                      })
                    }
                  />
                }
                label="Error"
              />
            </div>

            <div className="radio-row">
              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonSize === "small"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonSize: "small",
                      })
                    }
                  />
                }
                label="Small"
              />

              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonSize === "medium"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonSize: "medium",
                      })
                    }
                  />
                }
                label="Medium"
              />

              <FormControlLabel
                control={
                  <Radio
                    checked={profileSettings.buttonSize === "large"}
                    onChange={() =>
                      setProfileSettings({
                        ...profileSettings,
                        buttonSize: "large",
                      })
                    }
                  />
                }
                label="Large"
              />
            </div>

            <FormControlLabel
              control={
                <Switch
                  checked={profileSettings.isOnline}
                  onChange={(e) =>
                    setProfileSettings({
                      ...profileSettings,
                      isOnline: e.target.checked,
                    })
                  }
                  color={profileSettings.buttonColor}
                />
              }
              label="Онлайн статус"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={profileSettings.showAlert}
                  onChange={(e) =>
                    setProfileSettings({
                      ...profileSettings,
                      showAlert: e.target.checked,
                    })
                  }
                  color={profileSettings.buttonColor}
                />
              }
              label="Показать Alert"
            />

            <RadioGroup
              row
              value={profileSettings.cardVariant}
              onChange={(e) =>
                setProfileSettings({
                  ...profileSettings,
                  cardVariant: e.target.value,
                })
              }
            >
              <FormControlLabel
                value="elevation"
                control={<Radio />}
                label="С тенью"
              />
              <FormControlLabel
                value="outlined"
                control={<Radio />}
                label="С обводкой"
              />
            </RadioGroup>

            <FormControlLabel
              control={
                <Checkbox
                  checked={profileSettings.showAlert}
                  onChange={(e) =>
                    setProfileSettings({
                      ...profileSettings,
                      showAlert: e.target.checked,
                    })
                  }
                  color={profileSettings.buttonColor}
                />
              }
              label="Дублировать управление Alert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
