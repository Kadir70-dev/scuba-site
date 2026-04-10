import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutBrand() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            About MIRAAL
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Founded in 2020, Miraal represents the harmonious fusion of India's rich textile 
                heritage with contemporary global fashion demands. Our brand story is rooted in 
                the belief that traditional artistry and modern innovation can coexist beautifully.
              </p>
              
              <p>
                We specialize in bridging the gap between skilled Indian artisans and international 
                fashion markets, ensuring that authentic craftsmanship finds its rightful place in 
                the global textile trade. Our commitment extends beyond business to preserving 
                cultural heritage and promoting sustainable practices.
              </p>
              
              <p>
                Every piece that carries the Miraal name tells a story of dedication, skill, and 
                respect for the environment. We work directly with artisan communities, ensuring 
                fair trade practices while maintaining the highest quality standards expected in 
                international markets.
              </p>
              
              <p>
                Our vision is to create a sustainable ecosystem where traditional craftsmanship 
                thrives in the modern world, connecting conscious consumers with authentic, 
                ethically-made textiles that celebrate India's textile legacy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1645620352152-af908f6524f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRleHRpbGUlMjBmYWJyaWMlMjBwYXR0ZXJuJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU5NjczMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Traditional textile patterns"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694099614674-48c3bd799c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBhcnRpc2FuJTIwY3JhZnR3b3JrfGVufDF8fHx8MTc1OTY3MzIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Artisan craftwork"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755536751164-1578a37d9440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbWluaW1hbCUyMGVsZWdhbnR8ZW58MXx8fHwxNzU5NjczMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury fashion aesthetic"
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1660845683010-63e7422420b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhanJhayUyMGZhYnJpYyUyMGluZGlnbyUyMHBhdHRlcm4lMjB0ZXh0aWxlfGVufDF8fHx8MTc1OTY3MzIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indigo patterns"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}