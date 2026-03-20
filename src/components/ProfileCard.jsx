import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function ProfileCard({ settings, setSettings }) {
  const fullName = `${settings.name} ${settings.surname}`;
  const firstLetter = settings.name.trim()
    ? settings.name.trim()[0].toUpperCase()
    : "?";

  const handleWriteClick = () => {
    alert(`Напиши сообщение для ${fullName}`);
  };

  const handleJobClick = () => {
    const confirmed = confirm(`Хочешь предложить работу ${fullName}?`);

    if (confirmed) {
      alert(`Заявка отправлена! ${fullName} получит предложение`);
    } else {
      alert("Отправка отменена");
    }
  };

  const handleAlertButtonClick = () => {
    alert("Спасибо, что прочитал!");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setSettings({
        ...settings,
        avatarImage: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const getJobButtonText = () => {
    switch (settings.role) {
      case "Разработчик":
        return "Предложить проект";
      case "Дизайнер":
        return "Предложить заказ";
      case "Менеджер":
        return "Предложить вакансию";
      case "Аналитик":
        return "Предложить стажировку";
      default:
        return "Предложить работу";
    }
  };

  return (
    <Card
      variant={settings.cardVariant}
      elevation={settings.cardVariant === "elevation" ? 3 : 0}
      className="profile-card"
    >
      <CardContent>
        <div className="profile-top">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              settings.isOnline ? <span className="online-dot" /> : null
            }
          >
            <Avatar
              src={settings.avatarImage}
              className={`avatar avatar-${settings.buttonColor}`}
              style={{
                width: `${settings.avatarSize}px`,
                height: `${settings.avatarSize}px`,
                fontSize: `${settings.avatarSize / 2.2}px`,
              }}
            >
              {!settings.avatarImage && firstLetter}
            </Avatar>
          </Badge>

          <div className="profile-info">
            <Typography variant="h6" className="profile-name">
              {fullName}
            </Typography>

            <Typography
              variant="body2"
              className={
                settings.isOnline
                  ? "status status-online"
                  : "status status-offline"
              }
            >
              {settings.isOnline ? "● Онлайн" : "○ Офлайн"}
            </Typography>
          </div>
        </div>

        <div className="upload-row">
          <Button
            variant="outlined"
            component="label"
            startIcon={<PhotoCamera />}
            size="small"
          >
            Загрузить фото
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </div>

        <div className="chip-row">
          <Chip
            icon={<PersonIcon />}
            label={settings.role}
            variant="outlined"
            color={settings.buttonColor}
          />
        </div>
      </CardContent>

      <CardActions className="actions-row">
        <Tooltip title="Нажми, чтобы написать сообщение">
          <Button
            variant="contained"
            color={settings.buttonColor}
            size={settings.buttonSize}
            onClick={handleWriteClick}
          >
            Написать
          </Button>
        </Tooltip>

        <Tooltip title="Нажми, чтобы отправить предложение">
          <Button
            variant="outlined"
            color={settings.buttonColor}
            size={settings.buttonSize}
            onClick={handleJobClick}
          >
            {getJobButtonText()}
          </Button>
        </Tooltip>
      </CardActions>

      {settings.showAlert && (
        <div className="alert-wrapper">
          <div className="alert-box">
            <Alert
              severity="info"
              variant="filled"
              action={
                <Button
                  color="inherit"
                  size="small"
                  onClick={handleAlertButtonClick}
                >
                  Понятно
                </Button>
              }
            >
              Не забудь загрузить аватарку!
            </Alert>
          </div>

          <div className="mini-alerts">
            <Alert severity="success" variant="outlined">
              Отлично! MUI работает
            </Alert>
            <Alert severity="info" variant="outlined">
              Попробуй изменить цвет кнопок
            </Alert>
            <Alert severity="warning" variant="outlined">
              Не забывай про атрибуты
            </Alert>
            <Alert severity="error" variant="outlined">
              Ошибок нет, все отлично!
            </Alert>
          </div>
        </div>
      )}
    </Card>
  );
}

export default ProfileCard;
