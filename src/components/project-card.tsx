import Image from 'next/image';
import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageId: string;
  link: string;
  tags: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imageId, link, tags }) => {
  const placeholderImage: ImagePlaceholder | undefined = PlaceHolderImages.find(p => p.id === imageId);
  const imageUrl = placeholderImage?.imageUrl || "https://picsum.photos/seed/default/600/400";
  const imageHint = placeholderImage?.imageHint || 'project image';

  return (
    <Card className="flex flex-col overflow-hidden bg-card border-border/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-video w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3 h-[60px]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
