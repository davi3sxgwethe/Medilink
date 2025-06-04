import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Dr. Jane Foster",
    title: "Pediatrician",
    quote: "Medilink transformed how I connect with patients. It's seamless, secure, and dependable.",
    image: "images/doctor.avif"
  },
  {
    name: "Dr. Mark Rylance",
    title: "General Practitioner",
    quote: "The ease of use makes Medilink a preferred platform for both doctors and patients.",
    image: "images/davies.jpg"
  },
  {
    name: "Sarah L.",
    title: "Therapist",
    quote: "I’ve been able to grow my practice remotely with Medilink’s reliable video consultation.",
    image: "images/Dentist.jpg"
  },
  {
    name: "Dr. Aisha Khan",
    title: "Psychiatrist",
    quote: "Secure and intuitive – Medilink offers everything I need for virtual care.",
    image: "images/projectimage4.jpg"
  },
  {
    name: "Daniel Cho",
    title: "Family Medicine",
    quote: "Medilink has made remote consultations a breeze. Highly recommend it to all clinicians.",
    image: "images/projectimage5.jpg"
  }
];

function Testimonials() {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Our Users Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <p className="testimonial-quote">“{item.quote}”</p>
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-title">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
