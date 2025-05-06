
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface GalleryImageProps {
  id: number;
  src: string;
  alt: string;
  category: string;
  onClick: (src: string) => void;
}

const GalleryImage = ({ src, alt, onClick }: GalleryImageProps) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={() => onClick(src)}
    >
      <AspectRatio ratio={1 / 1}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default GalleryImage;
