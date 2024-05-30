import { z, defineCollection } from "astro:content";

const sectionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        text: z.string(),
    })
});

export const collections = {
    sections: sectionCollection,
}