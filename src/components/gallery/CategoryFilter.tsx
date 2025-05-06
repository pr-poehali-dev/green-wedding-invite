
interface CategoryFilterProps {
  categories: { id: string; name: string }[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      <button
        className={`px-4 py-2 rounded-full transition-colors ${
          activeCategory === null 
            ? 'bg-wedding-green-500 text-white' 
            : 'bg-wedding-green-100 text-wedding-green-600 hover:bg-wedding-green-200'
        }`}
        onClick={() => onCategoryChange(null)}
      >
        Все фото
      </button>
      
      {categories.map(category => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category.id 
              ? 'bg-wedding-green-500 text-white' 
              : 'bg-wedding-green-100 text-wedding-green-600 hover:bg-wedding-green-200'
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
