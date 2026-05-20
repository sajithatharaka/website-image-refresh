import { createFileRoute } from "@tanstack/react-router";
import alhoAssado from "@/assets/alho-assado.png";
import blend from "@/assets/blend.png";
import carolinaReaper from "@/assets/carolina-reaper.png";
import habanero from "@/assets/habanero.png";
import jalapeno from "@/assets/jalapeno.png";
import sacana from "@/assets/sacana.png";
import luis from "@/assets/luis.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pequeno Grande — Authentic Portuguese Piri Piri Sauces" },
      {
        name: "description",
        content:
          "Handcrafted piri-piri sauces by Luis in Portugal. Natural ingredients, no preservatives — small bottles, big taste.",
      },
    ],
  }),
});

const products = [
  {
    name: "Jalapeño",
    desc: "Green, bright and gently warming",
    notes: ["Jalapeño", "Lime", "Herbs"],
    heat: 1,
    img: jalapeno,
  },
  {
    name: "Blend",
    desc: "Perfect balance of flavour and heat",
    notes: ["Piri Piri", "Garlic", "Lemon"],
    heat: 2,
    img: blend,
  },
  {
    name: "Alho Assado",
    desc: "Roasted garlic, deep and smoky",
    notes: ["Roasted Garlic", "Piri Piri", "Olive Oil"],
    heat: 3,
    img: alhoAssado,
  },
  {
    name: "Sacana",
    desc: "Cheeky kick with a Portuguese soul",
    notes: ["Piri Piri", "Pepper Blend", "Vinegar"],
    heat: 3,
    img: sacana,
  },
  {
    name: "Habanero",
    desc: "Fruity fire, full-bodied burn",
    notes: ["Habanero", "Citrus", "Garlic"],
    heat: 4,
    img: habanero,
  },
  {
    name: "Carolina Reaper",
    desc: "For those who dare to go beyond",
    notes: ["Carolina Reaper", "Habanero", "Smoke"],
    heat: 5,
    img: carolinaReaper,
  },
];

