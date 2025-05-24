import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart4, Coins, Workflow, BookOpen, ArrowRight } from 'lucide-react';
import Section from '../common/Section';

const products = [
  {
    id: 'newvestor',
    name: 'Newvestor',
    description: 'AI-powered investment assistant for beginners, providing personalized guidance and risk assessment.',
    icon: TrendingUp,
    color: 'from-primary-500 to-primary-700',
    path: '/products/newvestor'
  },
  {
    id: 'aladdin',
    name: 'Aladdin Strategy',
    description: 'Advanced algorithmic trading system leveraging AI to maximize returns in volatile markets.',
    icon: BarChart4,
    color: 'from-secondary-500 to-secondary-700',
    path: '/products/aladdin-strategy'
  },
  {
    id: 'win-token',
    name: 'WIN Token',
    description: 'Utility token powering the AiBT ecosystem with governance, staking, and transaction benefits.',
    icon: Coins,
    color: 'from-accent-500 to-accent-700',
    path: '/products/win-token'
  },
  {
    id: 'dex',
    name: 'AiBT DEX',
    description: 'Decentralized exchange with AI-optimized liquidity pools and minimal slippage.',
    icon: Workflow,
    color: 'from-primary-500 to-secondary-500',
    path: '/products/dex'
  },
  {
    id: 'classroom',
    name: 'Online Classroom',
    description: 'Interactive learning platform for blockchain and AI investment strategies.',
    icon: BookOpen,
    color: 'from-secondary-500 to-accent-500',
    path: '/products/classroom'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <Section
      id="products"
      title="Our Products"
      subtitle="Innovative solutions at the intersection of AI and blockchain technology"
      dark={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link to={product.path} className="block h-full">
              <div className="card h-full p-6 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${product.color}`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-dark-300 mb-4">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 flex items-center text-primary-400 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProducts;