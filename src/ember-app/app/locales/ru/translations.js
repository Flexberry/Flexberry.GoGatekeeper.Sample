import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFlexberryGoGatekeeperSampleBrandLForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-brand-l';
import IISFlexberryGoGatekeeperSampleCarLForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-car-l';
import IISFlexberryGoGatekeeperSampleProducingCountryLForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-producing-country-l';
import IISFlexberryGoGatekeeperSampleUserReportLForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-user-report-l';
import IISFlexberryGoGatekeeperSampleBrandEForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-brand-e';
import IISFlexberryGoGatekeeperSampleCarEForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-car-e';
import IISFlexberryGoGatekeeperSampleProducingCountryEForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-producing-country-e';
import IISFlexberryGoGatekeeperSampleUserReportEForm from './forms/i-i-s-flexberry-go-gatekeeper-sample-user-report-e';
import IISFlexberryGoGatekeeperSampleBrandModel from './models/i-i-s-flexberry-go-gatekeeper-sample-brand';
import IISFlexberryGoGatekeeperSampleCarModel from './models/i-i-s-flexberry-go-gatekeeper-sample-car';
import IISFlexberryGoGatekeeperSampleProducingCountryModel from './models/i-i-s-flexberry-go-gatekeeper-sample-producing-country';
import IISFlexberryGoGatekeeperSampleSparePartModel from './models/i-i-s-flexberry-go-gatekeeper-sample-spare-part';
import IISFlexberryGoGatekeeperSampleUserReportModel from './models/i-i-s-flexberry-go-gatekeeper-sample-user-report';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-flexberry-go-gatekeeper-sample-brand': IISFlexberryGoGatekeeperSampleBrandModel,
    'i-i-s-flexberry-go-gatekeeper-sample-car': IISFlexberryGoGatekeeperSampleCarModel,
    'i-i-s-flexberry-go-gatekeeper-sample-producing-country': IISFlexberryGoGatekeeperSampleProducingCountryModel,
    'i-i-s-flexberry-go-gatekeeper-sample-spare-part': IISFlexberryGoGatekeeperSampleSparePartModel,
    'i-i-s-flexberry-go-gatekeeper-sample-user-report': IISFlexberryGoGatekeeperSampleUserReportModel
  },

  'application-name': 'Async open xml reports sample',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Async open xml reports sample',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Async open xml reports sample',
          title: 'Async open xml reports sample'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'flexberry-go-gatekeeper-sample': {
          caption: 'FlexberryGoGatekeeperSample',
          title: 'FlexberryGoGatekeeperSample',
          'i-i-s-flexberry-go-gatekeeper-sample-brand-l': {
            caption: 'Brand',
            title: ''
          },
          'i-i-s-flexberry-go-gatekeeper-sample-car-l': {
            caption: 'Car',
            title: ''
          },
          'i-i-s-flexberry-go-gatekeeper-sample-producing-country-l': {
            caption: 'Producing country',
            title: ''
          },
          'i-i-s-flexberry-go-gatekeeper-sample-user-report-l': {
            caption: 'User report',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-flexberry-go-gatekeeper-sample-brand-l': IISFlexberryGoGatekeeperSampleBrandLForm,
    'i-i-s-flexberry-go-gatekeeper-sample-car-l': IISFlexberryGoGatekeeperSampleCarLForm,
    'i-i-s-flexberry-go-gatekeeper-sample-producing-country-l': IISFlexberryGoGatekeeperSampleProducingCountryLForm,
    'i-i-s-flexberry-go-gatekeeper-sample-user-report-l': IISFlexberryGoGatekeeperSampleUserReportLForm,
    'i-i-s-flexberry-go-gatekeeper-sample-brand-e': IISFlexberryGoGatekeeperSampleBrandEForm,
    'i-i-s-flexberry-go-gatekeeper-sample-car-e': IISFlexberryGoGatekeeperSampleCarEForm,
    'i-i-s-flexberry-go-gatekeeper-sample-producing-country-e': IISFlexberryGoGatekeeperSampleProducingCountryEForm,
    'i-i-s-flexberry-go-gatekeeper-sample-user-report-e': IISFlexberryGoGatekeeperSampleUserReportEForm
  },

});

export default translations;
