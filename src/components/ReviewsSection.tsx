import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Fatima Z.", text: "Un lieu magique où l'art rencontre la gastronomie. Le café est excellent et l'ambiance est tout simplement parfaite. Je recommande vivement!", time: "Il y a 2 semaines" },
  { name: "Mohammed A.", text: "Café 38 Concept est devenu mon endroit préféré à Ourika. L'accueil est chaleureux, les produits sont de qualité et l'espace est magnifique.", time: "Il y a 1 mois" },
  { name: "Sarah L.", text: "Une découverte extraordinaire! Le cadre est authentique, le service impeccable et les pâtisseries sont délicieuses. Un vrai coup de cœur.", time: "Il y a 3 semaines" },
  { name: "Youssef M.", text: "L'endroit idéal pour travailler ou se détendre. Wi-Fi rapide, café excellent et une atmosphère inspirante.", time: "Il y a 1 semaine" },
  { name: "Amina B.", text: "Un concept unique qui met en valeur les artistes locaux tout en offrant une expérience culinaire remarquable. Bravo à l'équipe!", time: "Il y a 2 mois" },
  { name: "Hassan K.", text: "Service exceptionnel, produits frais et de qualité, ambiance chaleureuse. C'est rare de trouver un lieu aussi complet. Je suis fan!", time: "Il y a 3 jours" },
];

const ReviewsSection = () => {
  return (
    <section id="avis" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Avis de nos <span className="text-gradient-amber">Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-4xl font-heading font-bold text-primary">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm font-body mt-1">Basé sur 241 avis clients</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-body font-semibold text-sm">{r.name}</span>
                <span className="text-muted-foreground text-xs font-body">{r.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
