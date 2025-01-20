// import { useState, useEffect } from "react";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import "./HeroSection.scss"; // Import SCSS file

// interface Slide {
//   image: string;
//   collection: string;
//   title: string;
//   subtitle: string;
// }

// const slides: Slide[] = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
//     collection: "SUMMER 2024",
//     title: "Elegant Essentials",
//     subtitle: "Discover timeless pieces for your wardrobe",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
//     collection: "PREMIUM LINE",
//     title: "Urban Style",
//     subtitle: "Contemporary fashion for modern lifestyle",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
//     collection: "NEW ARRIVALS",
//     title: "Luxury Collection",
//     subtitle: "Exclusive designs for distinguished taste",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }
//   };

//   const prevSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (isTransitioning) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning]);

//   return (
//     <div className="hero-section">
//       <div className="hero-container">
//         <div className="hero-content">
//           <div className="hero-image-container">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`slide ${currentSlide === index ? "active" : ""}`}
//               >
//                 <div
//                   className="slide-image"
//                   style={{
//                     backgroundImage: `url('${slide.image}')`,
//                     transform: isTransitioning ? "scale(1.05)" : "scale(1)",
//                   }}
//                 />
//               </div>
//             ))}

//             <div className="image-overlay" />

//             <div className="navigation-buttons">
//               <button
//                 onClick={prevSlide}
//                 className="nav-button"
//                 disabled={isTransitioning}
//               >
//                 <ChevronLeft className="icon" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="nav-button"
//                 disabled={isTransitioning}
//               >
//                 <ChevronRight className="icon" />
//               </button>
//             </div>

//             <div className="slide-indicators">
//               {slides.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`indicator ${currentSlide === index ? "active" : ""}`}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="text-content">
//             <div className="fashion-text">FASHION</div>

//             <div className="details">
//               <span className="collection">{slides[currentSlide].collection}</span>
//               <h1 className="title">{slides[currentSlide].title}</h1>
//               <p className="subtitle">{slides[currentSlide].subtitle}</p>

//               <div className="buttons">
//                 <button className="shop-now">
//                   <span>Shop Now</span>
//                   <ArrowRight className="icon" />
//                 </button>
//                 <button className="view-collection">
//                   View Collection
//                 </button>
//               </div>

//               <div className="social-links">
//                 <p className="follow-us">Follow Us</p>
//                 <div className="links">
//                   <a href="#" className="link">
//                     Instagram
//                   </a>
//                   <a href="#" className="link">
//                     Facebook
//                   </a>
//                   <a href="#" className="link">
//                     Twitter
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;