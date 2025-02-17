import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: formData.name,
            to_name: "Senith",
            email: formData.email,
            message: formData.message
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_ID)
            .then((result) => {
                alert("Message Sent Successfully");
                setFormData({name: "", email: "", message: ""});
            })
            .catch((error) => {
                console.log(error);
                alert("Something Went Wrong. Please try again.");
            });
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-4">
            <ReviewOnScroll>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="p-6 rounded-xl border border-white/10 bg-blue-500/5 backdrop-blur-sm 
                        hover:-translate-y-1 transition-all duration-300 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        name="from_name"
                                        value={formData.name}
                                        required 
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10
                                        rounded-lg px-4 py-3 text-white transition-all duration-300
                                        focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                        placeholder="Name"
                                    />
                                </div>
                            
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        required 
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10
                                        rounded-lg px-4 py-3 text-white transition-all duration-300
                                        focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                <div className="relative">
                                    <textarea 
                                        name="message" 
                                        value={formData.message}
                                        required 
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10
                                        rounded-lg px-4 py-3 text-white transition-all duration-300
                                        focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                        placeholder="Your Message" 
                                        rows={5}
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium 
                                    transition-all duration-300 hover:-translate-y-1 
                                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};

export default Contact;