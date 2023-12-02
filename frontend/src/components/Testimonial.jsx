import React from 'react'
import TestimonialCard from './TestimonialsCard'
import Indo from "../assets/Indo.jpg"
import Transylvania from "../assets/Transylvania.jpg"
import Japan from "../assets/Japan.jpg"

const Testimonial = () => {
    return (
        <div className="text-center">
            <div className="text-3xl font-semibold text-displayText">Tales of Joy: Our Customer Stories</div>
            <div className="text-normal text-displayText pt-4">Take a glimpse into our customers journeys and the ways our products have made a difference in their lives</div>
            <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
                <TestimonialCard 
                img={Indo} 
                title="Talula J" 
                comment="A lifesaver for this busy mom! All I need for my kids, right at my fingertips"
                />
                <TestimonialCard 
                img={Transylvania} 
                title="Bella Goth" 
                comment="Love the curated picks! Stylish finds for my kids without the hassle"
                />
                <TestimonialCard 
                img={Japan} 
                title="Nanami Ito" 
                comment="One-stop-shop for my baby essentials. Easy, convenient, and reliable!"
                />
            </div>
        </div>
        
    )
}


export default Testimonial

