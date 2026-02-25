import { Coffee, Palette, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Coffee,
    title: "Café Artisanal",
    desc: "Des cafés soigneusement sélectionnés et préparés avec passion pour une expérience gustative unique",
  },
  {
    icon: Palette,
    title: "Espace Artistique",
    desc: "Un lieu d'exposition pour les artistes locaux, célébrant la créativité et le talent marocain",
  },
  {
    icon: Heart,
    title: "Ambiance Chaleureuse",
    desc: "Un cadre accueillant et authentique où chaque visite devient un moment mémorable",
  },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            À Propos de <span className="text-gradient-amber">Café 38 Concept</span>
          </h2>
          <p className="text-foreground/70 font-body leading-relaxed mb-4">
            Un espace unique où l'art, la culture et la gastronomie se rencontrent au cœur d'Ourika.
            Café 38 Concept n'est pas qu'un simple café, c'est une expérience sensorielle complète.
          </p>
          <p className="text-foreground/60 font-body leading-relaxed">
            Que vous veniez pour savourer nos spécialités artisanales, admirer des œuvres d'art locales
            ou simplement vous détendre dans une ambiance chaleureuse, nous vous accueillons avec passion
            et authenticité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-card text-center group hover:border-primary/30 border border-transparent transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
