import { createObjectsList } from "./data.js";

import { renderThumbnails } from "./thumbnails.js";

const NUMBER_OBJECTS = 25;
const objectList = createObjectsList(NUMBER_OBJECTS);
renderThumbnails(objectList);
