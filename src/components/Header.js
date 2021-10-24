import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue h-[60px] p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://cutt.ly/dRTPMfE"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-secondary hover:bg-yellow-primary">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none "
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer hover:underline"
          >
            <p>{session ? `Hello, ${session.user.name}` : "Sign in"}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative cursor-pointer hover:underline flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-secondary rounded-full text-center text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex items-center cursor-pointer hover:underline">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer hover:underline">Prime Video</p>
        <p className="cursor-pointer hover:underline">Amazon Business</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Electronics
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Food & Grocery
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Prime
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Buy Again
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Shopper Toolkit
        </p>
        <p className="cursor-pointer hover:underline hidden lg:inline-flex">
          Health & Personal
        </p>
      </div>
    </header>
  );
};

export default Header;
