import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

export default function NewCard() {
  const [name, setName] = useState("");
  const [link, setLinkCard] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  const handleLinkCardChange = (event) => {
    setLinkCard(event.target.value);
    setIsLinkValid(event.target.validity.valid);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsNameValid(event.target.validity.valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPlaceSubmit({ name, link });
  };

  return (
    <form className="form" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Nuevo lugar</legend>
        <input
          onChange={handleNameChange}
          id="title-input"
          className="form__field form__field-title"
          type="text"
          placeholder="Título"
          value={name}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="title-input-error form__field-error"></span>
        <input
          value={link}
          onChange={handleLinkCardChange}
          id="link-image"
          className="form__field form__field-link-image"
          type="url"
          placeholder="Enlace a la imagen"
          pattern="https?://.+"
          required
        />
        <span className="link-image-error form__field-error"></span>
        <button
          className={`form__button ${
            isLinkValid && isNameValid ? "" : "form__button-disabled"
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={!(isLinkValid && isNameValid)}
        >
          Crear
        </button>
      </fieldset>
    </form>
  );
}
