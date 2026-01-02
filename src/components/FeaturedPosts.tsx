import { Zap, ArrowRight } from 'lucide-react';

const flashNews = [
  "I'm Done Punching Trees And Grabbing Rocks In Video Games",
  "Pokémon Concierge On Game Boy Is Too Good To Be Real",
  "Disney Just Got Us One Step Closer To The Holodeck",
];

const FeaturedPosts = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Section title */}
          <div className="relative">
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-heading font-extrabold text-muted/30 pointer-events-none select-none">
              NEWS
            </span>
            <h2 className="section-title text-foreground relative z-10">
              FEATURED POSTS
            </h2>
          </div>

          {/* Flash news ticker */}
          <div className="flex items-center gap-4 bg-secondary/50 rounded-lg px-4 py-3 max-w-xl">
            <div className="flex items-center gap-2 text-primary shrink-0">
              <Zap className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">Flash News</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm text-muted-foreground truncate">
                {flashNews[0]}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
