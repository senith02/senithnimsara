import React, { useEffect, useRef } from 'react'

const ReviewOnScroll = ({children}) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Add visible class when entering viewport
                if (entry.isIntersecting) {
                    ref.current?.classList.add("visible");
                } 
                // Remove visible class when leaving viewport
                else {
                    ref.current?.classList.remove("visible");
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if(ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className="reveal">{children}</div>
    );
}

export default ReviewOnScroll