'use client';

import type { FC } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsChartProps {
  skills: Skill[];
}

const chartConfig = {
  proficiency: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const SkillsChart: FC<SkillsChartProps> = ({ skills }) => {
  return (
    <section id="skills" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-primary">
        Skills & Technologies
      </h2>
      <p className="mt-4 text-lg leading-8 text-center text-muted-foreground">
        A snapshot of the technologies I work with.
      </p>
      <Card className="mt-8 bg-card border-border/60">
        <CardHeader>
          <CardTitle>Technical Proficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <BarChart
              data={skills}
              layout="vertical"
              margin={{ left: 20, right: 20 }}
              accessibilityLayer
            >
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                width={120}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted) / 0.5)' }}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar
                dataKey="proficiency"
                radius={[0, 4, 4, 0]}
                fill="var(--color-proficiency)"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
};

export default SkillsChart;