function Index() {
  return (
    <div className="pg-root">
      <style>{css}</style>

      <nav>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-pequeno">PEQUENO</span>
            <span className="logo-grande">GRANDE</span>
          </div>
          <div className="nav-links">
            <a href="#story">Story</a>
            <a href="#products">Products</a>
            <a href="#peppers">Heat Guide</a>
            <a href="#shop">Shop</a>
          </div>
          <button className="btn-primary">Order Now</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">Authentic Piri Piri Sauces</p>
            <h1 className="hero-title">
              Small in size,<br />
              <span className="hero-title-accent">BIG</span> in taste
            </h1>
            <p className="hero-description">
              Handcrafted by Luis in Portugal. Every bottle carries the
              authentic taste of Portuguese tradition, using only natural
              ingredients and no preservatives.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn-hero-primary">Explore Collection</a>
              <a href="#story" className="btn-hero-secondary">Luis's Story</a>
            </div>
            <div className="hero-stats">
              <div>
                <p className="hero-stat-value">100%</p>
                <p className="hero-stat-label">Natural</p>
              </div>
              <div>
                <p className="hero-stat-value">0</p>
                <p className="hero-stat-label">Preservatives</p>
              </div>
              <div>
                <p className="hero-stat-value">🇵🇹</p>
                <p className="hero-stat-label">Made in Portugal</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-bottle-container">
              <div className="hero-circle-1" />
              <div className="hero-circle-2" />
              <img src={sacana} alt="Pequeno Grande Piri Piri bottle" className="hero-bottle-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-container">
          <div>
            <p className="section-subtitle">The Craftsman</p>
            <h2 className="section-title">
              He doesn't just<br />
              make piri piri sauce.<br />
              He <span className="section-title-accent">obsesses</span> over it.
            </h2>
            <p className="story-text">
              Twenty years ago, Luis stood at a restaurant grill as a trainee chef,
              mesmerized by fire and flavor. That spark never left. What followed
              was a borderline-obsessive journey — refining recipes across kitchens
              worldwide, chasing the perfect heat-to-flavor ratio, drawing from his
              Portuguese roots where piri piri isn't just a condiment, it's a
              culinary religion.
            </p>
            <p className="story-text">
              Today, Luis runs Pequeno Grande Molhos the way some people collect
              wine: with fanatical attention to pairing. He'll tell you honestly —
              he doesn't have one favorite sauce. Because the magic isn't in picking
              a winner, it's in knowing which bottle transforms grilled prawns,
              which one elevates roast chicken, which one makes eggs unforgettable.
            </p>
            <p className="story-text story-highlight">
              Every batch carries decades of trial, error, and taste-testing.
              Every bottle holds his refusal to settle for "good enough."
            </p>
            <div className="story-quote">
              <p className="story-quote-text">
                "The secret isn't in the recipe — it's in the respect for the
                ingredients and the patience to let them speak.
                And life is a tasty flaming adventure."
              </p>
              <p className="story-quote-author">— Luis, Founder</p>
            </div>
          </div>

          <div className="story-image">
            <div className="story-image-box">
              <img src={luis} alt="Luis crafting Pequeno Grande piri-piri sauce" />
              <div className="story-image-overlay" />
              <div className="story-badge">
                <div className="badge-icon">👨‍🍳</div>
                <div>
                  <p className="badge-text-title">Handmade with care</p>
                  <p className="badge-text-subtitle">Every bottle. Every batch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="products-container">
          <div className="section-header">
            <p className="section-subtitle">Find Your Fire</p>
            <h2 className="section-title">
              Pick Your<span className="section-title-accent"> Heat Level</span>
            </h2>
          </div>

          <div className="heat-scale">
            <div className="heat-scale-bar">
              <div className="heat-scale-fill" />
            </div>
            <div className="heat-scale-labels">
              <span>Mild</span>
              <span>Medium</span>
              <span>Hot</span>
              <span>Extreme</span>
            </div>
          </div>

          <div className="products-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card">
                <div className="product-heat-indicator">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`heat-bar ${i <= p.heat ? "active" : ""}`}
                    />
                  ))}
                </div>
                <div className="product-bottle-container">
                  <img src={p.img} alt={`Pequeno Grande ${p.name}`} className="product-bottle-img" />
                </div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-description">{p.desc}</p>
                <div className="product-notes">
                  {p.notes.map((n) => (
                    <span key={n} className="product-note">{n}</span>
                  ))}
                </div>
                <button className="product-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="cta-section">
        <div className="cta-glow" />
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to experience<br />
            <span className="section-title-accent">authentic piri-piri?</span>
          </h2>
          <p className="cta-description">
            Every bottle tells a story — handcrafted, natural, unforgettable.
          </p>
          <div className="cta-buttons">
            <button className="btn-hero-primary">Shop the Collection</button>
            <button className="btn-hero-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Pequeno Grande — Handcrafted in Portugal 🇵🇹
          </p>
        </div>
      </footer>
    </div>
  );
}

