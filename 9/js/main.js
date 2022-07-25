import { createObjectsList } from "./data.js";

import { renderThumbnails } from "./thumbnails.js";

import { upLoadForm } from "./form.js";

const NUMBER_OBJECTS = 25;
const objectList = createObjectsList(NUMBER_OBJECTS);
renderThumbnails(objectList);
upLoadForm();
