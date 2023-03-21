import React from 'react';

const page = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-4xl lg:text-5xl text-center p-10 my-5">
          Account Registration
        </h1>
        <div className="flex-1 p-0 lg:flex lg:p-10 items-start justify-center lg:mb-10">
          <div className="w-[100%] p-5 lg:p-12 border-b-2 lg:border-b-0 lg:border-r-2 lg:min-w-[50%]">
            <h3 className="text-xl lg:text-3xl mb-4">Registered Customers</h3>
            <p className="font-semibold text-sm">
              Please sign In to access your account
            </p>
            <form class="mt-6">
              <label
                for="email"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
                required
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-100 focus:shadow-inner"
                required
              />

              <button type="submit" className="btn w-full">
                Sign up
              </button>
            </form>
            <p className="inline-block mt-4 text-gray-500 cursor-pointer hover:text-black">
              Forgot Your Password?
            </p>
          </div>
          <div className="w-[100%] p-5 lg:p-12 lg:min-w-[50%]">
            <h3 className="text-xl lg:text-3xl mb-4">New Customers</h3>
            <p className="font-semibold text-sm mb-4">
              Register with David Yurman for the following benefits:
            </p>
            <ul className="p-8">
              <li className="list-disc">Faster checkout</li>
              <li className="list-disc">Access your order status</li>
              <li className="list-disc">View online order history</li>
              <li className="list-disc">
                Add items to your wish list and share
              </li>
            </ul>
            <button type="submit" className="btn w-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
