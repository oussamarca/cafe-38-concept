import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Nous <span className="text-gradient-amber">Contacter</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Venez nous rendre visite ou contactez-nous pour toute question
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Adresse</h3>
                <p className="text-muted-foreground text-sm font-body">965F+3H Ourika, Maroc</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Téléphone</h3>
                <a href="tel:0602322722" className="text-primary text-sm font-body hover:underline">
                  06 02 32 27 22
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Horaires d'ouverture</h3>
                <p className="text-muted-foreground text-sm font-body">Lundi - Vendredi : 09:00 - 22:00</p>
                <p className="text-muted-foreground text-sm font-body">Samedi - Dimanche : 09:00 - 23:00</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=965F+3H+Ourika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:shadow-warm transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-5"
          >
            <h3 className="font-heading text-xl font-semibold mb-2">Envoyez-nous un message</h3>
            <div>
              <label className="text-sm text-muted-foreground font-body mb-1 block">Nom</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-body mb-1 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-body mb-1 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:shadow-warm transition-all duration-300"
            >
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
