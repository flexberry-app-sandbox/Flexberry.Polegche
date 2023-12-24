import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': '',

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
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
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

  },

});

export default translations;
