import {defineField, defineType} from 'sanity'

export const popularHomeSectionType = defineType({
  name: 'popularSection',
  title: 'Popular News Home section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'spotLightPopular',
      type: 'spotLightPopular',
    }),
    defineField({
      name: 'listItems',
      type: 'array',
      of: [{type: 'listItemPopular'}],
    }),
  ],
})

export const spotLightPopularHomeSectionType = defineType({
  name: 'spotLightPopular',
  title: 'SpotLoght Popular News Home section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subTitles',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})

export const listPopularHomeSectionType = defineType({
  name: 'listItemPopular',
  title: 'List Item Popular News Home section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'newsLink',
      type: 'string',
    }),
  ],
})
