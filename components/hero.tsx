import React from 'react';
import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Zap } from 'lucide-react';

const RadifyHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex flex-col justify-center">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="text-yellow-500 border-yellow-500/30 bg-yellow-500/5 px-4 py-1">
              <Zap className="w-3 h-3 mr-2" /> Smart Lighting Evolution
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Illuminate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-500">
                Digital Space.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Radify brings intuitive, architectural lighting solutions to your home. 
              Smart control, sustainable energy, and breathtaking aesthetics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-14 px-8 group">
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/5 h-14 px-8">
                View Gallery
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/10 w-fit">
              <div>
                <p className="text-2xl font-bold text-white">99%</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Efficiency</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">25k+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Homes Lit</p>
              </div>
            </div>
          </motion.div>

          {/* Creative Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* The "Light Source" Illustration */}
            <div className="relative z-20 w-full max-w-md aspect-square bg-gradient-to-b from-white/10 to-transparent rounded-3xl border border-white/10 p-8 backdrop-blur-3xl overflow-hidden group">
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 20px rgba(234,179,8,0.2)", "0 0 50px rgba(234,179,8,0.5)", "0 0 20px rgba(234,179,8,0.2)"] 
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                 {/* Replace with an actual product Image or a 3D light SVG */}
                 <Lightbulb size={200} strokeWidth={0.5} className="text-yellow-500/80 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]" />
              </motion.div>
              
              {/* Floating Labels */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md">
                <p className="text-sm text-yellow-500 font-medium">Lumina Series A1</p>
                <p className="text-xs text-gray-400">Touch-sensitive ambient control</p>
              </div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-yellow-500/5 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-yellow-500/5 rounded-full" />
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
};

export default RadifyHero;