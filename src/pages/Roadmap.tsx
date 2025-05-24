import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';

interface RoadmapItem {
  period: string;
  title: string;
  description: string;
  completed: boolean;
}

const roadmapItems: RoadmapItem[] = [
  {
    period: 'Q1 2025',
    title: 'Official Launch',
    description: 'Issuance of platform governance token WIN',
    completed: true
  },
  {
    period: 'Q1 2025',
    title: 'Core Development',
    description: 'Completion of core AI trading strategy development, initial platform launch',
    completed: true
  },
  {
    period: 'Q2 2025',
    title: 'Beta Release',
    description: 'Beta version release, strategy optimization, early community recruitment',
    completed: false
  },
  {
    period: 'Q2 2025',
    title: 'Cross-chain Integration',
    description: 'Cross-chain support, strategy diversification, launch of strategy competitions',
    completed: false
  },
  {
    period: 'Q3 2025',
    title: 'Platform Enhancement',
    description: 'Trading route optimization, smart risk control upgrade, insurance mechanism launch',
    completed: false
  },
  {
    period: 'Q4 2025',
    title: 'Advanced Features',
    description: 'Launch of advanced custom strategies and APIs, expansion of partnerships',
    completed: false
  },
  {
    period: 'H1 2026',
    title: 'Global Expansion',
    description: 'International market expansion, integration with more mainstream exchanges',
    completed: false
  },
  {
    period: 'H2 2026',
    title: 'Enterprise Solutions',
    description: 'Launch of institutional APIs, insurance bonds, and DeFi products',
    completed: false
  }
];

const Roadmap: React.FC = () => {
  return (
    <Layout>
      <Section
        title="Development Roadmap"
        subtitle="Our strategic journey towards revolutionizing AI-powered blockchain trading"
        className="pt-32"
      >
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-700 transform md:translate-x-[-0.5px]"></div>

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
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    item.completed 
                      ? 'bg-primary-500 border-primary-500' 
                      : 'bg-dark-800 border-dark-600'
                  }`}>
                    {item.completed 
                      ? <Check className="h-4 w-4 text-white" />
                      : <Clock className="h-4 w-4 text-dark-400" />
                    }
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/30 transition-all">
                    <span className={`text-sm font-semibold ${
                      item.completed ? 'text-primary-400' : 'text-dark-400'
                    }`}>
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                    <p className="text-dark-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Initiatives Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-24"
          >
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold mb-6">Future Initiatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-700">
                  <h4 className="font-semibold mb-3">Advanced AI Integration</h4>
                  <p className="text-dark-300">Enhanced machine learning algorithms for predictive analytics and automated trading strategies.</p>
                </div>
                <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-700">
                  <h4 className="font-semibold mb-3">Global Partnerships</h4>
                  <p className="text-dark-300">Strategic collaborations with major financial institutions and blockchain projects.</p>
                </div>
                <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-700">
                  <h4 className="font-semibold mb-3">Regulatory Compliance</h4>
                  <p className="text-dark-300">Expanding licenses and certifications for global market operations.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default Roadmap;