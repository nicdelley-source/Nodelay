const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <span className="logo-mark">⚡</span>
            <span>Nodelay</span>
          </a>
          <p>Real-time infrastructure for products that can't wait.</p>
        </div>

        <div className="footer-links">
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              {group.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Nodelay. All rights reserved.</p>
      </div>
    </footer>
  );
}
