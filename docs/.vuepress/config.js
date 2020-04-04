//essential file for the config of vuepress site
module.exports = {
  title: 'Bloom Library',
  description: 'An online library for easy access to components, markup and notes for Front-end design and development.',
  themeConfig: {
    sidebar: [
      {
        title: 'CSS',
        path: '/css',
        collapsable: false,
        children: [
          ['/css/buttons', 'Buttons']
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
          ['/html/thing', 'Thing']
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
