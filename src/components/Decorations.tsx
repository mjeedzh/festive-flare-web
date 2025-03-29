
import React from 'react';
import { Moon, Star, Award, Shapes } from 'lucide-react';

const Decorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Top decorations */}
      <div className="absolute top-10 left-20 animate-float">
        <Moon className="text-eid-light h-12 w-12 animate-pulse-light" />
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="text-eid-gold h-8 w-8" />
      </div>
      
      {/* Corner ornaments */}
      <div className="absolute top-0 left-0 p-8">
        <div className="relative w-40 h-40">
          <Star className="absolute top-0 left-0 text-eid-gold h-6 w-6" />
          <Star className="absolute top-8 left-8 text-eid-gold h-4 w-4" />
          <Moon className="absolute top-16 left-4 text-eid-light h-8 w-8" />
          <div className="absolute top-4 left-20 w-20 h-20 border-t-2 border-l-2 border-eid-light rounded-tl-3xl opacity-50"></div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 p-8">
        <div className="relative w-40 h-40">
          <Star className="absolute top-0 right-0 text-eid-gold h-6 w-6" />
          <Star className="absolute top-8 right-8 text-eid-gold h-4 w-4" />
          <Moon className="absolute top-16 right-4 text-eid-light h-8 w-8" />
          <div className="absolute top-4 right-20 w-20 h-20 border-t-2 border-r-2 border-eid-light rounded-tr-3xl opacity-50"></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-8">
        <div className="relative w-40 h-40">
          <Star className="absolute bottom-0 left-0 text-eid-gold h-6 w-6" />
          <Star className="absolute bottom-8 left-8 text-eid-gold h-4 w-4" />
          <Moon className="absolute bottom-16 left-4 text-eid-light h-8 w-8" />
          <div className="absolute bottom-4 left-20 w-20 h-20 border-b-2 border-l-2 border-eid-light rounded-bl-3xl opacity-50"></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 p-8">
        <div className="relative w-40 h-40">
          <Star className="absolute bottom-0 right-0 text-eid-gold h-6 w-6" />
          <Star className="absolute bottom-8 right-8 text-eid-gold h-4 w-4" />
          <Moon className="absolute bottom-16 right-4 text-eid-light h-8 w-8" />
          <div className="absolute bottom-4 right-20 w-20 h-20 border-b-2 border-r-2 border-eid-light rounded-br-3xl opacity-50"></div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 animate-float opacity-70" style={{ animationDelay: '0.5s' }}>
        <Award className="text-eid-gold h-10 w-10" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float opacity-70" style={{ animationDelay: '1.5s' }}>
        <Shapes className="text-eid-gold h-10 w-10" />
      </div>
      
      {/* Central decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div className="w-full h-full rounded-full border-8 border-eid-light animate-rotate-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-eid-light animate-rotate-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-1/2 left-1/2 h-1 w-40 -translate-y-1/2"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`, 
                transformOrigin: 'left center',
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-eid-light to-transparent opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decorations;
