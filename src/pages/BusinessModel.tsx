import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Check, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import { Link } from 'react-router-dom'; // 👈 For internal navigation

const BusinessModel: React.FC = () => {
  return (
      <Layout>
        <Section
            title="Business Model"
            subtitle="Transparent fee structure designed for sustainable growth and value creation"
            className="pt-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Trading Fees Section */}
            {/* ...unchanged... */}

            {/* Insurance Service Fees Section */}
            {/* ...unchanged... */}
          </div>

          {/* ✅ Additional Information */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
          >
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold mb-6">Fee Structure Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-700">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-400" /> Transparency
                  </h4>
                  <p className="text-dark-300">Clear and straightforward fee structure with no hidden charges</p>
                </div>
                <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-700">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-400" /> Competitive Rates
                  </h4>
                  <p className="text-dark-300">Market-leading fees designed to maximize trader profitability</p>
                </div>
                <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-700">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-400" /> Flexible Options
                  </h4>
                  <p className="text-dark-300">Customizable insurance coverage to suit different trading styles</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🔗 Optional Link back to Home */}
          <div className="text-center mt-12">
            <Link
                to="/"
                className="inline-block px-6 py-2 rounded-full text-primary-400 hover:text-white border border-primary-500 hover:bg-primary-600 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </Section>
      </Layout>
  );
};

export default BusinessModel;
