import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Palette, Leaf, Award, Globe } from "lucide-react";

export default function AjrakFabrics() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "100% Handmade",
      description: "Crafted by skilled artisans using traditional techniques"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Organic Dyes",
      description: "Natural, eco-friendly dyes for sustainable fashion"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "7+ Color Variations",
      description: "Rich palette of traditional and contemporary colors"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Export Ready",
      description: "Quality standards for international markets"
    }
  ];

  const fabricPatterns = [
    "Deep Indigo Classic",
    "Earthy Rust Red", 
    "Royal Blue Heritage",
    "Natural Ivory",
    "Forest Green",
    "Burgundy Traditional",
    "Mustard Gold",
    "Charcoal Black"
  ];

  return (
    <section id="ajrak-fabrics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            Check Out AJRAK FABRIC
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover the timeless beauty of traditional Ajrak printing, where each piece 
            tells a story of heritage, craftsmanship, and sustainable artistry.
          </p>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-full h-96 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255,255,255,0.1) 10px,
                  rgba(255,255,255,0.1) 20px
                )`
              }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="font-serif text-3xl mb-2">Authentic Ajrak Patterns</h3>
                <p className="text-indigo-200">Traditional Block Printing Artistry</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-stone-100 rounded-full mb-4 text-stone-600">
                  {highlight.icon}
                </div>
                <h3 className="mb-2 text-stone-800">{highlight.title}</h3>
                <p className="text-sm text-stone-600">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Color Variations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-serif text-2xl mb-8 text-stone-800">Available Color Variations</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {fabricPatterns.map((pattern, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-stone-700 border-stone-300 hover:bg-stone-50 transition-colors"
              >
                {pattern}
              </Badge>
            ))}
          </div>
          
          <div className="bg-stone-50 rounded-2xl p-8">
            <h4 className="text-lg mb-4 text-stone-800">Craftsmanship Promise</h4>
            <p className="text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Each Ajrak fabric is meticulously handcrafted using traditional block printing techniques 
              passed down through generations. Our artisans use natural indigo and madder dyes, 
              creating unique pieces that celebrate the authentic beauty of this ancient craft. 
              Every meter of fabric undergoes multiple dyeing processes, ensuring rich colors 
              and patterns that tell the story of our cultural heritage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}