import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className = '',
  children,
  fullWidth = false,
  dark = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-dark-900' : 'bg-dark-950'} ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  variants={itemVariants}
                >
                  {title}
                </motion.h2>
              )}
              {subtitle && (
                <motion.p 
                  className="text-lg text-dark-300 max-w-3xl mx-auto"
                  variants={itemVariants}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          )}
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;