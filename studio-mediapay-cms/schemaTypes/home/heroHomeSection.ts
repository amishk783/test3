import {defineField, defineType} from 'sanity'

export const heroHomeSectionType = defineType({
  name: 'homeHero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subHeading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
