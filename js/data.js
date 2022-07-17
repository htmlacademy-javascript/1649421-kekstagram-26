import { getRandomNumber } from "./util.js";

const NUMBER_OBJECTS = 25;
const NUMBER_AVATARS = 6;
const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо.Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !",
];
const NAMES = [
  "Илья",
  "Сергей",
  "Алексей",
  "Александр",
  "Николай",
  "Семен",
  "Павел",
  "Лука",
  "Тимофей",
  "Григорий",
  "Фекла",
  "Лена",
  "Света",
];

const DESCRIPTIONS = ["Котик", "Домик", "Вид", "Природа", "Море", "Лес"];

const LIKES = 200;

const MAX_NUMBER_PHOTOS = 25;

const MAX_NUMBER_COMMENTS = 20;

const MAX_NUMBER_USERS = 500;

const getAvatar = (number) => `img/avatar-${number}.svg`;

const getMessage = (number) => MESSAGES[number];

const getName = (number) => NAMES[number];

const getDescription = (number) => DESCRIPTIONS[number];

const getUrl = (number) => `photos/${number}.jpg`;

const getComment = () => ({
  id: getRandomNumber(1, MAX_NUMBER_USERS),
  avatar: getAvatar(getRandomNumber(1, NUMBER_AVATARS)),
  message: getMessage(getRandomNumber(1, MESSAGES.length - 1)),
  name: getName(getRandomNumber(1, NAMES.length - 1)),
});

const getComments = (number) => {
  const comments = [];
  for (let i = 1; i <= number; i++) {
    comments.push(getComment());
  }
  return comments;
};

const createObject = () => ({
  id: getRandomNumber(1, NUMBER_OBJECTS),
  avatar: getAvatar(getRandomNumber(1, NUMBER_AVATARS)),
  message: getMessage(getRandomNumber(1, MESSAGES.length - 1)),
  name: getName(getRandomNumber(1, NAMES.length - 1)),
  description: getDescription(getRandomNumber(1, DESCRIPTIONS.length - 1)),
  likes: getRandomNumber(15, LIKES),
  url: getUrl(getRandomNumber(1, MAX_NUMBER_PHOTOS)),
  comments: getComments(getRandomNumber(1, MAX_NUMBER_COMMENTS)),
});

const createObjectsList = (number) => {
  const photos = [];
  for (let i = 1; i <= number; i++) {
    photos.push(createObject());
  }
  return photos;
};

export { createObjectsList };
