import { upLoadForm } from './form.js';
import { getData } from './fetch.js';
import { filters } from './filters.js';
import { showAlert } from './util.js';

getData(
  (data) => {
    upLoadForm();
    filters(data);
  },
  () => {
    showAlert('Упс! Данные не подгрузились :( Попробуйте позже!');
  }
);
