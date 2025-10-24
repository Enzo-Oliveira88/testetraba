import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  impact?: string;
}

const ProjectCard = ({ image, title, description, category, impact }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        {impact && (
          <p className="mt-3 text-sm font-medium text-primary">✓ {impact}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
