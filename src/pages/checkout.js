import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon | Checkout</title>
        <link rel="icon" href="/amazon-favicon.svg" />
      </Head>
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://cutt.ly/jRYOdW5"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Shopping Cart" : "Shopping Cart"}
            </h1>
            {items.map((item, idx) => (
              <CheckoutProduct
                key={idx}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default checkout;
