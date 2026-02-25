import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Coffee className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-primary">Café 38 Concept</span>
        </div>
        <p className="text-muted-foreground text-sm font-body">
          © 2025 Café 38 Concept. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
