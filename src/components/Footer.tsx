import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logoImg from "../assets/logo-text.png";

const footerLinkGroups = [
  {
    title: "Product",
    links: ["Technologies", "Your Stack", "Projects", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookies", "License"],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0B0F19] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div id="about" className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <img src={logoImg} alt="Dev Stack Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-white">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A simple way to explore frontend, backend, database, and DevOps
              tools, then bring together the right stack for your next project.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-pink-500 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-pink-500 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-pink-500 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div id="projects" className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3 lg:justify-items-end">
            {footerLinkGroups.map((group) => {
              return (
                <div key={group.title}>
                  <h3 className="mb-4 text-sm font-bold text-white">
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => {
                      return (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-slate-400 hover:text-white transition-colors"
                          >
                            {link}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} DevStack. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