const css = `
.pg-root {
  --zinc-950:#09090b;--zinc-900:#18181b;--zinc-800:#27272a;--zinc-700:#3f3f46;
  --zinc-500:#71717a;--zinc-400:#a1a1aa;--zinc-100:#f4f4f5;
  --amber-600:#d97706;--amber-500:#f59e0b;--orange-600:#ea580c;--red-600:#dc2626;
  --ease-out:cubic-bezier(0.23,1,0.32,1);
  font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
  background:var(--zinc-950);color:var(--zinc-100);line-height:1.6;
  min-height:100vh;overflow-x:hidden;
}
.pg-root *{box-sizing:border-box;margin:0;padding:0;}
.pg-root a{color:inherit;text-decoration:none;}
.pg-root img{display:block;max-width:100%;}

nav{position:fixed;top:0;left:0;right:0;z-index:1000;backdrop-filter:blur(20px);
  background:rgba(9,9,11,0.8);border-bottom:1px solid var(--zinc-800);}
.nav-container{max-width:1280px;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;}
.logo{font-size:1.5rem;font-weight:800;letter-spacing:-0.05em;}
.logo-pequeno{color:var(--zinc-100);} .logo-grande{color:var(--amber-500);margin-left:.5rem;}
.nav-links{display:flex;gap:2rem;align-items:center;}
.nav-links a{color:var(--zinc-400);font-size:.875rem;letter-spacing:.05em;transition:color .2s;}
.nav-links a:hover{color:var(--amber-500);}
.btn-primary{padding:.5rem 1.5rem;background:var(--amber-600);color:var(--zinc-950);font-weight:600;
  border:none;border-radius:9999px;cursor:pointer;font-size:.875rem;transition:all .2s var(--ease-out);}
.btn-primary:hover{background:var(--amber-500);transform:scale(1.05);box-shadow:0 0 20px rgba(217,119,6,.3);}

.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:6rem 1.5rem 3rem;}
.hero-bg{position:absolute;inset:0;background:linear-gradient(to bottom,var(--zinc-950),var(--zinc-900),var(--zinc-950));z-index:0;}
.hero-glow{position:absolute;top:25%;left:50%;transform:translateX(-50%);width:600px;height:600px;
  background:rgba(217,119,6,.2);filter:blur(120px);border-radius:50%;z-index:1;}
.hero-container{max-width:1280px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;position:relative;z-index:10;}
.hero-subtitle{color:var(--amber-500);font-size:.875rem;letter-spacing:.3em;text-transform:uppercase;margin-bottom:1rem;}
.hero-title{font-size:4rem;font-weight:800;line-height:1;letter-spacing:-.05em;margin-bottom:1.5rem;}
.hero-title-accent{color:var(--amber-500);}
.hero-description{color:var(--zinc-400);font-size:1.125rem;line-height:1.7;margin-bottom:2rem;max-width:50ch;}
.hero-buttons{display:flex;gap:1rem;margin-bottom:3rem;flex-wrap:wrap;}
.btn-hero-primary{display:inline-block;padding:1rem 2rem;background:var(--amber-600);color:var(--zinc-950);font-weight:600;
  border:none;border-radius:9999px;cursor:pointer;transition:all .2s var(--ease-out);}
.btn-hero-primary:hover{background:var(--amber-500);transform:scale(1.05);box-shadow:0 0 30px rgba(217,119,6,.3);}
.btn-hero-secondary{display:inline-block;padding:1rem 2rem;background:transparent;color:var(--zinc-100);
  font-weight:600;border:1px solid var(--zinc-700);border-radius:9999px;cursor:pointer;transition:all .2s;}
.btn-hero-secondary:hover{border-color:var(--amber-500);transform:scale(1.05);}
.hero-stats{display:flex;gap:2rem;padding-top:2rem;border-top:1px solid var(--zinc-800);flex-wrap:wrap;}
.hero-stat-value{font-size:1.5rem;font-weight:700;color:var(--amber-500);}
.hero-stat-label{font-size:.75rem;color:var(--zinc-500);text-transform:uppercase;letter-spacing:.1em;}

.hero-image{position:relative;}
.hero-bottle-container{position:relative;width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;}
.hero-bottle-img{position:relative;z-index:2;max-height:520px;width:auto;
  filter:drop-shadow(0 25px 50px rgba(217,119,6,.45));
  animation:float 6s ease-in-out infinite;}
@keyframes float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-20px) rotate(2deg)}}
.hero-circle-1,.hero-circle-2{position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);}
.hero-circle-1{width:24rem;height:24rem;border:1px solid rgba(217,119,6,.3);animation:pulse 4s ease-in-out infinite;}
.hero-circle-2{width:31rem;height:31rem;border:1px solid rgba(217,119,6,.2);animation:pulse 5s ease-in-out infinite;}
@keyframes pulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.3}50%{transform:translate(-50%,-50%) scale(1.2);opacity:.1}}

.story-section{padding:8rem 1.5rem;}
.story-container{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
.section-subtitle{color:var(--amber-500);font-size:.875rem;letter-spacing:.3em;text-transform:uppercase;margin-bottom:1rem;}
.section-title{font-size:3rem;font-weight:800;line-height:1.2;letter-spacing:-.05em;margin-bottom:1.5rem;}
.section-title-accent{color:var(--amber-500);}
.story-text{color:var(--zinc-400);line-height:1.7;margin-bottom:1rem;}
.story-highlight{color:var(--amber-500);font-weight:600;}
.story-quote{margin-top:2rem;padding-top:2rem;border-top:1px solid var(--zinc-800);}
.story-quote-text{font-size:.875rem;color:var(--zinc-500);font-style:italic;margin-bottom:.5rem;}
.story-quote-author{color:var(--amber-500);font-size:.875rem;font-weight:600;}
.story-image-box{position:relative;aspect-ratio:4/5;border-radius:1rem;overflow:hidden;
  background:linear-gradient(135deg,var(--zinc-800),var(--zinc-900));}
.story-image-box img{width:100%;height:100%;object-fit:cover;}
.story-image-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,11,.85),transparent 60%);}
.story-badge{position:absolute;bottom:2rem;left:2rem;right:2rem;backdrop-filter:blur(20px);
  background:rgba(24,24,27,.8);border:1px solid var(--zinc-700);border-radius:1rem;padding:1.5rem;
  display:flex;gap:1rem;align-items:center;}
.badge-icon{width:3rem;height:3rem;background:var(--amber-600);border-radius:50%;display:flex;
  align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;}
.badge-text-title{font-weight:600;margin-bottom:.25rem;}
.badge-text-subtitle{font-size:.875rem;color:var(--zinc-400);}

.products-section{padding:8rem 1.5rem;background:linear-gradient(to bottom,var(--zinc-950),var(--zinc-900));}
.products-container{max-width:1280px;margin:0 auto;}
.section-header{text-align:center;margin-bottom:4rem;}
.heat-scale{max-width:64rem;margin:0 auto 4rem;}
.heat-scale-bar{position:relative;height:1rem;background:var(--zinc-800);border-radius:9999px;overflow:hidden;margin-bottom:1rem;}
.heat-scale-fill{position:absolute;inset:0;width:100%;
  background:linear-gradient(to right,var(--amber-500),var(--orange-600),var(--red-600));}
.heat-scale-labels{display:flex;justify-content:space-between;font-size:.75rem;color:var(--zinc-500);text-transform:uppercase;letter-spacing:.1em;}

.products-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;}
.product-card{background:var(--zinc-900);border:1px solid var(--zinc-800);border-radius:1rem;padding:1.5rem;
  transition:all .3s var(--ease-out);display:flex;flex-direction:column;}
.product-card:hover{transform:translateY(-8px);border-color:rgba(217,119,6,.5);box-shadow:0 20px 40px rgba(0,0,0,.4);}
.product-heat-indicator{display:flex;gap:.25rem;margin-bottom:1rem;}
.heat-bar{width:.5rem;height:2rem;background:var(--zinc-800);border-radius:9999px;}
.heat-bar.active{background:linear-gradient(to top,var(--amber-600),var(--orange-600));}
.product-bottle-container{aspect-ratio:1;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:center;
  background:radial-gradient(circle at center,rgba(217,119,6,.12),transparent 70%);border-radius:.75rem;}
.product-bottle-img{max-height:240px;width:auto;object-fit:contain;transition:transform .3s var(--ease-out);
  filter:drop-shadow(0 20px 30px rgba(0,0,0,.5));}
.product-card:hover .product-bottle-img{transform:scale(1.08) rotate(-3deg);}
.product-name{font-size:1.25rem;font-weight:700;margin-bottom:.5rem;}
.product-description{font-size:.875rem;color:var(--zinc-400);margin-bottom:1rem;}
.product-notes{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem;}
.product-note{font-size:.75rem;padding:.25rem .75rem;background:var(--zinc-800);border-radius:9999px;color:var(--zinc-400);}
.product-btn{width:100%;padding:.75rem;background:var(--amber-600);color:var(--zinc-950);font-weight:600;
  border:none;border-radius:9999px;cursor:pointer;margin-top:auto;transition:all .2s var(--ease-out);}
.product-btn:hover{background:var(--amber-500);transform:scale(1.03);}

.cta-section{position:relative;padding:8rem 1.5rem;overflow:hidden;
  background:linear-gradient(to bottom,var(--zinc-900),#000);}
.cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;
  background:rgba(217,119,6,.18);filter:blur(120px);border-radius:50%;}
.cta-container{position:relative;max-width:800px;margin:0 auto;text-align:center;}
.cta-title{font-size:3rem;font-weight:800;line-height:1.1;letter-spacing:-.05em;margin-bottom:1.5rem;}
.cta-description{color:var(--zinc-400);font-size:1.125rem;margin-bottom:2.5rem;}
.cta-buttons{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}

footer{border-top:1px solid var(--zinc-800);padding:2rem 1.5rem;background:var(--zinc-950);}
.footer-container{max-width:1280px;margin:0 auto;text-align:center;}
.footer-copyright{color:var(--zinc-500);font-size:.875rem;}

@media(max-width:768px){
  .nav-links{display:none;}
  .hero-container,.story-container{grid-template-columns:1fr;}
  .hero-title,.cta-title{font-size:2.5rem;}
  .section-title{font-size:2rem;}
  .hero-circle-1{width:18rem;height:18rem;}
  .hero-circle-2{width:22rem;height:22rem;}
}
`;
