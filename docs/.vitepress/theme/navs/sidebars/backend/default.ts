import { default as PATHS } from '../../paths';

const SIDEBAR_DEFAULT_BACKEND = [
      {
        text: 'Basic',
        items: [
          { text: 'HTML', link: PATHS.FRONTEND_HTML },
          { text: 'CSS', link: PATHS.FRONTEND_CSS },
          { text: 'CSS', link: PATHS.FRONTEND_CSS },
        ]
      },
      {
        text: 'Libs & Preprocessors',
        items: [
          { text: 'Markdown Examples', link: PATHS.FRONTEND_SASS },
        ]
      },
      {
        text: 'Frameworks',
        items: [
          { text: 'Vue3', link: PATHS.FRONTEND_VUE },
          { text: 'Vue Test Utils (ext)', link: 'https://test-utils.vuejs.org/guide/' },
          { text: 'Angular', link: PATHS.FRONTEND_ANGULAR },
        ]
      },
    ]

export default SIDEBAR_DEFAULT_BACKEND;