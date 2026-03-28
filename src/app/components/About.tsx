import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: <Award size={32} />,
      title: 'Quality Focused',
      description: 'Delivering pixel-perfect designs with attention to detail',
    },
    {
      icon: <Users size={32} />,
      title: 'User-Centered',
      description: 'Creating experiences that users love and understand',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovative',
      description: 'Bringing creative solutions to complex problems',
    },
    {
      icon: <Target size={32} />,
      title: 'Goal-Oriented',
      description: 'Aligning design decisions with business objectives',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#0070ad] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate UX/UI Designer
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a dedicated UX/UI designer with a passion for creating intuitive and 
              engaging digital experiences. My approach combines user research, creative 
              design thinking, and technical expertise to deliver solutions that not only 
              look great but also solve real user problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With experience in the full design process from empathizing with users to 
              prototyping and testing, I bring a comprehensive skill set to every project. 
              I believe great design is invisible – it just works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0070ad] to-[#005a8a] p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-[#0070ad] rounded-full" />
                    <span className="text-gray-600">Design Thinking</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-1 bg-[#0070ad] rounded-full" />
                    <span className="text-gray-600">User Research</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-1 bg-[#0070ad] rounded-full" />
                    <span className="text-gray-600">Prototyping</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-1 bg-[#0070ad] rounded-full" />
                    <span className="text-gray-600">Visual Design</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-[#0070ad] hover:text-white transition-all duration-300 group shadow-md hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#0070ad] mb-4 group-hover:bg-[#005a8a] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-sm opacity-90">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
