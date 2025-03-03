import {defineField, defineType} from 'sanity'

export const HomePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'hero',
      type: 'homeHero',
      title: 'Hero section',
    }),

    defineField({
      name: 'carousel',
      type: 'array',
      of: [{type: 'carousel'}],
      title: 'Carousel',
    }),
  ],
})
