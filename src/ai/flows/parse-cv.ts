// src/ai/flows/parse-cv.ts
'use server';
/**
 * @fileOverview A flow for parsing CV data to extract information relevant for populating a portfolio.
 *
 * - parseCv - A function that handles the CV parsing process.
 * - ParseCvInput - The input type for the parseCv function.
 * - ParseCvOutput - The return type for the parseCv function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ParseCvInputSchema = z.object({
  cvData: z
    .string()
    .describe('The CV data as a string.'),
});
export type ParseCvInput = z.infer<typeof ParseCvInputSchema>;

const ParseCvOutputSchema = z.object({
  education: z
    .array(z.string())
    .describe('List of education details extracted from the CV.'),
  workExperience: z
    .array(z.string())
    .describe('List of work experience details extracted from the CV.'),
  skills: z
    .array(z.string())
    .describe('List of skills extracted from the CV.'),
  otherDetails: z
    .array(z.string())
    .describe('List of other details extracted from the CV.'),
});
export type ParseCvOutput = z.infer<typeof ParseCvOutputSchema>;

export async function parseCv(input: ParseCvInput): Promise<ParseCvOutput> {
  return parseCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseCvPrompt',
  input: {schema: ParseCvInputSchema},
  output: {schema: ParseCvOutputSchema},
  prompt: `You are an expert CV parser, extracting data for use in a portfolio.

  Extract the following information from the CV data provided:

  - Education: A list of education history, including degree, institution, and dates.
  - Work Experience: A list of work experience, including job title, company, and dates.
  - Skills: A list of skills mentioned in the CV.
  - Other Details: Any other details that might be relevant for a portfolio.

  Ensure the output is well-formatted and easy to read.

  CV Data: {{{cvData}}}`,
});

const parseCvFlow = ai.defineFlow(
  {
    name: 'parseCvFlow',
    inputSchema: ParseCvInputSchema,
    outputSchema: ParseCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
