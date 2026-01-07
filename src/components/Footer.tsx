import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-foreground-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-bold text-lg text-white">TENCONI</span>
              <span className="text-xs tracking-widest text-white/70">
                {t.footer.tagline}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-6">{t.footer.navigation}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#chi-siamo"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#progetti"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#orari"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6">{t.contact.label}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41917451335"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  +41 91 745 13 35
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tenconicostruzioni.ch"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  info@tenconicostruzioni.ch
                </a>
              </li>
              <li className="text-white/70 text-sm">
                Via Mondelle 23<br />
                6516 Cugnasco, CH
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Copyright */}
        <div className="mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {currentYear} Tenconi Costruzioni SA. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
