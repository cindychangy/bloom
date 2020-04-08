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
          ['/components/forms', 'Forms'],
        ]
      },
      {
        title: 'CSS / SASS',
        collapsable: true,
        children: [
          ['/css/animations', 'Animations'],
          ['/css/attr-selectors', 'Attribute Selectors'],
          ['/css/boilerplate', 'Boilerplate'],
          ['/css/bem', 'BEM'],
          ['/css/props', 'CSS Properties'],
          ['/css/tricks', 'CSS Tricks'],
          ['/css/images', 'Images'],
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
        title: 'Dev Info',
        collapsable: true,
        children: [
          ['/dev/globbing', 'Globbing'],
          ['/dev/npm', 'NPM'],
          ['/dev/seo', 'SEO']
        ]
      },
    ]
  }
}
