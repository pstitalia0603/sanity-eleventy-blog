export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60214134b9896fb3534c3f8e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-c65sn1qn',
                  apiId: '7690af4d-8eaa-48bc-87fc-81dae0379551'
                },
                {
                  buildHookId: '602141343966b2684806be49',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-e4b568v1',
                  apiId: 'f3464bd5-8554-4ec6-9c20-952af09bb65c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pstitalia78/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-e4b568v1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
