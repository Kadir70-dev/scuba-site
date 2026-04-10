import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Instagram, Globe, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "saima@miraal.com",
      href: "mailto:saima@miraal.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Locations",
      value: "Mumbai, India | Dubai, UAE",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "#"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      href: "#"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            Let's Connect
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Ready to explore the world of authentic Ajrak fabrics or discuss your textile needs? 
            Let's connect and create something beautiful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-stone-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-stone-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-stone-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-stone-800 hover:bg-stone-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl mb-6 text-stone-800">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-stone-800 hover:text-stone-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-stone-800">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-stone-800">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg mb-3 text-stone-800">Business Hours</h4>
              <div className="space-y-2 text-stone-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 9:00 AM - 2:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-stone-100 to-amber-50 rounded-lg p-6">
              <h4 className="text-lg mb-3 text-stone-800">Ready to Start?</h4>
              <p className="text-stone-600 mb-4">
                Whether you're a fashion entrepreneur looking for authentic fabrics or a textile 
                business seeking export opportunities, we're here to help you succeed.
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('ajrak-fabrics');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline" 
                className="border-stone-300 text-stone-700 hover:bg-white"
              >
                Explore Our Fabrics
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}