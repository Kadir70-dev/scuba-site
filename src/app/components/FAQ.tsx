import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'Do I need prior experience to start diving?',
      answer: 'Not at all! Our Open Water course is designed for complete beginners. We start with pool training and gradually progress to open water dives under close supervision.',
    },
    {
      question: 'What is the minimum age requirement?',
      answer: 'The minimum age for scuba diving certification is 10 years old for junior certification and 15 years old for full certification. We also offer supervised diving experiences for children as young as 8.',
    },
    {
      question: 'How long does certification take?',
      answer: 'Our Open Water certification typically takes 3-4 days to complete. This includes theory sessions, pool training, and open water dives. We offer flexible scheduling to accommodate your availability.',
    },
    {
      question: 'What equipment do I need to bring?',
      answer: 'We provide all necessary diving equipment including wetsuit, BCD, regulator, mask, fins, and tanks. You only need to bring swimwear, towel, and sunscreen. However, if you have your own equipment, you are welcome to use it.',
    },
    {
      question: 'Is diving safe?',
      answer: 'Yes! Scuba diving is very safe when done with proper training and equipment. We maintain the highest safety standards, use premium equipment, and our instructors are all certified professionals with years of experience.',
    },
    {
      question: 'Can I dive if I wear glasses or contact lenses?',
      answer: 'Yes! You can wear contact lenses while diving, or we can provide prescription masks. We accommodate all visual needs to ensure you have the best underwater experience.',
    },
    {
      question: 'What happens if weather conditions are bad?',
      answer: 'Safety is our top priority. If weather conditions are unsuitable for diving, we will reschedule your dive at no additional cost. We monitor weather conditions closely and only dive when conditions are safe.',
    },
    {
      question: 'Do you offer group discounts?',
      answer: 'Yes! We offer special rates for groups of 4 or more people. Contact us for a customized quote for your group diving experience or corporate team building event.',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#00d4ff]/20 mb-6">
            <span className="text-[#00d4ff] text-sm font-medium tracking-wider uppercase">
              Questions & Answers
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to know about diving with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-white/10 rounded-xl backdrop-blur-xl bg-white/5 px-6 hover:border-[#00d4ff]/50 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#00d4ff] transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
