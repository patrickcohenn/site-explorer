import CategoryBadge from './CategoryBadge';

type Category = 'games' | 'curiosities' | 'cinema' | 'comics' | 'technology' | 'otaku';

interface ArticleCardProps {
  title: string;
  category: Category;
  image: string;
  date: string;
  size?: 'large' | 'medium' | 'small';
}

const ArticleCard = ({ title, category, image, date, size = 'medium' }: ArticleCardProps) => {
  const heightClasses = {
    large: 'h-[400px] md:h-[500px]',
    medium: 'h-[300px] md:h-[350px]',
    small: 'h-[250px] md:h-[300px]',
  };

  return (
    <article className={`article-card ${heightClasses[size]} cursor-pointer group`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="article-card-content">
        <CategoryBadge category={category} className="mb-3" />
        
        <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-tight mb-2 line-clamp-3">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          Posted {date}
        </p>
      </div>
    </article>
  );
};

export default ArticleCard;
