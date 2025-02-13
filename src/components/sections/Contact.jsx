import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""

    })

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const templateParams = {
            from_name: formData.name,
            to_name: "Senith", // Add your name here
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
    <section id="contact"
    className="min-h-screen flex justify-center items-center py-20">

        <ReviewOnScroll>
            <div className="px-4 w-150">
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r 
                        from-blue-500 to-cyan-400 bg-clip-text 
                        text-transparent text-center'>
                            Get In Touch
                            </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            name="from_name"  // Changed from 'name'
                            value={formData.name}
                            required 
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10
                            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                            focus:bg-blue-500/5" 
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
                            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                            focus:bg-blue-500/5" 
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="relative">
                        <textarea id="message" 
                        name="message" 
                        value={formData.message}
                        required 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10
                        rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                        focus:bg-blue-500/5" placeholder="Your Message" rows={5}/>

                    </div>

                    <button type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
        </ReviewOnScroll>
    </section>
  )
}

export default Contact