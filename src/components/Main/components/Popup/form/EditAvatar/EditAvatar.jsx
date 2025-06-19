export default function EditAvatar() {
  return (
    <form className="form" id="form__edit-image-profile" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Cambiar foto de perfil</legend>
        <input
          id="link-image-profile"
          className="form__field form__field-link-image-profile"
          type="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="link-image-profile-error form__field-error"></span>
        <button
          className="form__button form__button-disabled"
          type="submit"
          disabled={true}
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
