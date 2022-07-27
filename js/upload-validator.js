const MAX_NUMBER_OF_HASHTAGS = 5;
const MAX_HASHTAGS_LENGTH = 20;
const MAX_IMAGE__DESCRIPTION__LENGTH = 140;
const uploadFormElement = document.querySelector('#upload-select-image');
const hashtagsInputElement = uploadFormElement.querySelector('.text__hashtags');
const uploadImageDescriptionElement = uploadFormElement.querySelector('.text__description');

const pristine = new Pristine(uploadFormElement, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
  });
  
  const validateHashtagContent = (value) => {
    if (value === '') { return true; }
  
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
    const arrayOfMessages = value.trim().split(/\s+/);
    return arrayOfMessages.every((item) => re.test(item));
  };
  
  const isValidLength = (value) => {
    if (value === '') { return true; }
  
    const arrayOfMessages = value.trim().split(/\s+/);
    return arrayOfMessages.every((item) => item.length > 1 && item.length < MAX_HASHTAGS_LENGTH);
  };
  
  const checkNumberOfHashtags = (value) => {
    const arrayOfMessages = value.trim().split(/\s+/);
    return arrayOfMessages.length <= MAX_NUMBER_OF_HASHTAGS;
  };
  
  const findSameElements = (value) => {
    const arrayOfMessages = value.trim().toLowerCase().split(/\s+/);
    return arrayOfMessages.every((item, index, array) => array.slice(index + 1, array.length).every((elem) => elem !== item));
  };
  
  const checkSpaces = (value) => {
    const re = /[0-9a-z_]#$/;
    return !re.test(value);
  };

const isValid = () => {
    pristine.addValidator(hashtagsInputElement, validateHashtagContent, 'Хэш-тег должен начинаться с символа # и состоять из букв и цифр');
    pristine.addValidator(hashtagsInputElement, isValidLength, 'Длина хеш-тега должна быть от 2 до 20 символов'); 
    pristine.addValidator(hashtagsInputElement, findSameElements, 'Хеш-теги не должны повторяться');
    pristine.addValidator(hashtagsInputElement, checkNumberOfHashtags, 'Нельзя указать больше пяти хэш-тегов');
    pristine.addValidator(hashtagsInputElement, checkSpaces, 'Хеш-теги должны разделяться пробелами');
    pristine.addValidator(uploadImageDescriptionElement, (text) => text.length < MAX_IMAGE__DESCRIPTION__LENGTH, 'Длина комментария не может составлять больше 140 символов');
    return pristine.validate()
}

export {isValid}