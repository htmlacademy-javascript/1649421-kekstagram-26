import { upLoadForm } from './form.js';
import { getData } from './fetch.js';
import { filters } from './filters.js';

getData(
  (data) => {
    upLoadForm();
    filters(data);
  },
  () => {
    showAlert('Упс! Данные не подгрузились :( Попробуйте позже!');
  }
);
