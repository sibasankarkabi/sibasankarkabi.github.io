import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgInro11 from "figma:asset/4a1c9be4ac89fe63a1cef25684fdf5551a6bd50d.png";
import imgMacBookPro14111 from "figma:asset/6b994cf4dab203f87570b0fbdc659c215de5b3d4.png";
import imgHomeDesktop1 from "figma:asset/298299920895a9a86a3b0f559826d8df9b8f1d84.png";
import imgDesktop81 from "figma:asset/41c448ad6108ef63b0d121aea51f48ff7f9dd152.png";
import imgIPhone12Pro from "figma:asset/ddfb817933135785e5769cfc2ac51056e6a566db.png";
import imgCustomerJourneyMap1 from "figma:asset/09a89de2b8d680635f15367001b0bbe809c4f18e.png";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization. Implemented a new design system and improved checkout flow.',
      image: imgHomeDesktop1,
      tags: ['UX Research', 'UI Design', 'Prototyping'],
      link: 'https://sankarkabi.co.in/',
      category: 'Web Design',
    },
    {
      title: 'Mobile Banking App',
      description: 'Designed an intuitive mobile banking application with focus on security and ease of use. Created user flows for complex financial transactions.',
      image: imgIPhone12Pro,
      tags: ['Mobile Design', 'User Testing', 'Figma'],
      link: 'https://sankarkabi.co.in/',
      category: 'Mobile App',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Developed a comprehensive analytics dashboard for data visualization. Focused on making complex data accessible and actionable.',
      image: imgDesktop81,
      tags: ['Data Viz', 'Dashboard', 'UI Design'],
      link: 'https://sankarkabi.co.in/',
      category: 'Web App',
    },
    {
      title: 'Customer Journey Mapping',
      description: 'Created detailed customer journey maps to identify pain points and opportunities for improvement in the user experience.',
      image: imgCustomerJourneyMap1,
      tags: ['UX Research', 'Journey Maps', 'Strategy'],
      link: 'https://sankarkabi.co.in/',
      category: 'Research',
    },
    {
      title: 'Food Delivery App',
      description: 'Design concept for a modern food delivery application with focus on quick ordering and real-time tracking features.',
      image: imgInro11,
      tags: ['Mobile UI', 'Interaction Design', 'Prototyping'],
      link: 'https://sankarkabi.co.in/',
      category: 'Mobile App',
    },
    {
      title: 'SaaS Product Design',
      description: 'Enterprise SaaS platform design with comprehensive design system. Focused on scalability and consistent user experience.',
      image: imgMacBookPro14111,
      tags: ['Design System', 'Enterprise', 'Web Design'],
      link: 'https://sankarkabi.co.in/',
      category: 'Web Design',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#0070ad] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my approach to solving design challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[#0070ad] text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0070ad] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#0070ad] hover:text-[#005a8a] transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://sankarkabi.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#0070ad] text-white rounded-full hover:bg-[#005a8a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
