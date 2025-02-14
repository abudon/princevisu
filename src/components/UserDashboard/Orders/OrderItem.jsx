import React from "react";

function OrderItem({ item, onSelect, selectedImages }) {
  return (
    <img
      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      src={`${item.img}?w=248&fit=crop&auto=format`}
      alt={item.title}
      loading='lazy'
      className={`transition-transform cursor-pointer ${
        selectedImages.includes(item.img)
          ? "border-8 border-spacing-4 border-stone-500 scale-95 "
          : ""
      }`}
      onClick={() => onSelect(item.img)}
    />
  );
}

export default OrderItem;
