import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Palette, Layout, Code, Sparkles, Users, TrendingUp } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const designProcess = [
    { name: 'Empathise', color: 'bg-blue-500' },
    { name: 'Define', color: 'bg-indigo-500' },
    { name: 'Ideate', color: 'bg-purple-500' },
    { name: 'Prototype', color: 'bg-pink-500' },
    { name: 'Test', color: 'bg-red-500' },
  ];

  const skills = [
    {
      icon: <Palette size={28} />,
      title: 'Visual Design',
      items: ['UI Design', 'Brand Identity', 'Design Systems', 'Color Theory'],
    },
    {
      icon: <Layout size={28} />,
      title: 'UX Design',
      items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
      icon: <Code size={28} />,
      title: 'Tools & Tech',
      items: ['Figma', 'Adobe XD', 'Sketch', 'HTML/CSS'],
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Interaction',
      items: ['Motion Design', 'Micro-interactions', 'Animation', 'Transitions'],
    },
    {
      icon: <Users size={28} />,
      title: 'Collaboration',
      items: ['Agile/Scrum', 'Cross-functional', 'Workshops', 'Presentations'],
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Strategy',
      items: ['UX Strategy', 'Analytics', 'A/B Testing', 'Design Thinking'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#0070ad] mx-auto rounded-full" />
        </motion.div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Design Process
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {designProcess.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className={`${step.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                  {step.name}
                </div>
                {index < designProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-full -translate-y-1/2 w-4 h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0070ad]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#0070ad]/10 flex items-center justify-center text-[#0070ad]">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{skill.title}</h4>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0070ad]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
