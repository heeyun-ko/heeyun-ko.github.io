import { defineCollection, z } from 'astro:content';

const main = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('main'),
		tech: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

const postings = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('postings'),
		tech: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		category: z.literal('blog'),
		tech: z.array(z.string()).optional(),
		published: z.boolean()
	})
});

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		meta_title: z.string().optional(),
		meta_description: z.string().optional(),
		keywords: z.array(z.string()).optional(),
		og_title: z.string().optional(),
		og_description: z.string().optional(),
		og_type: z.string().optional(),
		twitter_card: z.string().optional(),
	}),
});

export const collections = { main, postings, blog, posts };
