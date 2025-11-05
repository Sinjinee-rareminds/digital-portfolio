import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Code } from 'lucide-react';
import { Student, AnimationType } from '../../../types/student';

interface ClassicLayoutProps {
  student: Student;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  animation: AnimationType;
}

const ClassicLayout: React.FC<ClassicLayoutProps> = ({ 
  student, 
  primaryColor, 
  secondaryColor, 
  accentColor, 
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
      {/* Header Section - Classic Style */}
      <motion.section 
        className="border-b-4"
        style={{ borderColor: primaryColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              className={`${getAnimationClass(animation)} mb-8`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={student.profile.profileImage || '/api/placeholder/150/150'}
                alt={student.name || 'Profile'}
                className="w-32 h-32 rounded-full object-cover border-4 mx-auto shadow-lg"
                style={{ borderColor: primaryColor }}
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl font-serif font-bold mb-2 text-gray-900">
                {student.name || student.profile.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {student.branch_field}
              </p>
              <p className="text-lg text-gray-500 mb-6">
                {student.university}
              </p>
              
              {student.profile.bio && (
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                  {student.profile.bio}
                </p>
              )}
              
              <div className="flex justify-center space-x-6">
                {student.github_link && (
                  <a href={student.github_link} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {student.linkedin_link && (
                  <a href={student.linkedin_link} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {student.twitter_link && (
                  <a href={student.twitter_link} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                <a href={`mailto:${student.email}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="py-8 bg-gray-50 border-b"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <Phone className="w-4 h-4" style={{ color: primaryColor }} />
              <span>{student.contact_number}</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <Mail className="w-4 h-4" style={{ color: primaryColor }} />
              <span>{student.email}</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
              <span>{student.district_name}</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Skills Section */}
            {student.profile.skills && student.profile.skills.length > 0 && (
              <motion.section 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold mb-6 pb-2 border-b-2"
                  style={{ borderColor: primaryColor, color: secondaryColor }}
                >
                  Skills
                </motion.h2>
                <div className="space-y-4">
                  {student.profile.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="border-l-4 pl-4"
                      style={{ borderColor: accentColor }}
                    >
                      <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                      <p className="text-sm text-gray-600">{skill.level}</p>
                      {skill.category && (
                        <p className="text-xs text-gray-500">{skill.category}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Languages */}
            {student.profile.languages && student.profile.languages.length > 0 && (
              <motion.section 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold mb-6 pb-2 border-b-2"
                  style={{ borderColor: primaryColor, color: secondaryColor }}
                >
                  Languages
                </motion.h2>
                <div className="space-y-3">
                  {student.profile.languages.map((language, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{language.name}</span>
                      <span className="text-sm text-gray-600">{language.proficiency}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Certifications */}
            {student.profile.certifications && student.profile.certifications.length > 0 && (
              <motion.section 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold mb-6 pb-2 border-b-2"
                  style={{ borderColor: primaryColor, color: secondaryColor }}
                >
                  Certifications
                </motion.h2>
                <div className="space-y-4">
                  {student.profile.certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      variants={itemVariants}
                      className="border-l-4 pl-4"
                      style={{ borderColor: accentColor }}
                    >
                      <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Experience Section */}
            {student.profile.experience && student.profile.experience.length > 0 && (
              <motion.section 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold mb-6 pb-2 border-b-2"
                  style={{ borderColor: primaryColor, color: secondaryColor }}
                >
                  Professional Experience
                </motion.h2>
                <div className="space-y-8">
                  {student.profile.experience.map((exp) => (
                    <motion.div
                      key={exp.id}
                      variants={itemVariants}
                      className="relative pl-8 border-l-2 border-gray-200"
                    >
                      <div 
                        className="absolute -left-2 w-4 h-4 rounded-full border-2 bg-white"
                        style={{ borderColor: primaryColor }}
                      ></div>
                      <div className="mb-2">
                        <h3 className="text-xl font-bold" style={{ color: secondaryColor }}>
                          {exp.position}
                        </h3>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500">
                          {exp.startDate} - {exp.endDate || 'Present'}
                        </p>
                      </div>
                      <p className="text-gray-700 mb-3">{exp.description}</p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs rounded border"
                              style={{ borderColor: accentColor, color: accentColor }}
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

            {/* Education Section */}
            {student.profile.education && student.profile.education.length > 0 && (
              <motion.section 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold mb-6 pb-2 border-b-2"
                  style={{ borderColor: primaryColor, color: secondaryColor }}
                >
                  Education
                </motion.h2>
                <div className="space-y-6">
                  {student.profile.education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      variants={itemVariants}
                      className="relative pl-8 border-l-2 border-gray-200"
                    >
                      <div 
                        className="absolute -left-2 w-4 h-4 rounded-full border-2 bg-white"
                        style={{ borderColor: primaryColor }}
                      ></div>
                      <div className="mb-2">
                        <h3 className="text-xl font-bold" style={{ color: secondaryColor }}>
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 font-medium">{edu.field}</p>
                        <p className="text-gray-600">{edu.institution}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                          {edu.grade && <span>Grade: {edu.grade}</span>}
                        </div>
                      </div>
                      {edu.description && (
                        <p className="text-gray-700">{edu.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Projects Section */}
            {student.profile.projects && student.profile.projects.length > 0 && (
              <motion.section 
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold mb-6 pb-2 border-b-2"
                  style={{ borderColor: primaryColor, color: secondaryColor }}
                >
                  Projects
                </motion.h2>
                <div className="space-y-8">
                  {student.profile.projects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-bold mb-3" style={{ color: secondaryColor }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded border"
                            style={{ borderColor: accentColor, color: accentColor }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 text-sm">
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
                          >
                            <Code className="w-4 h-4" />
                            <span>Live Demo</span>
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

export default ClassicLayout;