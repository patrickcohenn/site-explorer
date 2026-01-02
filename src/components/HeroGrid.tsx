import ArticleCard from './ArticleCard';

import heroGaming from '@/assets/hero-gaming.jpg';
import pokemonGameboy from '@/assets/pokemon-gameboy.jpg';
import disneyHolodeck from '@/assets/disney-holodeck.jpg';
import princessPeach from '@/assets/princess-peach.jpg';

const articles = [
  {
    id: 1,
    title: '5 produções para você assistir até saber a verdade sobre o sumiço de K...',
    category: 'curiosities' as const,
    image: heroGaming,
    date: '1 year ago',
    size: 'large' as const,
  },
  {
    id: 2,
    title: "I'm Done Punching Trees And Grabbing Rocks In Video Games",
    category: 'curiosities' as const,
    image: pokemonGameboy,
    date: '1 year ago',
    size: 'medium' as const,
  },
  {
    id: 3,
    title: 'Pokémon Concierge On Game Boy Is Too Good To Be Real',
    category: 'games' as const,
    image: disneyHolodeck,
    date: '1 year ago',
    size: 'medium' as const,
  },
  {
    id: 4,
    title: 'Disney Just Got Us One Step Closer To The Holodeck',
    category: 'curiosities' as const,
    image: princessPeach,
    date: '1 year ago',
    size: 'medium' as const,
  },
];

const HeroGrid = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {/* Main featured article */}
        <div className="md:col-span-1 lg:col-span-1">
          <ArticleCard
            title={articles[0].title}
            category={articles[0].category}
            image={articles[0].image}
            date={articles[0].date}
            size="large"
          />
        </div>

        {/* Secondary articles */}
        {articles.slice(1).map((article) => (
          <div key={article.id}>
            <ArticleCard
              title={article.title}
              category={article.category}
              image={article.image}
              date={article.date}
              size="large"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroGrid;
