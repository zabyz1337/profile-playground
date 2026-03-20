import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextField,
} from "@mui/material";

function Controls({ settings, setSettings }) {
  return (
    <div className="controls">
      <div className="name-row">
        <TextField
          label="Имя"
          value={settings.name}
          onChange={(e) =>
            setSettings({
              ...settings,
              name: e.target.value,
            })
          }
          fullWidth
          size="small"
        />

        <TextField
          label="Фамилия"
          value={settings.surname}
          onChange={(e) =>
            setSettings({
              ...settings,
              surname: e.target.value,
            })
          }
          fullWidth
          size="small"
        />
      </div>

      <FormControl fullWidth size="small">
        <Select
          value={settings.role}
          onChange={(e) =>
            setSettings({
              ...settings,
              role: e.target.value,
            })
          }
        >
          <MenuItem value="Разработчик">💻 Разработчик</MenuItem>
          <MenuItem value="Дизайнер">🎨 Дизайнер</MenuItem>
          <MenuItem value="Тестировщик">🧪 Тестировщик</MenuItem>
          <MenuItem value="Менеджер">📋 Менеджер</MenuItem>
          <MenuItem value="Аналитик">📊 Аналитик</MenuItem>
        </Select>
      </FormControl>

      <div className="control-block">
        <p className="control-label">Размер аватара: {settings.avatarSize}px</p>

        <Slider
          value={settings.avatarSize}
          min={40}
          max={100}
          step={10}
          onChange={(e, newValue) =>
            setSettings({
              ...settings,
              avatarSize: newValue,
            })
          }
        />
      </div>

      <div className="radio-row">
        <FormControlLabel
          control={
            <Radio
              checked={settings.buttonColor === "primary"}
              onChange={() =>
                setSettings({
                  ...settings,
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
              checked={settings.buttonColor === "secondary"}
              onChange={() =>
                setSettings({
                  ...settings,
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
              checked={settings.buttonColor === "success"}
              onChange={() =>
                setSettings({
                  ...settings,
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
              checked={settings.buttonColor === "error"}
              onChange={() =>
                setSettings({
                  ...settings,
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
              checked={settings.buttonSize === "small"}
              onChange={() =>
                setSettings({
                  ...settings,
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
              checked={settings.buttonSize === "medium"}
              onChange={() =>
                setSettings({
                  ...settings,
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
              checked={settings.buttonSize === "large"}
              onChange={() =>
                setSettings({
                  ...settings,
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
            checked={settings.isOnline}
            onChange={(e) =>
              setSettings({
                ...settings,
                isOnline: e.target.checked,
              })
            }
            color={settings.buttonColor}
          />
        }
        label="Онлайн статус"
      />

      <FormControlLabel
        control={
          <Switch
            checked={settings.showAlert}
            onChange={(e) =>
              setSettings({
                ...settings,
                showAlert: e.target.checked,
              })
            }
            color={settings.buttonColor}
          />
        }
        label="Показать Alert"
      />

      <RadioGroup
        row
        value={settings.cardVariant}
        onChange={(e) =>
          setSettings({
            ...settings,
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
            checked={settings.showAlert}
            onChange={(e) =>
              setSettings({
                ...settings,
                showAlert: e.target.checked,
              })
            }
            color={settings.buttonColor}
          />
        }
        label="Дублировать управление Alert"
      />
    </div>
  );
}

export default Controls;
