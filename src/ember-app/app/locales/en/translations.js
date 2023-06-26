import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Async open xml reports sample',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Async open xml reports sample',
          title: 'Async open xml reports sample'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
