import { upLoadForm } from './form.js';
import { getData } from './fetch.js';
import { filters } from './filters.js';

getData(
  (data) => {
    upLoadForm();
    filters(data);
  },
  () => {
    window.alert('Упс! Данные не подгрузились :( Попробуйте позже!');
  }
);
