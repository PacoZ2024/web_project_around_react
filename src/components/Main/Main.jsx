import { useState, useEffect } from "react";
import EditImageProfile from "../../assets/images/Edit_Image_Profile.svg";
import EditProfileButton from "../../assets/images/Edit_button.svg";
import AddNewPlaceButton from "../../assets/images/Add_button.svg";
import NewCard from "./components/Popup/form/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/Popup/form/EditAvatar/EditAvatar.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Card from "./components/Card/Card.jsx";
import { api } from "../../utils/api.js";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const newCardPopup = { children: <NewCard /> };
  const editProfilePopup = { children: <EditProfile /> };
  const editAvatarPopup = { children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="content__profile">
        <div className="content__image-profile-container">
          <img
            className="content__avatar-image"
            alt="Imagen de perfil"
            src={
              "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg"
            }
          />
          <div
            className="content__icon-edit-image-profile-container"
            onClick={() => {
              handleOpenPopup(editAvatarPopup);
            }}
          >
            <img
              className="content__icon-edit-image-profile"
              src={EditImageProfile}
              alt="Icono para editar imagen de perfil"
            />
          </div>
        </div>
        <div className="content__profile-info">
          <div className="content__profile-distribution">
            <h1 className="content__profile-name">Jacques Cousteau</h1>
            <div
              className="content__profile-edit-button"
              onClick={() => {
                handleOpenPopup(editProfilePopup);
              }}
            >
              <img
                className="content__edit-profile-button-label"
                src={EditProfileButton}
                alt="Botón de edición de perfil"
              />
            </div>
          </div>
          <p className="content__about-me">Explorador</p>
        </div>
        <div
          className="content__new-place-add-button"
          onClick={() => {
            handleOpenPopup(newCardPopup);
          }}
        >
          <img
            className="content__add-new-place-button-label"
            src={AddNewPlaceButton}
            alt="Botón para añadir nuevos lugares"
          />
        </div>
      </section>
      <section className="content__images">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </section>
      {popup && <Popup onClose={handleClosePopup}>{popup.children}</Popup>}
    </main>
  );
}
