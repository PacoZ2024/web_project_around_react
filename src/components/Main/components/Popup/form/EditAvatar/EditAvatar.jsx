import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const [isValid, setIsValid] = useState(false);
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const [avatarImage, setAvatarImage] = useState("");

  const handleInputChange = (event) => {
    setAvatarImage(event.target.value);
    setIsValid(event.target.validity.valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAvatar({ avatar: avatarImage });
  };

  return (
    <form className="form" id="form__edit-image-profile" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Cambiar foto de perfil</legend>
        <input
          onChange={handleInputChange}
          id="link-image-profile"
          className="form__field form__field-link-image-profile"
          type="url"
          placeholder="Enlace a la imagen"
          required
          pattern="https?://.+"
        />
        <span className="link-image-profile-error form__field-error"></span>
        <button
          className={`form__button ${isValid ? "" : "form__button-disabled"}`}
          type="submit"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
