import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Percent, Lock, PieChart } from 'lucide-react';
import Section from '../common/Section';

const BusinessModel: React.FC = () => {
  return (
    <Section
      id="business-model"
      title="Business Model"
      subtitle="Transparent fee structure designed for sustainable growth and value creation"
      dark={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mr-4">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Trading Fees</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-dark-700 rounded-lg">
                <div>
                  <h4 className="font-medium">Standard Trading</h4>
                  <p className="text-sm text-dark-300">Basic fee for all users</p>
                </div>
                <div className="text-xl font-semibold text-accent-400">0.30%</div>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-dark-700 rounded-lg">
                <div>
                  <h4 className="font-medium">WIN Token Holders</h4>
                  <p className="text-sm text-dark-300">Discounted fee for token holders</p>
                </div>
                <div className="text-xl font-semibold text-accent-400">0.15%</div>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-dark-700 rounded-lg">
                <div>
                  <h4 className="font-medium">Institutional</h4>
                  <p className="text-sm text-dark-300">For qualified institutions</p>
                </div>
                <div className="text-xl font-semibold text-accent-400">0.10%</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-900 rounded-lg border border-dark-700">
              <div className="flex items-center">
                <Percent className="h-5 w-5 text-primary-400 mr-3" />
                <p className="text-sm">70% of all trading fees are distributed to WIN token stakers as rewards</p>
              </div>
            </div>
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
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mr-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Insurance & Protection</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-dark-700 rounded-lg">
                <div>
                  <h4 className="font-medium">Basic Protection</h4>
                  <p className="text-sm text-dark-300">Standard account protection</p>
                </div>
                <div className="text-xl font-semibold text-success-400">Free</div>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-dark-700 rounded-lg">
                <div>
                  <h4 className="font-medium">Trade Insurance</h4>
                  <p className="text-sm text-dark-300">Protection against trade errors</p>
                </div>
                <div className="text-xl font-semibold text-success-400">0.05%</div>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-dark-700 rounded-lg">
                <div>
                  <h4 className="font-medium">Premium Coverage</h4>
                  <p className="text-sm text-dark-300">Full portfolio protection</p>
                </div>
                <div className="text-xl font-semibold text-success-400">0.12%</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-900 rounded-lg border border-dark-700">
              <div className="flex items-center">
                <PieChart className="h-5 w-5 text-secondary-400 mr-3" />
                <p className="text-sm">90% of insurance fees are stored in a dedicated safety fund for user protection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Revenue Allocation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-900/50 p-5 rounded-xl border border-dark-700"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-900/50 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-800/80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-400">70%</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Community Rewards</h4>
                <p className="text-sm text-dark-300">Distributed to token holders, liquidity providers, and platform contributors</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-900/50 p-5 rounded-xl border border-dark-700"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary-900/50 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-800/80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary-400">20%</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Platform Development</h4>
                <p className="text-sm text-dark-300">Continuous improvement of technology, security, and features</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-900/50 p-5 rounded-xl border border-dark-700"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent-900/50 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-800/80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-400">10%</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Operational Costs</h4>
                <p className="text-sm text-dark-300">Team salaries, marketing, legal compliance, and business expenses</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BusinessModel;