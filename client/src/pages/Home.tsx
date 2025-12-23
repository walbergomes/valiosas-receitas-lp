import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Heart, Star, Utensils, Gift, ChefHat, Mail, Check } from "lucide-react";
import heroImage from "@assets/generated_images/festive_christmas_dinner_table_editorial_shot.png";
import cookieImage from "@assets/generated_images/festive_gingerbread_cookies_editorial_shot.png";
import turkeyImage from "@assets/generated_images/golden_roasted_chester_turkey_platter.png";
import codGratinImage from "@assets/generated_images/creamy_cod_gratin_with_potatoes.png";
import porkLoinImage from "@assets/generated_images/tender_sliced_pork_loin_roast.png";
import filetMignonImage from "@assets/generated_images/filet_mignon_in_wine_sauce.png";
import frenchToastImage from "@assets/generated_images/golden_french_toast_breakfast_stack.png";
import buttersCooki from "@assets/generated_images/decorated_christmas_butter_cookies.png";
import cheesecakeImage from "@assets/generated_images/christmas_red_fruit_cheesecake.png";

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
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20 relative">
      
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold tracking-tight text-primary">
            Valiosas Receitas
          </div>
          <div className="hidden md:flex space-x-8 text-muted-foreground text-sm font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Características</a>
            <a href="#recipes" className="hover:text-primary transition-colors">Receitas</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Histórias</a>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-medium hover:bg-primary/90 transition-all shadow-sm cursor-pointer relative z-10">
            Comprar E-book
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden z-10">
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
            <motion.div variants={fadeIn} className="max-w-md">
              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
                <label htmlFor="email-newsletter" className="text-sm font-medium text-muted-foreground mb-2">
                  Receba dicas de receitas e notícias exclusivas:
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-5 w-5 h-5 text-muted-foreground" />
                    <input
                      id="email-newsletter"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-sm border border-input bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-6 py-4 rounded-sm font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Inscrito!
                      </>
                    ) : (
                      <>
                        Inscrever
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-primary font-medium mt-1"
                  >
                    ✓ Obrigado! Você receberá nossas notícias em breve.
                  </motion.p>
                )}
              </form>
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
      <section className="py-24 bg-white relative z-10">
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
      <section id="features" className="py-24 px-6 bg-background relative z-10">
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

      {/* Main Dishes Section */}
      <section id="recipes" className="py-24 px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Pratos Principais que Impressionam</h2>
          
          {/* Chester Turkey */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-serif mb-4">Chester Assado Dourado</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O clássico natalino reinventado. Nosso chester assado apresenta uma pele crocante dourada e carne macia e suculenta. Incluímos o segredo para um resultado perfeito a cada vez.
              </p>
              <ul className="space-y-3">
                {["Tempo de preparo: 3 horas", "Marinada de especiarias festivas", "Técnica de assado uniforme"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={turkeyImage} 
                  alt="Chester dourado assado" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Cod Gratin */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={codGratinImage} 
                  alt="Bacalau à Gomes de Sá" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-4">Bacalau Gratin com Batatas</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Uma receita clássica portuguesa com toque festivo. Bacalau macio em camadas com batata cremosa e um gratin irresistível que derrete na boca.
              </p>
              <ul className="space-y-3">
                {["Bacalau desfiado delicadamente", "Molho cremoso caseiro", "Cobertura dourada crocante"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Pork Loin */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-serif mb-4">Lombo Suíno Macio e Suculento</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O corte perfeito para impressionar. Nosso lombo suíno é temperado com ervas festivas e assado até ficar macio por dentro e com crosta delicada por fora.
              </p>
              <ul className="space-y-3">
                {["Marinada com ervas frescas", "Temperatura perfeita garantida", "Acompanhamentos sugeridos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={porkLoinImage} 
                  alt="Lombo suíno assado" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Savory Dishes Section */}
      <section className="py-24 px-6 bg-secondary/5 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Pratos Refinados para o Paladar</h2>
          
          {/* Filet Mignon */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-serif mb-4">File Mignon ao Molho de Vinho</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Elegância em cada garfada. Carnes nobres seladas ao ponto certo e cobertas com um molho de vinho tinto encorpado que complementa perfeitamente o sabor natural da carne.
              </p>
              <ul className="space-y-3">
                {["Seleção premium de carnes", "Molho reduzido artesanalmente", "Acompanhamentos sofisticados"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={filetMignonImage} 
                  alt="File mignon ao molho de vinho" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sweets Section */}
      <section className="py-24 px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Doces que Encantam</h2>
          
          {/* French Toast */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={frenchToastImage} 
                  alt="Torradas francesas douradas" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-4">Torradas Francesas Douradas</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Perfeitas para um café da manhã ou brunch festivo. Nossas torradas francesas são feitas com pão brioche macio, ovos e especiarias de café da manhã que criam um exterior crocante e interior macio.
              </p>
              <ul className="space-y-3">
                {["Pão brioche de qualidade", "Calda de xarope caseira", "Acompanhamentos deliciosos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Christmas Cookies */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-serif mb-4">Biscoitos de Manteiga Natalinos Decorados</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Arte e sabor em cada biscoito. Nossas receitas de biscoitos amanteigados incluem variações de formas e cores, com glacê real para decorações deslumbrantes que são perfeitas para presentear.
              </p>
              <ul className="space-y-3">
                {["Receita clássica amanteigada", "Técnicas de decoração com glacê", "Sugestões de formas temáticas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={buttersCooki} 
                  alt="Biscoitos de manteiga decorados" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Cheesecake */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <img 
                  src={cheesecakeImage} 
                  alt="Cheesecake de frutas vermelhas" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-4">Cheesecake de Frutas Vermelhas Natalina</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sofisticação em cada fatia. Nossas receitas de cheesecake combinam uma base crocante com creme macio e frutas vermelhas que trazem uma acidez perfeita que complementa a riqueza do queijo.
              </p>
              <ul className="space-y-3">
                {["Base de biscoito crocante", "Creme de queijo cremoso", "Calda de frutas vermelhas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break / Cookie Section */}
      <section className="py-24 px-6 bg-secondary/5 relative overflow-hidden z-10">
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

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white text-center relative z-10">
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
      <footer className="bg-foreground text-background py-16 px-6 relative z-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-2xl font-semibold mb-6">Valiosas Receitas</div>
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
          © 2025 Valiosas Receitas E-book. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
