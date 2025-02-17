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
      title: 'Image Editor Software',
      description: 'Developed an image editor with OpenCV and Tkinter, featuring face detection, censorship, and image enhancements.',
      techStack: ['OpenCV', 'Python', 'Tkinter'],
      images: ['/images/imageEditor1.png', '/images/imageEditor2.png'],
    },
    {
      title: 'Bus Booking App',
      description: 'Working on a bus booking app with a Google Map UI integration for location-based services and route visualization.',
      techStack: ['Java', 'Google Maps API', 'sqllite','Android Studio'],
      images: [
        'https://i.ibb.co/Z6yWZRBP/bus1.png',
        'https://i.ibb.co/nMNzNKm5/bus2.png',
        'https://i.ibb.co/4n0THVyh/bus3.png'
      ],
    },
    {
      title: 'Social Media App',
      description: 'A social media app built with security features for user authentication and data protection, developed as part of a software security project.',
      techStack: ['React', 'Node.js', 'Firebase'],
      images: [
        'https://i.ibb.co/YBk8kTvK/ss1.png',
        'https://i.ibb.co/wFDwpk61/ss2.png',
        'https://i.ibb.co/67Ztp3vz/ss3.png',
        'https://i.ibb.co/Ld1dcGV4/ss4.png'
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <ReviewOnScroll>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project, index) => (
              <div key={index} className="p-6 rounded-xl border border-white/10 bg-blue-500/5 backdrop-blur-sm 
              hover:-translate-y-1 transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {project.images.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img 
                          src={img} 
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white/90">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
