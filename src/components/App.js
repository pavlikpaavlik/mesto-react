import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false)

function handleEditProfileClick() {
    setProfilePopupOpen(!isEditProfilePopupOpen)
}

const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)

function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen)
}

const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen)
}

const [selectedCard, setSelectedCard] = React.useState(false)

function handleCardClick(card) {
  setSelectedCard(card)
} 

function closeAllPopups() {
  setProfilePopupOpen(false)
  setAddPlacePopupOpen(false)
  setEditAvatarPopupOpen(false)
  setSelectedCard(false)
}

return (
  <div className="root">
    <div className="page">
    <Header/>
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
    <Footer/>
    <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="popupEdit" title="Редактировать профиль" textBtn="Сохранить"  children = {
  <>
    <input required minLength="2" maxLength="40" type="text" name="name" placeholder="Имя" id="name-input" className="popup__input popup__input_value_name"/>
    <span className="popup__input-error" id="name-input-error"></span>
    <input required minLength="2" maxLength="200" type="text" name="job" placeholder="Профессия" id="job-input" className="popup__input popup__input_value_job"/>
    <span className="popup__input-error" id="job-input-error"></span>
  </>
  }/>

    <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}  name="popupAdd" title="Новое место" textBtn="Создать"  children = {
  <>
        <input required minLength="2" maxLength="30" type="text" name="place" placeholder="Название" id="place-input" className="popup__input popup__input_value_place"/>
        <span className="popup__input-error" id="place-input-error"></span>
        <input required name="link" placeholder="Ссылка на картинку" id="link-input" className="popup__input popup__input_value_link" type="url"/>
        <span className="popup__input-error" id="link-input-error"></span>
  </>
  }/>

    <PopupWithForm  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="popupAvatar" title="Обновить аватар" textBtn="Сохранить"  children = {
  <>
        <input required name="avatar" placeholder="Ссылка на аватар" id="avatar-link" className="popup__input popup__input_value_avatar" type="url"/>
        <span className="popup__input-error" id="avatar-link-error"></span>
  </>
  }/>

    <ImagePopup onClose={closeAllPopups} card={selectedCard} />

    </div>
  </div>
  );
}

export default App;