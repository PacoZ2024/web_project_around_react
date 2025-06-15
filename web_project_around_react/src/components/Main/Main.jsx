import EditImageProfile from "../../assets/images/Edit_Image_Profile.svg";
import EditButton from "../../assets/images/Edit_button.svg";
import AddButton from "../../assets/images/Add_button.svg";
import DeleteButton from "../../assets/images/Delete_button.svg";
import Like from "../../assets/images/Like.svg";

function Main() {
  return (
    <main className="content">
      <section className="content__profile">
        <div className="content__image-profile-container">
          <img className="content__avatar-image" alt="Imagen de perfil" />
          <div className="content__icon-edit-image-profile-container">
            <img
              className="content__icon-edit-image-profile"
              src={EditImageProfile}
              alt="Icono para editar imagen de perfil"
            />
          </div>
        </div>
        <div className="content__profile-info">
          <div className="content__profile-distribution">
            <h1 className="content__profile-name"></h1>
            <div className="content__profile-edit-button">
              <img
                className="content__edit-profile-button-label"
                src={EditButton}
                alt="Botón de edición de perfil"
              />
            </div>
          </div>
          <p className="content__about-me"></p>
        </div>
        <div className="content__new-place-add-button">
          <img
            className="content__add-new-place-button-label"
            src={AddButton}
            alt="Botón para añadir nuevos lugares"
          />
        </div>
      </section>
      <section className="content__images">
        <template id="card-template">
          <div className="content__card">
            <div className="content__image-card">
              <img className="content__image" />
            </div>
            <div className="content__delete-button">
              <img
                className="content__delete-button-label"
                src={DeleteButton}
                alt="Botón borrar"
              />
            </div>
            <div className="content__image-tag">
              <p className="content__image-title"></p>
              <div className="content__like-button">
                <img
                  className="content__like-button-label"
                  src={Like}
                  alt="Botón me gusta"
                />
              </div>
            </div>
          </div>
        </template>
      </section>
    </main>
  );
}

export default Main;
