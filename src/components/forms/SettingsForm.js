import { useForm } from "react-hook-form";
import Button from "../../UI/Button/Button";
import "./SettingsForm.css";

const SettingsForm = ({ initialSettings, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: initialSettings,
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    reset(initialSettings);
    onCancel();
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form-section">
        <h3>Налаштування гри</h3>

        <div className="form-group">
          <label htmlFor="difficulty">Складність:</label>
          <select
            id="difficulty"
            {...register("difficulty", { required: "Оберіть складність" })}
            className={errors.difficulty ? "error" : ""}
          >
            <option value="easy">Легка</option>
            <option value="medium">Середня</option>
            <option value="hard">Складна</option>
          </select>
          {errors.difficulty && (
            <span className="error-message">{errors.difficulty.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mazeSize">Розмір лабіринту:</label>
          <input
            id="mazeSize"
            type="number"
            min="3"
            max="10"
            {...register("mazeSize", {
              required: "Введіть розмір лабіринту",
              min: { value: 3, message: "Мінімальний розмір: 3" },
              max: { value: 10, message: "Максимальний розмір: 10" },
            })}
            className={errors.mazeSize ? "error" : ""}
          />
          {errors.mazeSize && (
            <span className="error-message">{errors.mazeSize.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="gameSpeed">Швидкість гри:</label>
          <select
            id="gameSpeed"
            {...register("gameSpeed", { required: "Оберіть швидкість" })}
          >
            <option value="slow">Повільна</option>
            <option value="normal">Нормальна</option>
            <option value="fast">Швидка</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" {...register("enableSounds")} />
            <span className="checkmark"></span>
            Увімкнути звуки
          </label>
        </div>

        <div className="form-group">
          <label>Керування:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" value="keyboard" {...register("controls")} />
              <span className="radiomark"></span>
              Клавіатура
            </label>
            <label className="radio-label">
              <input type="radio" value="buttons" {...register("controls")} />
              <span className="radiomark"></span>
              Кнопки
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={handleCancel}>
          Скасувати
        </Button>
        <Button type="submit" variant="primary" disabled={!isDirty}>
          Зберегти
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;
