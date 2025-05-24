import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Blocks, LineChart, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-dark-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4338ca22,transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#10b98122,transparent_40%)]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGg0djFoLTR2LTF6TTM0IDBoMXY0aC0xVjB6TTAgMzRoNHYxSDB2LTF6TTAgMGg0djFIMFYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/40 text-primary-400 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2"></span>
              Revolutionizing DeFi with AI
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">AI-Powered</span> Blockchain Solutions for the Future
            </h1>
            
            <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-2xl">
              AiBT.io brings together cutting-edge artificial intelligence and blockchain technology to create a secure, efficient, and revolutionary ecosystem for investors and businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/investment" className="btn btn-outline">
                Investment Opportunities
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-900/30 flex items-center justify-center">
                  <Blocks className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium">Blockchain Secure</h4>
                  <p className="text-sm text-dark-400">Decentralized security</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-900/30 flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-secondary-400" />
                </div>
                <div>
                  <h4 className="font-medium">AI Trading</h4>
                  <p className="text-sm text-dark-400">Smart investment</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-900/30 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-medium">Protected Assets</h4>
                  <p className="text-sm text-dark-400">Risk management</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary-500/10 rounded-full blur-xl"></div>
              
              {/* Main image/graphic container */}
              <div className="relative z-10 bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl border border-dark-700 p-1">
                <div className="bg-dark-900 rounded-xl overflow-hidden aspect-square md:aspect-[4/3] relative glow">
                  {/* Abstract visualization representing AI + Blockchain */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4338ca22,transparent_70%)]"></div>
                  <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-8 gap-0.5 p-4">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i}
                        className={`
                          ${Math.random() > 0.7 ? 'bg-primary-500/20' : 'bg-dark-800/50'} 
                          ${Math.random() > 0.9 ? 'animate-pulse' : ''} 
                          rounded-sm
                        `}
                      />
                    ))}
                  </div>

                  {/* Central connecting nodes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute top-0 left-0 w-full h-full animate-pulse">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-500/20 rounded-full blur-lg"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500/30 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary-500 rounded-full"></div>
                      
                      {/* Connection lines */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-primary-500/40"
                          style={{ 
                            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`, 
                            opacity: Math.random() * 0.5 + 0.3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-dark-800 rounded-lg p-3 shadow-lg border border-dark-700 z-20 backdrop-blur-sm bg-opacity-80">
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center">
                    <Blocks className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-400">Total Value Locked</p>
                    <p className="text-lg font-semibold">$127.8M</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 md:-right-12 bg-dark-800 rounded-lg p-3 shadow-lg border border-dark-700 z-20 backdrop-blur-sm bg-opacity-80">
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 rounded-full bg-secondary-900/50 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-secondary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-400">Performance</p>
                    <p className="text-lg font-semibold text-success-400">+23.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;