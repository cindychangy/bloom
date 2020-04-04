//essential file for the config of vuepress site
module.exports = {
  title: 'Bloom Library',
  description: 'An online library for easy access to components, markup and notes for Front-end design and development.',
  themeConfig: {
    sidebar: [
      {
        title: 'Components',
        collapsable: true,
        children: [
          ['/components/buttons', 'Buttons'],
        ]
      },
      {
        title: 'CSS / SASS',
        collapsable: true,
        children: [
          ['/css/attr-selectors', 'Attribute Selectors'],
          ['/css/boilerplate', 'Boilerplate'],
          ['/css/bem', 'BEM'],
          ['/css/sass', 'SASS'],
        ]
      },
      {
        title: 'Javascript',
        collapsable: true,
        children: [
          ['/js/thing', 'Thing']
        ]
      },
      {
        title: 'HTML',
        collapsable: true,
        children: [
          ['/html/boilerplate', 'Thing']
        ]
      },
      {
        title: 'Dev Info',
        collapsable: true,
        children: [
          ['/dev/thing', 'Thing']
        ]
      },
    ]
  }
}
