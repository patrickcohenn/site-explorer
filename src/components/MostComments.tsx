import { MessageCircle } from 'lucide-react';
import heroGaming from '@/assets/hero-gaming.jpg';
import pokemonGameboy from '@/assets/pokemon-gameboy.jpg';
import disneyHolodeck from '@/assets/disney-holodeck.jpg';

const commentedPosts = [
  {
    id: 1,
    title: "I'm Done Punching Trees And Grabbing Rocks In Video Games",
    comments: 128,
    image: heroGaming,
  },
  {
    id: 2,
    title: 'Pokémon Concierge On Game Boy Is Too Good To Be Real',
    comments: 95,
    image: pokemonGameboy,
  },
  {
    id: 3,
    title: 'Disney Just Got Us One Step Closer To The Holodeck',
    comments: 87,
    image: disneyHolodeck,
  },
];

const MostComments = () => {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="container">
        {/* Section title */}
        <div className="relative mb-8">
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-heading font-extrabold text-muted/30 pointer-events-none select-none">
            NEWS
          </span>
          <h2 className="section-title text-foreground relative z-10">
            MOST COMMENTS
          </h2>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commentedPosts.map((post, index) => (
            <article
              key={post.id}
              className="group flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">{post.comments} comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-end gap-1 mt-6">
          <button className="w-2 h-2 rounded-full bg-primary" />
          <button className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default MostComments;
