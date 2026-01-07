import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder gallery items based on construction services
  const galleries = [
    { title: "Progetto Residenziale", type: "Abitazione" },
    { title: "Ristrutturazione Moderna", type: "Rinnovamento" },
    { title: "Costruzione Commerciale", type: "Business" },
    { title: "Spazio Pubblico", type: "Infrastruttura" },
    { title: "Demolizione Specializzata", type: "Demolizione" },
    { title: "Progetto Misto", type: "Complesso" },
  ];

  return (
    <section id="progetti" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            {t.gallery.label}
          </span>
          <h2 className="mt-2 font-bold text-4xl md:text-5xl text-foreground">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40 group-hover:to-foreground/60 transition-all" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.type}</p>
              </div>

              <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 text-lg">
            Desiderate visualizzare altri progetti? Contattateci per una consulenza personalizzata.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
