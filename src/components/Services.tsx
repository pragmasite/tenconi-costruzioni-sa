import { motion } from "framer-motion";
import { Hammer, Home, Zap, Building2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = [
    { icon: Hammer, color: "text-accent" },
    { icon: Home, color: "text-accent" },
    { icon: Zap, color: "text-accent" },
    { icon: Building2, color: "text-accent" },
    { icon: Home, color: "text-accent" },
    { icon: Hammer, color: "text-accent" },
  ];

  return (
    <section id="servizi" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            {t.services.label}
          </span>
          <h2 className="mt-2 font-bold text-4xl md:text-5xl text-foreground">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length].icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background rounded-xl p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className={`h-6 w-6 ${serviceIcons[index % serviceIcons.length].color}`} />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
