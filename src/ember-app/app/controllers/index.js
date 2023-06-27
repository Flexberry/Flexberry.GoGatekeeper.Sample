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
          caption: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.caption'),
          title: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.title'),
          children: [{
            link: 'i-i-s-flexberry-go-gatekeeper-sample-brand-l',
            caption: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-brand-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-brand-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-flexberry-go-gatekeeper-sample-car-l',
            caption: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-car-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-car-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-flexberry-go-gatekeeper-sample-producing-country-l',
            caption: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-producing-country-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-producing-country-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-flexberry-go-gatekeeper-sample-user-report-l',
            caption: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-user-report-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-go-gatekeeper-sample.i-i-s-flexberry-go-gatekeeper-sample-user-report-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})