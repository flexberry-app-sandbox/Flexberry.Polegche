import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.зоопарк.caption'),
          title: i18n.t('forms.application.sitemap.зоопарк.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.зоопарк.вольеры.caption'),
            title: i18n.t('forms.application.sitemap.зоопарк.вольеры.title'),
            children: [{
              link: 'i-i-s-polegche-уборка-l',
              caption: i18n.t('forms.application.sitemap.зоопарк.вольеры.i-i-s-polegche-уборка-l.caption'),
              title: i18n.t('forms.application.sitemap.зоопарк.вольеры.i-i-s-polegche-уборка-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-polegche-вольер-l',
              caption: i18n.t('forms.application.sitemap.зоопарк.вольеры.i-i-s-polegche-вольер-l.caption'),
              title: i18n.t('forms.application.sitemap.зоопарк.вольеры.i-i-s-polegche-вольер-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.зоопарк.штат.caption'),
            title: i18n.t('forms.application.sitemap.зоопарк.штат.title'),
            children: [{
              link: 'i-i-s-polegche-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.зоопарк.штат.i-i-s-polegche-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.зоопарк.штат.i-i-s-polegche-сотрудники-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-polegche-должность-l',
              caption: i18n.t('forms.application.sitemap.зоопарк.штат.i-i-s-polegche-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.зоопарк.штат.i-i-s-polegche-должность-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.зоопарк.учет-животных.caption'),
            title: i18n.t('forms.application.sitemap.зоопарк.учет-животных.title'),
            children: [{
              link: 'i-i-s-polegche-виды-l',
              caption: i18n.t('forms.application.sitemap.зоопарк.учет-животных.i-i-s-polegche-виды-l.caption'),
              title: i18n.t('forms.application.sitemap.зоопарк.учет-животных.i-i-s-polegche-виды-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-polegche-животные-l',
              caption: i18n.t('forms.application.sitemap.зоопарк.учет-животных.i-i-s-polegche-животные-l.caption'),
              title: i18n.t('forms.application.sitemap.зоопарк.учет-животных.i-i-s-polegche-животные-l.title'),
              icon: 'phone',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})