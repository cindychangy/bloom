//essential file for the config of vuepress site
module.exports = {
  title: 'Bloom Library',
  description: 'An online library for easy access to components, markup and notes for Front-end design and development.',
  themeConfig: {
    sidebar: [
      {
        title: 'Components',
        path: '/components',
        collapsable: false,
        children: [
          ['/components/buttons', 'Buttons'],
        ]
      },
      {
        title: 'CSS / SASS',
        path: '/css',
        collapsable: false,
        children: [
          ['/css/boilerplate', 'Boilerplate'],
          ['/css/bem', 'BEM'],
          ['/css/sass-boilerplate', 'SASS Setup'],
          ['/css/sass-info', 'SASS Info'],
        ]
      },
      {
        title: 'Javascript',
        path: '/js',
        collapsable: false,
        children: [
          ['/js/thing', 'Thing']
        ]
      },
      {
        title: 'HTML',
        path: '/html',
        collapsable: false,
        children: [
          ['/html/boilerplate', 'Thing']
        ]
      },
      {
        title: 'Dev Info',
        path: '/dev',
        collapsable: false,
        children: [
          ['/dev/thing', 'Thing']
        ]
      },
    ]
  }
}
