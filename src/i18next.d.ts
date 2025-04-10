import 'react-i18next';

declare module 'react-i18next' {
  type CustomTypeOptions = {
    defaultNS: 'translation';
    resources: {
      translation: {
        welcome: string;
        description: string;
      };
    };
  }
}
