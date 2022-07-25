import { renderThumbnails } from './thumbnails.js';
import { upLoadForm } from './form.js';
import { getData } from './fetch.js';

getData(
  (data) => {
    renderThumbnails(data);
    upLoadForm();
  },
  () => {
    showAlert('Упс! Данные не подгрузились :( Попробуйте позже!');
  }
)


