
import React, { useState, useEffect } from 'react';

const EidCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    // Animate in the card
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Show signature after a delay
    const signatureTimer = setTimeout(() => {
      setShowSignature(true);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(signatureTimer);
    };
  }, []);

  return (
    <div className="card-container max-w-3xl w-full">
      <div 
        className={`card bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl border border-eid-light border-opacity-40 shadow-lg transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'
        }`}
      >
        {/* Decorative Header */}
        <div className="mb-10">
          <div className="w-full flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-eid-gold to-transparent w-full"></div>
            <div className="mx-4">
              <div className="w-8 h-8 rounded-full border-2 border-eid-gold flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-eid-gold bg-opacity-20"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-eid-gold via-eid-gold to-transparent w-full"></div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Greeting */}
          <h1 className={`text-4xl md:text-6xl font-bold text-eid-ultralight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            عيد سعيد
          </h1>
          
          {/* Moon Shape */}
          <div className={`mx-auto w-24 h-24 rounded-full border-4 border-eid-gold relative overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-eid-primary to-eid-secondary opacity-50"></div>
            <div className="absolute -right-12 top-0 w-24 h-24 rounded-full bg-eid-ultralight bg-opacity-10"></div>
          </div>
          
          {/* Main Message */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-2xl md:text-3xl text-eid-ultralight leading-relaxed">
              كل عام وأنتم بخير
            </p>
            <div className="w-16 h-1 bg-eid-gold mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl text-eid-light">
              وعيد سعيد عليكم
            </p>
          </div>
          
          {/* Ornamental Divider */}
          <div className={`flex items-center justify-center gap-3 py-4 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-2 h-2 rounded-full bg-eid-gold"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-eid-gold to-transparent"></div>
            <div className="w-3 h-3 rounded-full bg-eid-gold"></div>
            <div className="w-16 h-px bg-gradient-to-r from-eid-gold via-eid-gold to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-eid-gold"></div>
          </div>
          
          {/* Signature */}
          <div className={`transition-all duration-1000 ${
            showSignature ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg text-eid-light font-semibold">
              عبدالمجيد الزهراني
            </p>
            <p className="text-sm text-eid-light opacity-70 mt-1">
              مبرمج مواقع
            </p>
          </div>
        </div>
        
        {/* Decorative Footer */}
        <div className="mt-10">
          <div className="w-full flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-eid-gold to-transparent w-full"></div>
            <div className="mx-4">
              <div className="w-8 h-8 rounded-full border-2 border-eid-gold flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-eid-gold bg-opacity-20"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-eid-gold via-transparent to-transparent w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EidCard;
