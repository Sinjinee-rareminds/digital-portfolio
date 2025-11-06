import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Briefcase, Award, TrendingUp, Star, Github, ExternalLink, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { Student, AnimationType } from '../../../types/student';

interface InfographicDashboardProps {
  student: Student;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  animation?: AnimationType;
}

const InfographicDashboard: React.FC<InfographicDashboardProps> = ({ 
  student, 
  primaryColor, 
  secondaryColor, 
  accentColor 
}) => {
  const [countedProjects, setCountedProjects] = useState(0);
  const [countedSkills, setCountedSkills] = useState(0);
  const [countedAchievements, setCountedAchievements] = useState(0);

  const projectCount = student.profile.projects?.length || 0;
  const skillCount = student.profile.skills?.length || 0;
  const achievementCount = student.profile.achievements?.length || 0;

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCountedProjects(Math.floor(projectCount * progress));
      setCountedSkills(Math.floor(skillCount * progress));
      setCountedAchievements(Math.floor(achievementCount * progress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountedProjects(projectCount);
        setCountedSkills(skillCount);
        setCountedAchievements(achievementCount);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [projectCount, skillCount, achievementCount]);

  // Skills radar chart simulation (simplified visual representation)
  const topSkills = student.profile.skills?.slice(0, 6) || [];
  const skillLevelMap: { [key: string]: number } = {
    'Beginner': 25,
    'Intermediate': 50,
    'Advanced': 75,
    'Expert': 100
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Stats Banner */}
      <div className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                src={student.profile.profileImage || '/api/placeholder/100/100'}
                alt={student.name || 'Profile'}
                className="w-20 h-20 rounded-full object-cover border-4"
                style={{ borderColor: primaryColor }}
              />
              <div>
                <h1 className="text-3xl font-bold dark:text-white" style={{ color: secondaryColor }}>
                  {student.name || student.profile.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">{student.branch_field}</p>
              </div>
            </div>

            {/* Stats Counter */}
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold" style={{ color: primaryColor }}>
                  {countedProjects}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold" style={{ color: accentColor }}>
                  {countedSkills}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold" style={{ color: secondaryColor }}>
                  {countedAchievements}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Skills Radar & Contact */}
          <div className="space-y-6">
            {/* Skills Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Code className="w-6 h-6" style={{ color: primaryColor }} />
                <h2 className="text-xl font-bold dark:text-white">Skills Proficiency</h2>
              </div>

              <div className="space-y-4">
                {topSkills.map((skill, index) => {
                  const percentage = skillLevelMap[skill.level] || 50;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full rounded-full"
                          style={{ 
                            background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4 dark:text-white">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4" style={{ color: primaryColor }} />
                  <span className="dark:text-gray-300">{student.email}</span>
                </div>
                {student.contact_number && (
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                    <span className="dark:text-gray-300">{student.contact_number}</span>
                  </div>
                )}
                {student.district_name && (
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="w-4 h-4" style={{ color: primaryColor }} />
                    <span className="dark:text-gray-300">{student.district_name}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Middle Column - Education Timeline & Projects */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education Timeline */}
            {student.profile.education && student.profile.education.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <GraduationCap className="w-6 h-6" style={{ color: accentColor }} />
                  <h2 className="text-xl font-bold dark:text-white">Education Timeline</h2>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b" style={{
                    background: `linear-gradient(to bottom, ${primaryColor}, ${accentColor})`
                  }} />

                  <div className="space-y-6">
                    {student.profile.education.map((edu, index) => (
                      <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="relative pl-12"
                      >
                        <div 
                          className="absolute left-0 top-2 w-8 h-8 rounded-full border-4 flex items-center justify-center bg-white dark:bg-gray-800"
                          style={{ borderColor: primaryColor }}
                        >
                          <GraduationCap className="w-4 h-4" style={{ color: primaryColor }} />
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                          <h3 className="font-bold text-lg dark:text-white">{edu.degree}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{edu.field}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                          <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                          </div>
                          {edu.grade && (
                            <div className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium" style={{
                              backgroundColor: `${accentColor}20`,
                              color: accentColor
                            }}>
                              Grade: {edu.grade}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Projects Grid */}
            {student.profile.projects && student.profile.projects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Briefcase className="w-6 h-6" style={{ color: secondaryColor }} />
                  <h2 className="text-xl font-bold dark:text-white">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {student.profile.projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-current transition-all"
                      style={{ borderColor: `${primaryColor}00` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = primaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '';
                      }}
                    >
                      {/* Hover Metrics Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10">
                        <div className="flex space-x-4 text-white text-xs">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{project.technologies.length} tech</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-bold mb-2 dark:text-white">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 rounded"
                              style={{
                                backgroundColor: `${accentColor}20`,
                                color: accentColor
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs flex items-center space-x-1 hover:underline"
                              style={{ color: primaryColor }}
                            >
                              <Github className="w-3 h-3" />
                              <span>Code</span>
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs flex items-center space-x-1 hover:underline"
                              style={{ color: primaryColor }}
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Achievements Badge Carousel */}
            {student.profile.achievements && student.profile.achievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Award className="w-6 h-6" style={{ color: accentColor }} />
                  <h2 className="text-xl font-bold dark:text-white">Achievements</h2>
                </div>

                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin">
                  {student.profile.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, rotate: -10 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex-shrink-0 w-64 p-4 rounded-lg border-2 relative"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}10, ${accentColor}10)`,
                        borderColor: accentColor
                      }}
                    >
                      <Award className="w-8 h-8 mb-2" style={{ color: accentColor }} />
                      <h3 className="font-bold mb-1 dark:text-white">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs" style={{ color: primaryColor }}>{achievement.date}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicDashboard;
