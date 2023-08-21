export default {
  name: 'Experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'jobTitle', title: 'JobTitle', type: 'string'},
    {name: 'companyImage', title: 'Company image', type: 'image', options: {hotspot: true}},

    {
      name: 'company',
      title: 'Company',
      type: 'text',
    },
    {name: 'dateStarted', title: 'Datestarted', type: 'date'},
    {name: 'dateEnded', title: 'DateEnded', type: 'date'},
    {name: 'isCurrentWorkingPlace', title: 'isCurrentWorkingPlace', type: 'boolean'},
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
