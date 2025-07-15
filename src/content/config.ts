import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    publishDate: z.date(),
    author: z.string().default('Admin'),
    tags: z.array(z.string()).default([])
  })
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  blog: blogCollection,
  products: productsCollection
};