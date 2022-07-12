const NUMBER_OBJECTS = 25;

const createObject = () => ({
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём'
});


const createObjectsList = (number) => {
  const photos = [];
  for (let i = 1; i <= number; i++) {
    photos.push(createObject());
  }
  return photos;
};

console.log(createObjectsList(NUMBER_OBJECTS));
