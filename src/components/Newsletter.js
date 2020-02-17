import React, { useState } from "react";
import albumStyle from "../components/album.module.css";
import { useStaticQuery, graphql } from "gatsby";

const Newsletter = () => {
  let [subscribe, setSubscribe] = useState(false);
  const data = useStaticQuery(graphql`
    query subscribeTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <div className=" text-center text-xl font-medium text-gray-900 md:font-semibol md:text-3xl mt-16 lgx:mt-24 ">
        Never Miss a Thing
      </div>
      <div className="mt-6 mb-6 text-gray-700 leading-relaxed md:text-xl">
        Please sign up to our mailing list to receive latest news and updates!
      </div>

      <div>
        {subscribe ? (
          <div>Thank you for subscribing! </div>
        ) : (
          <div class="sm:focus-within:shadow-outline rounded-lg">
            <div
              class={` sm:flex sm:shadow-xl sm:rounded-lg sm:overflow-hidden`}
            >
              <input
                type="email"
                id="ck_emailField"
                name="email"
                required
                placeholder="Enter your email"
                class={` ${
                  albumStyle.newsletter
                } placeholder-gray-800 block w-full rounded-lg focus:border-indigo border border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1 px-6 py-4 lg:py-5 focus:outline-none`}
              />
              {/* <input
                type="email"
                id="ck_emailField"
                name="email"
                required
                placeholder="Enter your email"
                class={` ${
                  albumStyle.newsletter
                } placeholder-gray-800 shadow-xl  block w-full rounded-lg focus:border-indigo border border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1 px-6 py-4 lg:py-5 focus:outline-none`}
              /> */}
              <button
                id="ck_subscribe_button"
                class={` ${albumStyle.footer} ${
                  albumStyle.newsletter
                } text-sm shadow block w-full sm:w-auto rounded-lg sm:rounded-none focus:outline-none bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark text-gray-900 text-shadow uppercase tracking-wide font-semibold px-6 py-4 lg:py-5`}
                onClick={() => setSubscribe((subscribe = true))}
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Newsletter;
