import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Vocation school",
      school: "Industrial IT Specialist",
      mascot: "📘",
      year: "2019-2022",
      achievements: ["GPA: 4.2", "Subject: Information Technology"],
      skills: [
        "Computer Hardware & Assembly",
        "Office Software Automation",
        "IT Fundamentals",
        "IT Project Coordination",
        "Cybersecurity",
        "Linux/BSD System Administration",
        "Windows System Administration",
        "Operating System Fundamentals",
        "Cloud Computing (Cloud Services)",
        "Web Development (HTML, CSS, JavaScript)",
        "Mobile App Development",
        "Database Management (SQL)",
        "Application Server Configuration",
        "Programming Basics (C#, Python, etc.)",
        "Advanced Programming",
        "Script Languages (e.g. Bash, PowerShell)",
        "Robotics",
        "AI Tool Utilization",
        "Virtualization & Server Environments",
        "Production Automation Systems",
        "Industrial IT Security & Maintenance",
        "Computer Networks & Network Protocols",
        "Social Studies & Communication",
        "Business IT & Organizational Tools",
        "Adaptability in Changing Work Environments",
        "Mathematics for IT",
        "Natural Sciences (Physics, Chemistry, Biology)",
        "Creative Design (Web & UI Prototyping)",
        "Language Proficiency (English B2, Russian B1)",
        "Practical Internship Experience",
        "National Qualification: Junior IT Systems Specialist",
      ],
      description:
        "IT systems, industrial networks, telecommunications, and automation technologies.",
    },
    {
      degree: "Web Technologies",
      school: "Estonian Entrepreneurship University of Applied Sciences",
      mascot: "📗",
      year: "2022-2025",
      achievements: ["GPA: 3.9", "Subject: Arts"],
      skills: [
        "HTML5",
        "Software Testing",
        "Introduction to Information Technology",
        "Web Page Analysis and Design",
        "Prototyping",
        "IT Mathematics & Physical Fundamentals",
        "Web Technologies",
        "Mobile App Programming",
        "IT Infrastructure Planning",
        "Web Programming",
        "Information Security",
        "Object-Oriented Analysis, Design & Programming",
        "Databases and SQL",
        "Programming Fundamentals",
        "Computer Architecture and Networks",
        "Collaborative Project Work (Team-based IT Projects)",
      ],
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
