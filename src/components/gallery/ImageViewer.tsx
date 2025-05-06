
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageViewerProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageViewer = ({ selectedImage, onClose }: ImageViewerProps) => {
  return (
    <Dialog open={!!selectedImage} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
        {selectedImage && (
          <img 
            src={selectedImage} 
            alt="Фото в полном размере" 
            className="w-full h-auto object-contain rounded-lg"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
