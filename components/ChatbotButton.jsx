// "use client";
// import { useEffect, useState } from "react";
// import { MessageCircle } from "lucide-react"; // chatbot icon

// export default function ChatbotButton() {
//   const [visible, setVisible] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);

//   useEffect(() => {
//     // Show button after 5 seconds
//     const timer = setTimeout(() => {
//       setVisible(true);

//       // Show message after button appears
//       setTimeout(() => {
//         setShowMessage(true);
//       }, 500);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50">
//       {/* Blinking message */}
//       {showMessage && (
//         <div className="bg-[#243646] text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-blink">
//           Hi, let’s talk about your career 🚀
//         </div>
//       )}

//       {/* Chatbot button */}
//       <button
//         onClick={() =>
//           window.open("https://wa.me/919999999999?text=Hi!%20I%20want%20to%20talk%20about%20my%20career.", "_blank")
//         }
//         className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
//       >
//         <MessageCircle className="w-7 h-7 text-white" />
//       </button>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.4;
//           }
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }












"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Users, Briefcase } from 'lucide-react';

const Chatbotbutton = ({ phoneNumber = "919700777723" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Start animation sequence after 5 seconds
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
      setShowTooltip(true);
      
      // Stop animation after 8 seconds but keep tooltip for longer
      const stopAnimationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 8000);

      // Hide tooltip after 20 seconds
      const hideTooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 20000);

      return () => {
        clearTimeout(stopAnimationTimer);
        clearTimeout(hideTooltipTimer);
      };
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hi! I'm interested in discussing career opportunities. Could we schedule a consultation?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Hide tooltip after click
    setShowTooltip(false);
  };

  const closeTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
    setIsAnimating(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-8px); }
          70% { transform: translateY(-4px); }
          90% { transform: translateY(-2px); }
        }
        
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-bounce { animation: bounce 1s infinite; }
        .animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        .chat-button {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 140px;
        }
        
        .chat-button:hover {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          transform: scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.25);
        }
        
        .chat-button:active {
          transform: scale(0.95);
        }
        
        .tooltip-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(229, 231, 235, 1);
          overflow: hidden;
          max-width: 28rem;
          width: 28rem;
        }
        
        .tooltip-header {
          background: linear-gradient(135deg, #10b981 0%, #0d9488 100%);
          padding: 1.5rem;
          color: white;
          position: relative;
        }
        
        .close-button {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s;
          padding: 0.25rem;
          border-radius: 9999px;
        }
        
        .close-button:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .profile-avatar {
          width: 2.5rem;
          height: 2.5rem;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .status-indicator {
          color: #a7f3d0;
          font-size: 0.875rem;
        }
        
        .content-section {
          padding: 1.5rem;
        }
        
        .message-avatar {
          width: 2rem;
          height: 2rem;
          background-color: #d1fae5;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        .message-text {
          color: #1f2937;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        
        .message-subtext {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .footer-section {
          padding-top: 1rem;
          border-top: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .whatsapp-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .typing-dots {
          display: flex;
          gap: 0.25rem;
        }
        
        .typing-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #10b981;
          border-radius: 9999px;
          animation: bounce 1.4s ease-in-out infinite both;
        }
        
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        .tooltip-arrow {
          position: absolute;
          bottom: -0.5rem;
          right: 2rem;
          width: 1rem;
          height: 1rem;
          background: white;
          border-right: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
          transform: rotate(45deg);
        }
        
        .pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background-color: #10b981;
          opacity: 0.2;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .pulse-ring:nth-child(2) {
          animation-delay: 0.5s;
          opacity: 0.1;
          transform: scale(1.25);
        }
        
        .notification-badge {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          background-color: #ef4444;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .notification-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: white;
          border-radius: 9999px;
        }
        
        .shine-effect {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 1s ease-out;
        }
        
        .chat-button:hover .shine-effect {
          transform: translateX(100%) skewX(-12deg);
        }
      `}</style>

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50 }}>
        {/* Professional Tooltip Card */}
        {showTooltip && (
          <div style={{ position: 'absolute', bottom: '5rem', right: 0 }} className="animate-fadeIn">
            <div className="tooltip-card">
              {/* Header with gradient */}
              <div className="tooltip-header">
                <button onClick={closeTooltip} className="close-button">
                  <X size={16} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="profile-avatar">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '1.125rem' }}>Career Consultant</h3>
                    <p className="status-indicator">Online now</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="content-section">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="message-avatar">
                    <Users size={16} style={{ color: '#059669' }} />
                  </div>
                  <div>
                    <p className="message-text">
                      👋 Hi there! Ready to advance your career?
                    </p>
                    <p className="message-subtext">
                      Get personalized career guidance and explore new opportunities. Let's discuss your goals!
                    </p>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="footer-section">
                  <div className="whatsapp-indicator">
                    <Phone size={14} />
                    <span>WhatsApp Chat</span>
                  </div>
                  <div className="typing-dots">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
              
              {/* Arrow pointing to button */}
              <div className="tooltip-arrow"></div>
            </div>
          </div>
        )}

        {/* Main Chat Button */}
        <div style={{ position: 'relative' }}>
          {/* Pulsing rings when animating */}
          {isAnimating && (
            <>
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
            </>
          )}
          
          {/* Button */}
          <button
            onClick={handleWhatsAppRedirect}
            className={`chat-button ${isAnimating ? 'animate-bounce' : ''}`}
            style={{
              position: 'relative',
              color: 'white',
              borderRadius: '0.75rem',
              padding: '1rem 1.5rem',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            aria-label="Start career consultation on WhatsApp"
          >
            {/* Icon container */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <MessageCircle 
                size={24} 
                style={{ 
                  transition: 'transform 0.3s',
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                  strokeWidth: 2
                }} 
              />
            </div>
            
            {/* Let's Chat Text */}
            <span style={{ 
              position: 'relative', 
              zIndex: 10, 
              color: 'white', 
              fontWeight: '600',
              fontSize: '1rem',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Helvetica_Neue-Medium', Helvetica"
            }}>
              Let's Chat
            </span>
            
            {/* Notification badge */}
            {isAnimating && (
              <div className="notification-badge">
                <div className="notification-dot"></div>
              </div>
            )}
            
            {/* Shine effect */}
            <div className="shine-effect"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbotbutton;