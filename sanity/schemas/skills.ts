export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', description: 'Title of skill', type: 'string'},
    {name: 'image', title: 'image', type: 'image', options: {hotspot: true}},

    {
      name: 'progress',
      title: 'progress',
      type: 'number',
      description: 'progress of number from 0 to 100',
      validation: (Rule: any) => {
        Rule.min(0).max(100)
      },
    },
  ],
}
