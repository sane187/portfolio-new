'use server';

/**
 * @fileOverview Automatically categorizes and tags projects based on their descriptions.
 *
 * - categorizeProjects - A function that categorizes projects.
 * - CategorizeProjectsInput - The input type for the categorizeProjects function.
 * - CategorizeProjectsOutput - The return type for the categorizeProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeProjectsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project to categorize.'),
});

export type CategorizeProjectsInput = z.infer<typeof CategorizeProjectsInputSchema>;

const CategorizeProjectsOutputSchema = z.object({
  categories: z
    .array(z.string())
    .describe('An array of categories that the project belongs to.'),
  tags: z.array(z.string()).describe('An array of tags associated with the project.'),
});

export type CategorizeProjectsOutput = z.infer<typeof CategorizeProjectsOutputSchema>;

export async function categorizeProjects(
  input: CategorizeProjectsInput
): Promise<CategorizeProjectsOutput> {
  return categorizeProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeProjectsPrompt',
  input: {schema: CategorizeProjectsInputSchema},
  output: {schema: CategorizeProjectsOutputSchema},
  prompt: `You are an expert project classifier. You will categorize and tag projects based on their descriptions.

Description: {{{projectDescription}}}

Categories: A list of categories that the project belongs to.
Tags: A list of tags associated with the project.`,
});

const categorizeProjectsFlow = ai.defineFlow(
  {
    name: 'categorizeProjectsFlow',
    inputSchema: CategorizeProjectsInputSchema,
    outputSchema: CategorizeProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
