import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Working with Miraal has been transformative for my brand. The authentic Ajrak fabrics and Saima's expertise in global fashion trade helped us expand to international markets seamlessly.",
      rating: 5
    },
    {
      content: "Exceptional quality and reliability. Saima's deep understanding of both traditional craftsmanship and modern market demands makes Miraal our preferred partner for premium textiles.",
      rating: 5
    },
    {
      content: "The collaboration services offered by Miraal opened doors we never knew existed. Their network and expertise in sustainable fashion trade is unmatched in the industry.",
      rating: 5
    },
    {
      content: "From sampling to final delivery, Miraal's production support has been invaluable. They understand the nuances of international textile trade like no other.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            What Our Clients Say
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by fashion entrepreneurs, textile buyers, and designers worldwide 
            for authentic craftsmanship and exceptional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-stone-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-stone-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}