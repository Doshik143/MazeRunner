import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button/Button";
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
