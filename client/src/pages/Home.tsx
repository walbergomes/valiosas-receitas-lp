import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Heart, Star, Utensils, Gift, ChefHat } from "lucide-react";
import heroImage from "@assets/generated_images/festive_christmas_dinner_table_editorial_shot.png";
import cookieImage from "@assets/generated_images/festive_gingerbread_cookies_editorial_shot.png";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold tracking-tight text-primary">
            Mesa de Festa
          </div>
          <div className="hidden md:flex space-x-8 text-muted-foreground text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#recipes" className="hover:text-primary transition-colors">Receitas</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Histórias</a>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-medium hover:bg-primary/90 transition-all shadow-sm cursor-pointer">
            Comprar E-book
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div variants={fadeIn} className="inline-block mb-6 px-4 py-1.5 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium tracking-wide uppercase">
              Edição Especial de Festas
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif leading-[1.1] mb-8 text-balance">
              Receitas para <span className="italic text-primary">Magia Natalina</span> & Momentos Compartilhados
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Uma coleção cuidadosamente selecionada de receitas aconchegantes e festivas, criadas para trazer calor, sabor e alegria às suas celebrações familiares.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer">
                Comprar Coleção
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-sm text-lg font-medium border border-input hover:bg-muted/50 transition-all text-foreground/80 cursor-pointer">
                Ver Menu de Amostra
              </button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background overflow-hidden" />
                ))}
              </div>
              <p>Apreciado por mais de 2 mil cozinheiros caseiros</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <img 
                src={heroImage} 
                alt="Mesa de jantar festiva iluminada por velas" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 -z-10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/10 -z-10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Star className="w-8 h-8 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            "As memórias mais preciosas são criadas quando nos reunimos à mesa."
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Isso não é apenas um livro de receitas. É um convite para desacelerar, saborear a estação e criar momentos de conexão através da linguagem do alimento. Removemos o estresse e as técnicas complicadas, deixando apenas puro sabor e alegria.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <ChefHat className="w-8 h-8 text-primary" />,
                title: "Cardápios Selecionados",
                desc: "Planos de jantar completos de entradas a sobremesas, perfeitamente harmonizados no seu paladar."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Sem Estresse",
                desc: "Cronogramas detalhados e guias de preparo antecipado para você aproveitar a festa, não apenas trabalhar na cozinha."
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Tradições Familiares",
                desc: "Receitas clássicas reimaginadas com toques modernos que se tornarão suas novas favoritas em família."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 md:p-12 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-muted text-center md:text-left group"
              >
                <div className="mb-6 inline-flex p-4 bg-background rounded-full group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / Cookie Section */}
      <section className="py-24 px-6 bg-secondary/5 relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src={cookieImage} 
                alt="Biscoitos de gengibre decorados" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-serif mb-8 text-balance">Assados que Iluminam</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Não há nada como o aroma de especiarias quentes emanando pela casa. Nossa seção dedicada de assados apresenta receitas infalivelmente boas de biscoitos de gengibre, biscoitos de polpa de fruta e bolos de festa deslumbrantes que até iniciantes conseguem dominar.
            </p>
            <ul className="space-y-4 mb-10">
              {["Medidas em métricas e sistema imperial", "Guia de substituição de ingredientes", "Dicas e truques de decoração"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2 border-b border-primary/30 pb-0.5 hover:border-primary cursor-pointer">
              Veja o que há dentro <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-4xl relative">
          <div className="absolute inset-0 bg-primary transform -skew-y-2 rounded-3xl -z-10 translate-y-4 opacity-10"></div>
          <div className="bg-primary text-primary-foreground p-12 md:p-20 rounded-sm text-center shadow-xl relative overflow-hidden">
             {/* Abstract pattern */}
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <Gift className="w-64 h-64" />
             </div>
             
             <div className="relative z-10">
               <div className="flex justify-center mb-8 gap-1 text-secondary">
                 {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
               </div>
               <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-8">
                 "Normalmente fico estressada com o cozimento de festas, mas este guia tornou tudo tão simples e elegante. Minha família não parou de elogiar o assado!"
               </blockquote>
               <div className="flex items-center justify-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-serif text-xl">M</div>
                 <div className="text-left">
                   <div className="font-medium">Mariana Silva</div>
                   <div className="text-primary-foreground/70 text-sm">Cozinheira Caseira, São Paulo</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Torne Esta Festa Inesquecível</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Baixe sua cópia hoje e comece a planejar a celebração perfeita. Entrega digital instantânea.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-sm text-xl font-medium hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1 cursor-pointer">
              Comprar E-book — R$ 79,00
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Inclui 40+ receitas, listas de compras imprimíveis e harmonizações de vinhos.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-2xl font-semibold mb-6">Mesa de Festa</div>
            <p className="text-white/60 max-w-sm">
              Celebrando a alegria da comida e das reuniões. Uma publicação digital dedicada a tornar suas festas mais quentes e deliciosas.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6 text-white/90">Explorar</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Receitas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Loja</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6 text-white/90">Legal</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © 2024 Mesa de Festa E-book. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
