import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPolegcheВидыLForm from './forms/i-i-s-polegche-виды-l';
import IISPolegcheВольерLForm from './forms/i-i-s-polegche-вольер-l';
import IISPolegcheДолжностьLForm from './forms/i-i-s-polegche-должность-l';
import IISPolegcheЖивотныеLForm from './forms/i-i-s-polegche-животные-l';
import IISPolegcheСотрудникиLForm from './forms/i-i-s-polegche-сотрудники-l';
import IISPolegcheУборкаLForm from './forms/i-i-s-polegche-уборка-l';
import IISPolegcheВидыEForm from './forms/i-i-s-polegche-виды-e';
import IISPolegcheВольерEForm from './forms/i-i-s-polegche-вольер-e';
import IISPolegcheДолжностьEForm from './forms/i-i-s-polegche-должность-e';
import IISPolegcheЖивотныеEForm from './forms/i-i-s-polegche-животные-e';
import IISPolegcheСотрудникиEForm from './forms/i-i-s-polegche-сотрудники-e';
import IISPolegcheУборкаEForm from './forms/i-i-s-polegche-уборка-e';
import IISPolegcheВидыModel from './models/i-i-s-polegche-виды';
import IISPolegcheВольерModel from './models/i-i-s-polegche-вольер';
import IISPolegcheДолжностьModel from './models/i-i-s-polegche-должность';
import IISPolegcheЖивотныеModel from './models/i-i-s-polegche-животные';
import IISPolegcheСоставВольераModel from './models/i-i-s-polegche-состав-вольера';
import IISPolegcheСотрудникиModel from './models/i-i-s-polegche-сотрудники';
import IISPolegcheУборкаModel from './models/i-i-s-polegche-уборка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-polegche-виды': IISPolegcheВидыModel,
    'i-i-s-polegche-вольер': IISPolegcheВольерModel,
    'i-i-s-polegche-должность': IISPolegcheДолжностьModel,
    'i-i-s-polegche-животные': IISPolegcheЖивотныеModel,
    'i-i-s-polegche-состав-вольера': IISPolegcheСоставВольераModel,
    'i-i-s-polegche-сотрудники': IISPolegcheСотрудникиModel,
    'i-i-s-polegche-уборка': IISPolegcheУборкаModel
  },

  'application-name': 'Polegche',

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
        'application-name': 'Polegche',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Polegche',
          title: 'Polegche'
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
        зоопарк: {
          caption: 'Зоопарк',
          title: 'Зоопарк',
          вольеры: {
            caption: 'Вольеры',
            title: 'Вольеры',
            'i-i-s-polegche-уборка-l': {
              caption: 'Уборка',
              title: ''
            },
            'i-i-s-polegche-вольер-l': {
              caption: 'Вольер',
              title: ''
            }
          },
          штат: {
            caption: 'Штат',
            title: 'Штат',
            'i-i-s-polegche-сотрудники-l': {
              caption: 'Сотрудники',
              title: ''
            },
            'i-i-s-polegche-должность-l': {
              caption: 'Должность',
              title: ''
            }
          },
          'учет-животных': {
            caption: 'Учет Животных',
            title: 'Учет Животных',
            'i-i-s-polegche-виды-l': {
              caption: 'Виды',
              title: ''
            },
            'i-i-s-polegche-животные-l': {
              caption: 'Животные',
              title: ''
            }
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
    'i-i-s-polegche-виды-l': IISPolegcheВидыLForm,
    'i-i-s-polegche-вольер-l': IISPolegcheВольерLForm,
    'i-i-s-polegche-должность-l': IISPolegcheДолжностьLForm,
    'i-i-s-polegche-животные-l': IISPolegcheЖивотныеLForm,
    'i-i-s-polegche-сотрудники-l': IISPolegcheСотрудникиLForm,
    'i-i-s-polegche-уборка-l': IISPolegcheУборкаLForm,
    'i-i-s-polegche-виды-e': IISPolegcheВидыEForm,
    'i-i-s-polegche-вольер-e': IISPolegcheВольерEForm,
    'i-i-s-polegche-должность-e': IISPolegcheДолжностьEForm,
    'i-i-s-polegche-животные-e': IISPolegcheЖивотныеEForm,
    'i-i-s-polegche-сотрудники-e': IISPolegcheСотрудникиEForm,
    'i-i-s-polegche-уборка-e': IISPolegcheУборкаEForm
  },

});

export default translations;
