export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fde4079b888119e5284ecfd',
                  title: 'Sanity Studio',
                  name: 'koalita-2020-studio',
                  apiId: '506cebba-f032-46a4-89e1-2c646ec0be23'
                },
                {
                  buildHookId: '5fde407988a7e59cfac19e48',
                  title: 'Blog Website',
                  name: 'koalita-2020',
                  apiId: '6d0f3557-a7c7-4f81-86a4-2177485a07f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zarzarg/koalita2020',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://koalita-2020.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
