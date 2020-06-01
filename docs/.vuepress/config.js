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
          ['/components/checkbox', 'Checkbox'],
          ['/components/dropdown', 'Dropdown'],
          ['/components/forms', 'Forms'],
          ['/components/fullscreen', 'Fullscreen'],
          ['/components/hovers', 'Hovers'],
          ['/components/navigation', 'Nav Bars'],
          ['/components/popup', 'Popup'],
          ['/components/radiobutton', 'Radio Buttons'],
        ]
      },
      {
        title: 'CSS / SASS',
        collapsable: true,
        children: [
          ['/css/alignment', 'Alignment'],
          ['/css/animations', 'Animations'],
          ['/css/attr-selectors', 'Attribute Selectors'],
          ['/css/bem', 'BEM'],
          ['/css/boilerplate', 'Boilerplate'],
          ['/css/box-shadow', 'Box Shadow'],
          ['/css/grid', 'CSS Grid'],
          ['/css/tricks', 'CSS Tricks'],
          ['/css/variables', 'CSS Variables'],
          ['/css/flexbox', 'Flexbox'],
          ['/css/gradients', 'Gradients'],
          ['/css/images', 'Images'],
          ['/css/general-info', '*General Info']
        ]
      },
      {
        title: 'Javascript',
        collapsable: true,
        children: [
          ['/js/arrays', 'Arrays'],
          ['/js/es6', 'ES6'],
          ['/js/events', 'Events'],
          ['/js/forms', 'Forms'],
          ['/js/functions', 'Functions'],
          ['/js/higher-order', 'Higher Order Functions'],
          ['/js/jquery', 'jQuery'],
          ['/js/local-storage', 'Local Storage'],
          ['/js/loops', 'Loops'],
          ['/js/methods', 'Methods'],
          ['/js/objects', 'Objects'],
          ['/js/promises', 'Promises'],
          ['/js/regex', 'Regex'],
          ['/js/requests', 'Requests'],
          ['/js/window', 'Window'],
          ['/js/general-info', '*General Info'],
        ]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          ['/vue/general-info', 'General Info']
        ]
      },
      {
        title: 'Dev Info',
        collapsable: true,
        children: [
          ['/dev/globbing', 'Globbing'],
          ['/dev/npm', 'NPM'],
          ['/dev/seo', 'SEO'],
          ['/dev/terminology', 'Terminology'],
          ['/dev/wordpress', 'Wordpress'],
        ]
      },
    ]
  }
}
