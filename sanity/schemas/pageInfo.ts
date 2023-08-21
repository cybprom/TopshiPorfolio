export default {
  name: 'pageInfo',
  title: 'pageinfo',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'role', title: 'Role', type: 'string'},
    {name: 'heroImage', title: 'Image', type: 'image', options: {hotspot: true}},
    {
      name: 'backgroundInformation',
      title: 'backgroundInformation',
      type: 'string',
    },
    {name: 'profilePic', title: 'profilePic', type: 'image', options: {hotspot: true}},
    {name: 'phoneNumber', title: 'phoneNumber', type: 'string'},
    {
      name: 'Address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'Email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'Socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'socials'}}],
    },
  ],
}
