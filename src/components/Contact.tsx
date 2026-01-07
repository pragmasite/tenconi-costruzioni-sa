import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 91 745 13 35",
      href: "tel:+41917451335",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@tenconicostruzioni.ch",
      href: "mailto:info@tenconicostruzioni.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Mondelle 23, 6516 Cugnasco, CH",
      href: "https://maps.google.com/?q=Via+Mondelle+23,+6516+Cugnasco,+Switzerland",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            {t.contact.label}
          </span>
          <h2 className="mt-2 font-bold text-4xl md:text-5xl text-foreground">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 font-medium">
                        {info.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto font-semibold mt-8">
              <a href="tel:+41917451335">
                <Phone className="h-4 w-4 mr-2" />
                {t.contact.cta}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-medium h-96"
          >
            <iframe
              title="Tenconi Costruzioni Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.90944%2C46.16884%2C8.92144%2C46.17484&layer=mapnik&marker=46.171834%2C8.914438"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
