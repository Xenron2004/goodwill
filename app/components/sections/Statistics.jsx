"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Statistics() {
  const stats = [
    { number: 100, suffix: "%", title: "Placement Guarantee", desc: "Career success through strong industry links." },
    { number: 785, suffix: "+", title: "Students Placed Annually", desc: "Join a growing global alumni network." },
    { number: 10, suffix: "+", title: "Global Industry Partners", desc: "Opportunities with top global employers." },
    { number: 5, suffix: "+", title: "International Study Tours", desc: "Hands-on learning in global hubs." },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 }); // fires every time

  return (
    <section
      ref={sectionRef}
      id="statistics-section"
      className="w-full bg-white py-16 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-5xl font-['Playfair_Display',serif] font-semibold text-[#243646] leading-tight">
            Empowering Students for Global Careers in Hospitality & Energy
          </h2>
          <p className="uppercase text-sm text-gray-500 tracking-widest">
            Our Statistics
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-['Helvetica',sans-serif]">
            At Good Will Institute, our unwavering commitment to excellence, world-class training,
            and global exposure—combined with guaranteed career placements—has made us a trusted leader
            in hospitality and oil & gas education across India. We prepare every student not just for a job,
            but for a successful, long-term global career.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="space-y-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 lg:justify-between pb-6"
            >
              {/* Number Counter */}
              <div className="text-3xl font-['Playfair_Display',serif] lg:text-5xl font-semibold text-[#243646]">
                <Counter end={stat.number} suffix={stat.suffix} isInView={isInView} />
              </div>

              {/* Text */}
              <div className="mt-2 sm:mt-0 sm:ml-6">
                <h4 className="text-[#243646]  font-medium text-lg">{stat.title}</h4>
                <p className="text-gray-500 text-sm lg:text-base">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Counter Component
function Counter({ end, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2s
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
