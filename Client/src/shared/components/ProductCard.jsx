const ProductCard = ({ image, title, category, description }) => {
  return (
    <>
      <div className="flex items-center gap-10">
        <img src={image} alt={title} className="w-36 h-36 object-contain mx-auto mb-2" />
        <div className="text-left">
          <p className="text-lg font-semibold space-y-3">{title}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      <p className="text-xs text-start text-gray-500">{description}</p>
    </>
  );
};

export default ProductCard;
