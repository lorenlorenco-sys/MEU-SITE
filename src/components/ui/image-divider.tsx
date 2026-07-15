import { cn } from "@/lib/utils";
import textureRoots from "@/assets/texture-roots.webp";

interface ImageDividerProps {
  className?: string;
  height?: "sm" | "md" | "lg";
}

const ImageDivider = ({ className, height = "md" }: ImageDividerProps) => {
  const heightClasses = {
    sm: "h-24 md:h-32",
    md: "h-32 md:h-48",
    lg: "h-48 md:h-64",
  };

  return (
    <div className={cn("relative w-full overflow-hidden", heightClasses[height], className)}>
      {/* Background Image */}
      <img 
        src={textureRoots} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      
      {/* Brand Color Overlay - #0B3B32 at 40% */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'hsl(169 69% 14% / 0.4)'
        }}
      />
      
      {/* Gradient edges for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-30" />
    </div>
  );
};

export default ImageDivider;
