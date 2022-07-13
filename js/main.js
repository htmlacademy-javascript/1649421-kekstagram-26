const NUMBER_OBJECTS = 25;
const NUMBER_AVATARS = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];
const NAMES = [
  'Илья',
  'Сергей',
  'Алексей',
  'Александр',
  'Николай',
  'Семен',
  'Павел',
  'Лука',
  'Тимофей',
  'Григорий',
  'Фекла',
  'Лена',
  'Света',
];

const DESCRIPTIONS = [
  'Всё неотлично!',
  'Всё отлично!',
  'Отлично!',
  'Прекрасно',
  'Объелся',
  'Какие кривые чулки'
];

const LIKES = 200;

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getAvatar = (number) => `img/avatar-${number}.svg`;

const getMessage = (number) => MESSAGES[number];

const getName = (number) => NAMES[number];

const getDescription = (number) => DESCRIPTIONS[number];

const getLike = (number) => LIKES[number];

const createObject = () => ({
  id: getRandomNumber(1, NUMBER_OBJECTS),
  avatar: getAvatar(getRandomNumber(1, NUMBER_AVATARS)),
  message: getMessage(getRandomNumber(1, MESSAGES.length - 1)),
  name: getName(getRandomNumber(1, NAMES.length - 1)),
  description: getDescription(getRandomNumber(1, DESCRIPTIONS.length - 1)),
  likes: getLike(getRandomNumber(15, LIKES.length - 1)),
});


const createObjectsList = (number) => {
  const photos = [];
  for (let i = 1; i <= number; i++) {
    photos.push(createObject());
  }
  return photos;
};

console.log(createObjectsList(NUMBER_OBJECTS));
