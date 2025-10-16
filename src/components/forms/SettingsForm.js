import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button/Button";
import {
  SettingsForm,
  FormSection,
  FormGroup,
  FormSelect,
  ErrorMessage,
  RadioGroup,
  RadioLabel,
  RadioMark,
  FormActions,
} from "./SettingsForm.styles";

const SettingsFormComponent = ({ initialSettings, onSubmit, onCancel }) => {
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
    <SettingsForm onSubmit={handleSubmit(handleFormSubmit)}>
      <FormSection>
        <h3>Налаштування гри</h3>

        <FormGroup>
          <label htmlFor="difficulty">Складність:</label>
          <FormSelect
            id="difficulty"
            {...register("difficulty", { required: "Оберіть складність" })}
            className={errors.difficulty ? "error" : ""}
          >
            <option value="easy">Легка</option>
            <option value="medium">Середня</option>
            <option value="hard">Складна</option>
          </FormSelect>
          {errors.difficulty && (
            <ErrorMessage>{errors.difficulty.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label>Керування:</label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" value="keyboard" {...register("controls")} />
              <RadioMark></RadioMark>
              Клавіатура
            </RadioLabel>
            <RadioLabel>
              <input type="radio" value="buttons" {...register("controls")} />
              <RadioMark></RadioMark>
              Кнопки
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
      </FormSection>

      <FormActions>
        <Button type="button" variant="secondary" onClick={handleCancel}>
          Скасувати
        </Button>
        <Button type="submit" variant="primary" disabled={!isDirty}>
          Зберегти
        </Button>
      </FormActions>
    </SettingsForm>
  );
};

export default SettingsFormComponent;
