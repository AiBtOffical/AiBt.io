import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Section from '../common/Section';

const roadmapItems = [
  {
    period: 'Q1 2025',
    title: 'Platform Launch',
    description: 'Initial release of AiBT ecosystem with core functionality.',
    completed: true,
    items: [
      'WIN Token public sale',
      'Newvestor beta release',
      'Basic trading algorithms'
    ]
  },
  {
    period: 'Q2 2025',
    title: 'Expansion Phase',
    description: 'Growing the ecosystem with enhanced features and partnerships.',
    completed: false,
    items: [
      'AiBT DEX launch',
      'Advanced Aladdin strategies',
      'First strategic partnerships'
    ]
  },
  {
    period: 'Q3-Q4 2025',
    title: 'Optimization',
    description: 'Fine-tuning the platform based on user feedback and performance data.',
    completed: false,
    items: [
      'Cross-chain integration',
      'Mobile app release',
      'Governance implementation'
    ]
  },
  {
    period: 'H1 2026',
    title: 'Global Scaling',
    description: 'Expanding to new markets and enhancing technological capabilities.',
    completed: false,
    items: [
      'Enterprise solutions',
      'Institutional partnerships',
      'Advanced AI integration'
    ]
  }
];

const Roadmap: React.FC = () => {
  return (
    <Section
      id="roadmap-preview"
      title="Our Roadmap"
      subtitle="Strategic milestones for AiBT's growth and development"
      dark={true}
    >
      <div className="mt-12 relative">
        {/* Connecting line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-700 transform md:translate-x-[-0.5px] hidden md:block"></div>
        
        <div className="space-y-12">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
                <div className={`w-5 h-5 rounded-full border-2 ${item.completed ? 'bg-primary-500 border-primary-500' : 'bg-dark-800 border-dark-600'}`}>
                  {item.completed && <Check className="h-3 w-3 text-white" />}
                </div>
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="md:hidden mb-3 flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${item.completed ? 'bg-primary-500 border-primary-500' : 'bg-dark-800 border-dark-600'}`}>
                    {item.completed && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className="text-sm font-semibold text-primary-400">{item.period}</span>
                </div>
                
                <div className={`card p-6 md:inline-block ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <div className="hidden md:block mb-2">
                    <span className="text-sm font-semibold text-primary-400">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-dark-300 mb-4">{item.description}</p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {item.items.map((listItem, i) => (
                      <li key={i} className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className={`w-4 h-4 rounded-full bg-dark-700 flex-shrink-0 flex items-center justify-center mr-2 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                        </div>
                        <span className={`text-sm ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-0'}`}>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/roadmap" className="btn btn-primary">
            <span>View Complete Roadmap</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;