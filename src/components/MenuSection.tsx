import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = { name: string; price: string; desc: string };

const menuCategories: Record<string, MenuItem[]> = {
  "Boissons Chaudes": [
    { name: "Espresso", price: "15 DH", desc: "Café italien classique" },
    { name: "Cappuccino", price: "25 DH", desc: "Espresso avec mousse de lait" },
    { name: "Café Latte", price: "28 DH", desc: "Café doux au lait onctueux" },
    { name: "Thé à la Menthe", price: "20 DH", desc: "Thé marocain traditionnel" },
  ],
  "Pâtisseries": [
    { name: "Croissant Beurre", price: "12 DH", desc: "Fraîchement préparé" },
    { name: "Pain au Chocolat", price: "15 DH", desc: "Chocolat de qualité" },
    { name: "Gâteau Maison", price: "30 DH", desc: "Spécialité du jour" },
    { name: "Tarte aux Fruits", price: "35 DH", desc: "Fruits de saison" },
  ],
  "Snacks Salés": [
    { name: "Sandwich Poulet", price: "40 DH", desc: "Poulet grillé et crudités" },
    { name: "Panini Végétarien", price: "35 DH", desc: "Légumes grillés et fromage" },
    { name: "Salade Caesar", price: "45 DH", desc: "Fraîche et généreuse" },
    { name: "Plat du Jour", price: "55 DH", desc: "Demandez à notre équipe" },
  ],
  "Spécialités": [
    { name: "Brunch Complet", price: "80 DH", desc: "Assortiment varié" },
    { name: "Plateau Mezze", price: "70 DH", desc: "Sélection méditerranéenne" },
    { name: "Smoothie Bowl", price: "45 DH", desc: "Fruits frais et granola" },
    { name: "Menu Découverte", price: "120 DH", desc: "Boisson + Plat + Dessert" },
  ],
};

const categories = Object.keys(menuCategories);

const MenuSection = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Notre <span className="text-gradient-amber">Menu</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Découvrez nos spécialités artisanales préparées avec passion et ingrédients de qualité
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {menuCategories[active].map((item) => (
              <div
                key={item.name}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-primary font-body font-bold text-lg whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-10">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span className="w-2 h-2 rounded-full bg-primary" /> Repas sur place
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span className="w-2 h-2 rounded-full bg-primary" /> Vente à emporter
          </span>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
