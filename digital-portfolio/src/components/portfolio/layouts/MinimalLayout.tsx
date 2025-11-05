import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Calendar } from 'lucide-react';
import { Student, AnimationType } from '../../../types/student';

interface MinimalLayoutProps {
  student: Student;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  animation: AnimationType;
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({ 
  student, 
  animation 
}) => {
  const getAnimationClass = (animation: AnimationType) => {
    switch (animation) {
      case 'fade': return 'animate-fade-in';
      case 'slide': return 'animate-slide-in';
      case 'bounce': return 'animate-bounce-in';
      case 'float': return 'animate-float';
      default: return '';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Minimal */}
      <motion.section 
        className="py-20 border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
              className={`${getAnimationClass(animation)} flex-shrink-0`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={student.profile.profileImage || '/api/placeholder/120/120'}
                alt={student.name || 'Profile'}
                className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            
            <motion.div 
              className="flex-1"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl font-light text-gray-900 mb-2">
                {student.name || student.profile.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {student.branch_field}
              </p>
              <p className="text-gray-500 mb-6">
                {student.university} • {student.district_name}
              </p>
              
              {student.profile.bio && (
                <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl">
                  {student.profile.bio}
                </p>
              )}
              
              <div className="flex space-x-6">
                {student.github_link && (
                  <a 
                    href={student.github_link} 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {student.linkedin_link && (
                  <a 
                    href={student.linkedin_link} 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {student.twitter_link && (
                  <a 
                    href={student.twitter_link} 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                <a 
                  href={`mailto:${student.email}`} 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 max-w-4xl py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column - Skills & Info */}
          <div className="lg:col-span-1 space-y-12">
            {/* Contact */}
            <motion.section 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-6"
              >
                Contact
              </motion.h2>
              <div className="space-y-3 text-sm">
                <motion.div variants={itemVariants}>
                  <a href={`mailto:${student.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {student.email}
                  </a>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <span className="text-gray-600">{student.contact_number}</span>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills */}
            {student.profile.skills && student.profile.skills.length > 0 && (
              <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-6"
                >
                  Skills
                </motion.h2>
                <div className="space-y-4">
                  {student.profile.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="pb-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-900">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Languages */}
            {student.profile.languages && student.profile.languages.length > 0 && (
              <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-6"
                >
                  Languages
                </motion.h2>
                <div className="space-y-3">
                  {student.profile.languages.map((language, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-900">{language.name}</span>
                      <span className="text-gray-500">{language.proficiency}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Experience */}
            {student.profile.experience && student.profile.experience.length > 0 && (
              <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-8"
                >
                  Experience
                </motion.h2>
                <div className="space-y-8">
                  {student.profile.experience.map((exp) => (
                    <motion.div
                      key={exp.id}
                      variants={itemVariants}
                      className="pb-8 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                          <p className="text-gray-600">{exp.company}</p>
                        </div>
                        <div className="text-sm text-gray-500 text-right">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs text-gray-600 bg-gray-50 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Projects */}
            {student.profile.projects && student.profile.projects.length > 0 && (
              <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-8"
                >
                  Selected Projects
                </motion.h2>
                <div className="space-y-8">
                  {student.profile.projects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="pb-8 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                        <div className="flex space-x-3">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs text-gray-600 bg-gray-50 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Education */}
            {student.profile.education && student.profile.education.length > 0 && (
              <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-8"
                >
                  Education
                </motion.h2>
                <div className="space-y-6">
                  {student.profile.education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      variants={itemVariants}
                      className="pb-6 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.field}</p>
                          <p className="text-gray-600">{edu.institution}</p>
                        </div>
                        <div className="text-sm text-gray-500 text-right">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                          </div>
                          {edu.grade && (
                            <p className="mt-1">{edu.grade}</p>
                          )}
                        </div>
                      </div>
                      {edu.description && (
                        <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Certifications */}
            {student.profile.certifications && student.profile.certifications.length > 0 && (
              <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-8"
                >
                  Certifications
                </motion.h2>
                <div className="space-y-4">
                  {student.profile.certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={itemVariants}
                      className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">{cert.name}</h3>
                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                      </div>
                      <div className="text-sm text-gray-500 text-right">
                        <span>{cert.date}</span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 inline" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalLayout;