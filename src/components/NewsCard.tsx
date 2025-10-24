import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

const NewsCard = ({ image, title, date, excerpt }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
