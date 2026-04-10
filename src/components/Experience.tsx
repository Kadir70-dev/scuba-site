import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2020 - Present",
      title: "Founder & CEO",
      company: "Miraal by Saima Shaikh",
      location: "Mumbai, India",
      description: "Founded and built a sustainable textile brand connecting traditional Ajrak artisans with global fashion markets. Established international trade relationships and developed export capabilities.",
      achievements: ["Built international client base", "Sustainable supply chain", "Artisan partnerships"]
    },
    {
      year: "2019 - 2020",
      title: "Business Development Associate",
      company: "AlHub Innovation Center",
      location: "Dubai, UAE",
      description: "Gained valuable international business experience in the UAE's dynamic startup ecosystem. Developed skills in global market analysis and cross-cultural business relationships.",
      achievements: ["International exposure", "Cross-cultural business skills", "Market analysis expertise"]
    },
    {
      year: "2018 - 2019",
      title: "Textile Analyst",
      company: "International Apparel & Textile Fair",
      location: "Mumbai, India",
      description: "Specialized in textile market trends and buyer-seller connections. Built extensive network in the Indian textile industry and gained deep understanding of global fashion demands.",
      achievements: ["Industry network building", "Market trend analysis", "Buyer-seller connections"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            Professional Journey
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            A timeline of experience that shaped our understanding of global textile trade 
            and sustainable fashion entrepreneurship.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-stone-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-stone-400 rounded-full border-4 border-white z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-stone-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.year}</span>
                    </div>
                    
                    <h3 className="text-xl text-stone-800 mb-1">{exp.title}</h3>
                    <h4 className="text-stone-600 mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-stone-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-stone-200 text-stone-700 text-xs rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}