import React, { useState, useEffect, useRef } from "react";
import { Link, graphql } from "gatsby";
import albumStyle from "../components/album.module.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

import WhereToListenSmall from "../components/WhereToListenSmall";
import WhereToListen from "../components/WhereToListenToUs";
import SupportUs from "../components/SupportUs";
import Newsletter from "../components/Newsletter";
import logo from "../images/logo.png";

export default ({ data }) => {
  const post = data.feedGatsbyBlog;

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.itunes.subtitle}
        img={post.itunes.image}
      />

      <div className="flex items-center m-auto max-w-lg md:max-w-2xl mdx:max-w-3xl mdx:px-6 lg:max-w-1240  lg:mt-16 px-4 mt-10 lgx:max-w-960">
        <Link to="/">
          <img
            // src={post.itunes.image}
            src={logo}
            alt="pod hero"
            className={`rounded-lg ${
              albumStyle.shadowSmall
            } w-20 h-20 md:w-40 md:h-40 min-w-5`}
          />
        </Link>
        <div className="ml-4 md:ml-6">
          <div className="text-gray-700 text-sm md:text-base">
            {formatDate(post.pubDate)} - {formatTime(post.itunes.duration)}
          </div>

          <div className="mt-1 md:mt-2 mdx:mt-4 font-medium text-gray-900 md:leading-snug md:text-2xl lgx:text-3xl">
            {post.title}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 mt-16 pb-8 lg:pb-12">
        <div className="text-center text-gray-900 font-medium pt-8 lg:pt-12 lg:text-2xl lg:text-gray-800">
          Listen and Subscribe
        </div>
        <div className="lg:hidden">
          <WhereToListenSmall />
        </div>

        <div className="hidden lg:block">
          <WhereToListen />
        </div>
      </div>

      <div
        className="px-4 mt-12 lg:pt-8 m-auto max-w-lg md:max-w-2xl mdx:max-w-3xl"
        onScroll={handleScroll}
      >
        <div className="text-gray-900 font-medium text-xl mb-6 lg:text-2xl lgx:text-3xl">
          Episode Notes
        </div>
        <div
          className="lg:text-xl"
          dangerouslySetInnerHTML={{ __html: post.content.encoded }}
        />
      </div>

      <div className="text-center p-8 max-w-md md:max-w-lg m-auto mt-8 lg:max-w-xl lgx:max-w-2xl lgx:mt-16">
        <Newsletter />
      </div>
      <div className="w-full bg-gray-100 text-center pb-8 md:pb-16 mt-12">
        <SupportUs />
      </div>

      <div className="pt-8 font-medium text-xl text-gray-900 lg:text-2xl lg:pt-10 max-w-lg m-auto text-center mb-4 mt-16">
        Listen Now <span className="pl-2">🔊</span>
      </div>
      <div className="text-center font-medium text-gray-700 leading-relaxed pl-8 pr-8 mt-6 md:mt-8 lg:text-xl lg:font-normal text-center lg:text-gray-800 lg:leading-normal">
        {post.title}
      </div>
      <div className={`${albumStyle.player} bg-white mt-6`}>
        {/* <div className="hidden xl:block pb-4 pt-4">{post.title}</div> */}
        <audio
          className="w-full max-w-4xl xl:max-w-5xl"
          controls
          preload="auto"
          src={post.enclosure.url}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    # allFeedGatsbyBlog(fields: { title: { eq: $slug } }) {
    # hero(episode: $episode)
    feedGatsbyBlog(id: { eq: $slug }) {
      title
      pubDate
      content {
        encoded
      }
      itunes {
        duration
        image
        subtitle
      }
      enclosure {
        url
      }
    }
  }
`;

function formatDate(dateString) {
  return dateString.substring(4, 16);
}

function formatTime(timeString) {
  var pieces = timeString.split(":");
  var hour, minute, second;
  var time;

  console.log(pieces);
  if (pieces.length === 3) {
    hour = parseInt(pieces[0], 11);
    minute = parseInt(pieces[1], 10);
    second = parseInt(pieces[2], 10);

    time = `${hour} hr ${minute} min`;
  } else {
    minute = parseInt(pieces[0], 10);
    time = `${minute} min `;
  }

  return time;
}

function handleScroll() {
  console.log("Scrollling fefewfe ");
}
