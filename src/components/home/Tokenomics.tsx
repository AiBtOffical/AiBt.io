import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Section from '../common/Section';

const tokenAllocation = [
  { name: 'Public Sale', percentage: 40, color: 'bg-primary-500' },
  { name: 'Team & Advisors', percentage: 15, color: 'bg-secondary-500' },
  { name: 'Development', percentage: 20, color: 'bg-accent-500' },
  { name: 'Ecosystem', percentage: 15, color: 'bg-success-500' },
  { name: 'Marketing', percentage: 10, color: 'bg-warning-500' }
];

const feeAllocation = [
  { name: 'Technical Operations & Community', percentage: 0.5, description: 'Technical operations and community incentives' },
  { name: 'Liquidity Pool Mining', percentage: 3, description: 'Liquidity pool mining rewards' }
];

const Tokenomics: React.FC = () => {
  return (
    <Section
      id="tokenomics-preview"
      title="WIN Token Economics"
      subtitle="Powering the AiBT ecosystem with utility, governance, and rewards"
      dark={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mr-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Token Allocation</h3>
            </div>
            
            <div className="space-y-4">
              {tokenAllocation.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm font-medium">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2.5">
                    <motion.div 
                      className={`h-2.5 rounded-full ${item.color}`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-dark-900 rounded-lg border border-dark-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-dark-400 text-sm">Total Supply</p>
                  <p className="text-xl font-semibold">1,000,000,000</p>
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Initial Circulating</p>
                  <p className="text-xl font-semibold">400,000,000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/tokenomics" className="inline-flex items-center text-primary-400 font-medium">
              <span>View complete tokenomics</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
            <h3 className="text-xl font-semibold mb-4">Trading Fee Allocation</h3>
            <div className="space-y-6">
              {feeAllocation.map((item, index) => (
                <div key={index} className="p-4 bg-dark-900 rounded-lg border border-dark-700">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{item.name}</h4>
                    <span className="text-xl font-semibold text-primary-400">{item.percentage}%</span>
                  </div>
                  <p className="text-sm text-dark-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
            <h3 className="text-xl font-semibold mb-4">WIN Token Benefits</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center mr-3">
                  <span className="text-primary-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Reduced Trading Fees</h4>
                  <p className="text-sm text-dark-300">Hold WIN tokens to enjoy up to 50% reduction in trading fees on the AiBT DEX platform.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center mr-3">
                  <span className="text-primary-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Governance Rights</h4>
                  <p className="text-sm text-dark-300">Participate in ecosystem decisions through voting with weighted influence based on token holdings.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center mr-3">
                  <span className="text-primary-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Staking Rewards</h4>
                  <p className="text-sm text-dark-300">Earn passive income by staking WIN tokens in various liquidity pools with variable APY.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900 flex items-center justify-center mr-3">
                  <span className="text-primary-400 text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Premium Features</h4>
                  <p className="text-sm text-dark-300">Access advanced trading algorithms and exclusive investment opportunities.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 rounded-2xl p-6 border border-primary-800/30">
            <h3 className="text-xl font-semibold mb-2">Mining Rewards</h3>
            <p className="text-dark-300 mb-4">Our unique proof-of-contribution system rewards users based on platform engagement and liquidity provision.</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-400">Average APY</p>
                <p className="text-2xl font-bold text-secondary-400">12.8%</p>
              </div>
              <Link to="/tokenomics#mining" className="btn btn-primary btn-sm">
                Start Earning
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Tokenomics;