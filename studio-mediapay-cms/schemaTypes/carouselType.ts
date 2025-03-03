import {defineField, defineType} from 'sanity'

export const carouselType = defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'subTitles',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
