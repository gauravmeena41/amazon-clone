import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductCard = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      description,
      category,
      image,
      price,
      rating,
      hasPrime,
    };
    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-20 p-10 rounded-sm lg:hover:shadow-md transition-all duration-300">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-primary" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 30} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="/amazon-prime.svg" alt="" className="w-12" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button onClick={() => addItemToCart()} className="button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
