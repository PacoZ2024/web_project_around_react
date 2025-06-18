export default function EditProfile() {
  return (
    <form className="form" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Editar perfil</legend>
        <input
          id="name-input"
          className="form__field form__field-name"
          type="text"
          placeholder="Nombre"
          defaultValue="Jacques Cousteau"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error form__field-error"></span>
        <input
          id="about-me-input"
          className="form__field form__field-about-me"
          type="text"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          defaultValue="Explorador"
          required
        />
        <span className="about-me-input-error form__field-error"></span>
        <button className="form__button" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
