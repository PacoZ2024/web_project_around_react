import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarImage = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAvatar({ avatar: avatarImage.current.value });
  };

  return (
    <form className="form" id="form__edit-image-profile" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Cambiar foto de perfil</legend>
        <input
          ref={avatarImage}
          id="link-image-profile"
          className="form__field form__field-link-image-profile"
          type="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="link-image-profile-error form__field-error"></span>
        <button className="form__button" type="submit" onClick={handleSubmit}>
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
