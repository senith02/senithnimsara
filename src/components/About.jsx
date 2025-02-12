import React from 'react'

const About = () => {
    const frontendSkills = [
        "Html",
        "CSS",
        "React",
        "TailwindCSS"
    ]
    const backendSkills = [
        "Node.js",
        "Java",
        "Springboot",
        "Mysql",
        "python",
    ]

    return (
        <section id='about' 
        className='min-h-screen flex items-center justify-center py-20'>

                <div className='max-w-3xl mx-auto px-4'>
                        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r 
                        from-blue-500 to-cyan-400 bg-clip-text 
                        text-transparent text-center'>
                                {" "}
                                About Me
                        </h2>
                        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                                <p className='text-gray-300 mb-6'>
                                Full Stack Developer with a passion for creating 
                                dynamic and responsive web applications.
                                </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                                <div className='flex flex-wrap gap-2'>
                                                        {frontendSkills.map((tech, key) => (
                                                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                                                        {tech}
                                                                </span>
                                                        ))}
                                                </div>
                                        </div>

                                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                                <div className='flex flex-wrap gap-2'>
                                                        {backendSkills.map((tech, key) => (
                                                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                                                        {tech}
                                                                </span>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                            {/* Education Section */}
                            <div className='p-6 rounded-xl border border-white/10 bg-blue-500/5 backdrop-blur-sm 
                            hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]'>
                                <h3 className='text-xl font-bold mb-6 flex items-center gap-2 text-blue-400'>
                                    <span>🎓</span>
                                    <span>Education</span>
                                </h3>
                                <ul className='space-y-4 text-gray-300'>
                                    <li className='flex flex-col gap-1'>
                                        <strong className='text-white/90 text-lg'>B.S in Computer Science</strong>
                                        <span className='text-blue-400/80'>Coventry University</span>
                                        <span className='text-sm text-gray-400'>2024-current</span>
                                    </li>
                                    <li className='mt-4'>
                                        <p className='text-sm text-gray-400 font-medium mb-2'>Relevant Coursework:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {['UI/UX', 'Agile', 'Data Structures', 'Algorithms'].map((course, index) => (
                                                <span key={index} className='bg-blue-500/10 text-blue-400 text-sm px-3 py-1 rounded-full'>
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Certification Section */}
                            <div className='p-6 rounded-xl border border-white/10 bg-blue-500/5 backdrop-blur-sm 
                            hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]'>
                                <h3 className='text-xl font-bold mb-6 flex items-center gap-2 text-blue-400'>
                                    <span>📜</span>
                                    <span>Certifications</span>
                                </h3>
                                <div className='space-y-6'>
                                    <div className='flex flex-col gap-2'>
                                        <h4 className='font-semibold text-white/90'>Oracle Cloud Infrastructure 2024 Generative AI</h4>
                                        <span className='text-blue-400/80 text-sm'>Professional Certification</span>
                                        <p className='text-sm text-gray-400'>Learn about Generative AI and its applications in cloud infrastructure</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h4 className='font-semibold text-white/90'>Postman API Fundamentals</h4>
                                        <span className='text-blue-400/80 text-sm'>Student Expert</span>
                                        <p className='text-sm text-gray-400'>Mastery in API testing and development using Postman</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        </section>
    )
}

export default About