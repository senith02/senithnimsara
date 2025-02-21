import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ReviewOnScroll from '../ReviewOnScroll';

const Projects = () => {
  const projectData = [
    {
      title: 'Bus Booking App',
      description: 'Working on a bus booking app with a Google Map UI integration for location-based services and route visualization.',
      techStack: ['Java', 'Google Maps API', 'sqllite','Android Studio'],
      imageType: 'phone', // Add imageType property
      images: [
        'https://i.ibb.co/bgnsFS59/IMG-20250219-WA0005.jpg',
        'https://i.ibb.co/DH8b3vfY/IMG-20250219-WA0006.jpg',
        'https://i.ibb.co/1fcS2Y86/Whats-App-Image-2025-02-19-at-10-54-01-425fe1c3.jpg',
        'https://i.ibb.co/20r7FWGH/IMG-20250219-WA0003.jpg',
        'https://i.ibb.co/n8t6VQGN/IMG-20250219-WA0004.jpg'
      ],
      githubUrl: 'https://github.com/senith02/MAD_Project'
    },
    {
      title: 'Social Media App',
      description: 'A social media app built with security features for user authentication and data protection, developed as part of a software security project.',
      techStack: ['React', 'Node.js', 'Firebase'],
      imageType: 'desktop', // Add imageType property
      images: [
        'https://i.ibb.co/YBk8kTvK/ss1.png',
        'https://i.ibb.co/wFDwpk61/ss2.png',
        'https://i.ibb.co/67Ztp3vz/ss3.png',
        'https://i.ibb.co/Ld1dcGV4/ss4.png'
      ],
      githubUrl: 'https://github.com/senith02/SS-Project1'
    },
    {
      title: 'Image Editor Software',
      description: 'Developed an image editor with OpenCV and Tkinter, featuring face detection, censorship, and image enhancements.',
      techStack: ['OpenCV', 'Python', 'Tkinter'],
      images: ['/images/imageEditor1.png', '/images/imageEditor2.png'],
      githubUrl: 'https://github.com/senith02/Dip-project'
    },
    {
      title: 'Text Editor App',
      description: 'Created a text editor app with advanced features like back functionality using Queue and Stack data structures, and word sorting using sorting algorithms.',
      techStack: ['Java', 'Data Structures', 'Algorithms','stack','queue','tree'],
      imageType: 'desktop', // Added desktop type for proper sizing
      images: [
        'https://i.ibb.co/6cyvZGdp/1722963975905.jpg',
        'https://i.ibb.co/2YcZSvB2/1722963959029.jpg'
      ],
      githubUrl: 'https://github.com/senith02/Text-Editor'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <ReviewOnScroll>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project, index) => (
              <div key={index} className="p-4 md:p-5 rounded-xl border border-white/10 bg-blue-500/5 backdrop-blur-sm 
              hover:-translate-y-1 transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <div className={`relative mb-3 rounded-lg overflow-hidden ${
                  project.imageType === 'phone' 
                    ? 'h-[300px] md:h-[350px]'
                    : 'h-[200px] md:h-[250px]'
                }`}>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {project.images.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex} className="flex items-center justify-center bg-gray-900">
                        <div className="flex items-center justify-center w-full h-full">
                          <img 
                            src={img} 
                            alt={`${project.title} ${imgIndex + 1}`}
                            className={`${
                              project.imageType === 'phone'
                                ? 'h-full w-auto max-w-none object-contain mx-auto'
                                : 'w-full h-full object-contain'
                            }`}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-white/90">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/10 text-blue-400 text-xs px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white 
                  py-1.5 px-4 rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
