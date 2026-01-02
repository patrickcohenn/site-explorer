import { cn } from '@/lib/utils';

type Category = 'games' | 'curiosities' | 'cinema' | 'comics' | 'technology' | 'otaku';

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

const categoryConfig: Record<Category, { label: string; className: string }> = {
  games: {
    label: 'Games',
    className: 'bg-primary text-primary-foreground',
  },
  curiosities: {
    label: 'Curiosities',
    className: 'bg-accent text-accent-foreground',
  },
  cinema: {
    label: 'Cinema & TV',
    className: 'bg-category-cinema text-foreground',
  },
  comics: {
    label: 'Comics',
    className: 'bg-category-comics text-foreground',
  },
  technology: {
    label: 'Technology',
    className: 'bg-category-technology text-foreground',
  },
  otaku: {
    label: 'Otaku',
    className: 'bg-pink-500 text-foreground',
  },
};

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  const config = categoryConfig[category];
  
  return (
    <span
      className={cn(
        'category-badge',
        config.className,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {config.label}
    </span>
  );
};

export default CategoryBadge;
