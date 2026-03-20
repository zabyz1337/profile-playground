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

function ProfileCard({ settings }) {
  const fullName = `${settings.name} ${settings.surname}`;
  const firstLetter = settings.name.trim()
    ? settings.name.trim()[0].toUpperCase()
    : "?";

  return (
    <Card
      variant={settings.cardVariant}
      elevation={settings.cardVariant === "elevation" ? 3 : 0}
      className="profile-card"
    >
      <CardContent>
        <div className="profile-top">
          <Avatar
            className={`avatar avatar-${settings.buttonColor}`}
            style={{
              width: `${settings.avatarSize}px`,
              height: `${settings.avatarSize}px`,
              fontSize: `${settings.avatarSize / 2.2}px`,
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
                settings.isOnline
                  ? "status status-online"
                  : "status status-offline"
              }
            >
              {settings.isOnline ? "● Онлайн" : "○ Офлайн"}
            </Typography>
          </div>
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
        <Button
          variant="contained"
          color={settings.buttonColor}
          size={settings.buttonSize}
        >
          Написать
        </Button>

        <Button
          variant="outlined"
          color={settings.buttonColor}
          size={settings.buttonSize}
        >
          Предложить работу
        </Button>
      </CardActions>

      {settings.showAlert && (
        <div className="alert-box">
          <Alert severity="info">Идет поиск стажеров</Alert>
        </div>
      )}
    </Card>
  );
}

export default ProfileCard;
