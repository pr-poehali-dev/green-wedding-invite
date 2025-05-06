
interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = "Фотографии для этой категории скоро появятся." }: EmptyStateProps) => {
  return (
    <div className="text-center py-12 bg-white rounded-lg mt-8">
      <p className="text-wedding-green-600">{message}</p>
    </div>
  );
};

export default EmptyState;
