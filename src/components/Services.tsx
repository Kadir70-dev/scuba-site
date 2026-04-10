import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Building2, Users, Package, HandshakeIcon } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Buyer Connections",
      description: "Connect with verified international buyers seeking authentic Ajrak fabrics and traditional textiles for global markets"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Sample Services",
      description: "Professional sampling, quality control, and customization services for bulk orders and product development"
    },
    {
      icon: <HandshakeIcon className="w-6 h-6" />,
      title: "Production Support",
      description: "End-to-end production guidance from design conception to final product delivery and market readiness"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborations",
      description: "Strategic partnerships and joint ventures with brands and innovators in the textile and fashion industry"
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            Our Services
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions bridging traditional craftsmanship with modern market demands 
            through expert services and authentic Ajrak textile offerings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-lg flex items-center justify-center text-stone-600 mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-stone-800">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}