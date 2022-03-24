import en from './en'
import fr from './fr'

export default {
  locales: [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'fr',
      name: 'Français',
    },
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'migaku_i18n_redirected',
    onlyOnRoot: true,
  },
}
