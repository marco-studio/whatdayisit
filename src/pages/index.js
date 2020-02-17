import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { truncate } from "lodash";
import chunk from "lodash/chunk";
import albumStyle from "../components/album.module.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

import logo from "../images/logo.png";

import WhereToListenSmall from "../components/WhereToListenSmall";
import WhereToListen from "../components/WhereToListenToUs";
import SupportUs from "../components/SupportUs";
import Newsletter from "../components/Newsletter";
const IndexPage = ({ data }) => {
  const [count, setCount] = useState(5);
  const posts = data.allFeedGatsbyBlog.edges.map(e => e.node);

  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        img={logo}
      />

      <div>
        {/* ###############################    HEADER START ########################################### */}
        <div className={`${albumStyle.slope} bg-gray-200`} />
        <div
          className=" max-w-lg md:max-w-2xl pl-12 pt-16 pr-12 md:flex md:justify-end 
          md:flex-row-reverse m-auto md:pl-4 md:pr-4 lg:max-w-3xl xl:max-w-5xl  xl:m-auto relative mdx:pt-24 lgx:max-w-960 lgx:px-12  xl-mx-0"
        >
          <div className="md:ml-8 md:mt-3 lg:ml-12">
            <div className="text-4xl font-medium md:text-3xl md:font-bold text-gray-900 lg:text-4xl">
              {data.site.siteMetadata.title}
            </div>
            <div className="text-base mt-3 md:text-base text-gray-900">
              {data.site.siteMetadata.author}
            </div>
            <ul className="md:flex mt-6 hidden text-gray-100">
              {data.site.siteMetadata.facebook !== "" ? (
                <li className="mr-8">
                  <a href={data.site.siteMetadata.facebook}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.966 24H1.34C.6 24 0 23.4 0 22.66V1.064c0-.74.6-1.34 1.34-1.34h21.596c.74 0 1.34.6 1.34 1.34V22.66c0 .74-.6 1.34-1.34 1.34H16.75v-9.4h3.155l.473-3.664H16.75v-2.34c0-1.06.294-1.783 1.816-1.783h1.94V3.534c-.336-.044-1.488-.144-2.827-.144-2.797 0-4.712 1.707-4.712 4.843v2.702H9.803V14.6h3.163V24z"
                        fill="#1A202C"
                      />
                    </svg>
                  </a>
                </li>
              ) : (
                <> </>
              )}

              {data.site.siteMetadata.twitter !== "" ? (
                <li className="mr-8">
                  <a href={data.site.siteMetadata.twitter}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.184 2.142a9.728 9.728 0 0 1-2.86.804A5.096 5.096 0 0 0 23.514.12 9.81 9.81 0 0 1 20.35 1.36a4.912 4.912 0 0 0-3.635-1.612c-2.749 0-4.979 2.287-4.979 5.107 0 .4.043.789.128 1.163C7.725 5.804 4.056 3.773 1.598.679a5.2 5.2 0 0 0-.674 2.57c0 1.771.88 3.335 2.216 4.251a4.89 4.89 0 0 1-2.257-.637v.063c0 2.475 1.717 4.54 3.997 5.007a4.75 4.75 0 0 1-1.313.18c-.32 0-.634-.03-.937-.09.634 2.027 2.472 3.505 4.652 3.544a9.834 9.834 0 0 1-7.374 2.117 13.867 13.867 0 0 0 7.635 2.293c9.162 0 14.17-7.78 14.17-14.53 0-.222-.004-.444-.012-.662a10.223 10.223 0 0 0 2.483-2.643z"
                        fill="#1A202C"
                      />
                    </svg>
                  </a>
                </li>
              ) : (
                <> </>
              )}

              {data.site.siteMetadata.instagram !== "" ? (
                <li className="mr-8">
                  <a href={data.site.siteMetadata.instagram}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.954-.275c-3.296 0-3.71.014-5.004.073-1.292.059-2.174.264-2.946.564a5.95 5.95 0 0 0-2.15 1.4 5.95 5.95 0 0 0-1.4 2.15c-.3.772-.506 1.654-.565 2.946-.059 1.295-.073 1.708-.073 5.005 0 3.296.014 3.71.073 5.004.06 1.292.265 2.174.565 2.946a5.95 5.95 0 0 0 1.4 2.15 5.951 5.951 0 0 0 2.15 1.4c.772.3 1.654.506 2.946.564 1.295.06 1.708.073 5.004.073 3.297 0 3.71-.014 5.005-.073 1.292-.058 2.174-.264 2.946-.564a5.95 5.95 0 0 0 2.15-1.4 5.951 5.951 0 0 0 1.4-2.15c.3-.772.505-1.654.564-2.946.06-1.295.073-1.708.073-5.004 0-3.297-.014-3.71-.073-5.005-.059-1.292-.264-2.174-.564-2.946a5.95 5.95 0 0 0-1.4-2.15 5.949 5.949 0 0 0-2.15-1.4c-.772-.3-1.654-.505-2.946-.564-1.295-.06-1.708-.073-5.005-.073zm0 2.187c3.241 0 3.625.012 4.905.07 1.183.054 1.826.252 2.254.418.567.22.97.484 1.396.908.424.425.687.83.907 1.396.167.428.364 1.07.418 2.254.059 1.28.071 1.664.071 4.905 0 3.24-.012 3.624-.07 4.904-.055 1.184-.252 1.826-.419 2.254a3.76 3.76 0 0 1-.907 1.396c-.425.424-.83.688-1.396.908-.428.166-1.07.364-2.254.418-1.28.058-1.664.07-4.905.07-3.24 0-3.625-.012-4.904-.07-1.184-.054-1.827-.252-2.254-.418a3.761 3.761 0 0 1-1.396-.908 3.76 3.76 0 0 1-.908-1.396c-.166-.428-.364-1.07-.418-2.254-.058-1.28-.07-1.663-.07-4.904 0-3.241.012-3.625.07-4.905.054-1.184.252-1.826.418-2.254.22-.567.483-.971.908-1.396A3.76 3.76 0 0 1 4.796 2.4c.427-.166 1.07-.364 2.254-.418 1.28-.058 1.663-.07 4.904-.07zm0 3.718a6.233 6.233 0 1 0 0 12.466 6.233 6.233 0 0 0 0-12.466zm0 10.279a4.046 4.046 0 1 1 0-8.092 4.046 4.046 0 0 1 0 8.091zM19.89 5.383a1.457 1.457 0 1 1-2.913 0 1.457 1.457 0 0 1 2.913 0z"
                        fill="#1A202C"
                      />
                    </svg>
                  </a>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <img
            src={logo}
            alt="pod hero"
            className={`md:w-275 md:h-275 mt-5 rounded-lg mdx:w-250 mdx:h-250 xl:h-335 xl:w-335 ${
              albumStyle.shadow
            }`}
          />
        </div>
        {/* ################################### HEADER END ####################################### */}

        {/* ###############################    LISTEN SMALL START ########################################### */}
        <div className="md:hidden mt-20">
          <div className="font-medium text-lg text-center text-gray-900 ">
            Listen and Subscribe
          </div>

          <WhereToListenSmall />
        </div>
        <div className="hidden md:block">
          <div className="text-center w-full text-gray-900 font-semibol text-2xl  mt-32 mb-10  ">
            Listen and subscribe
          </div>
          <WhereToListen />
        </div>
        {/* ###############################    LISTEN  END ########################################### */}

        {/* ###############################    ABOUT START ########################################### */}
        <div className="text-center p-8 max-w-md md:max-w-lg m-auto mt-16 lg:max-w-xl lgx:max-w-2xl lgx:mt-24">
          <div className=" text-center text-xl font-medium text-gray-900 md:font-semibol md:text-3xl md:mt-6 ">
            About Us
          </div>
          <div
            className="text-gray-700 mt-12
           md:text-xl"
          />
          <div className="mt-3 text-gray-700 leading-relaxed md:text-xl">
            What Day Is It? podcast is the digital version of happy hour with
            your besties. PLAY Digital Founder Bailey Stanworth and her right
            hand gal Jacci Rai are covering every girl problem, life struggle
            and biz reality there is. Get ready to cheers and celebrate the
            inspirational and relatable af stories from girls (and gents) who
            may or may not have it all together. Also, FYI, it’s not drinking
            alone if you’re listening to WDII!
          </div>
          <div className="mt-3 text-gray-700 leading-relaxed md:text-xl" />
          <ul className={`flex justify-center mt-12 md:mt-16 text-gray-900`}>
            {data.site.siteMetadata.facebook !== "" ? (
              <li className="">
                <a href={data.site.siteMetadata.facebook}>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.966 24H1.34C.6 24 0 23.4 0 22.66V1.064c0-.74.6-1.34 1.34-1.34h21.596c.74 0 1.34.6 1.34 1.34V22.66c0 .74-.6 1.34-1.34 1.34H16.75v-9.4h3.155l.473-3.664H16.75v-2.34c0-1.06.294-1.783 1.816-1.783h1.94V3.534c-.336-.044-1.488-.144-2.827-.144-2.797 0-4.712 1.707-4.712 4.843v2.702H9.803V14.6h3.163V24z"
                      fill="#1A202C"
                    />
                  </svg>
                </a>
              </li>
            ) : (
              <> </>
            )}

            {data.site.siteMetadata.twitter !== "" ? (
              <li className="">
                <a href={data.site.siteMetadata.twitter}>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.184 2.142a9.728 9.728 0 0 1-2.86.804A5.096 5.096 0 0 0 23.514.12 9.81 9.81 0 0 1 20.35 1.36a4.912 4.912 0 0 0-3.635-1.612c-2.749 0-4.979 2.287-4.979 5.107 0 .4.043.789.128 1.163C7.725 5.804 4.056 3.773 1.598.679a5.2 5.2 0 0 0-.674 2.57c0 1.771.88 3.335 2.216 4.251a4.89 4.89 0 0 1-2.257-.637v.063c0 2.475 1.717 4.54 3.997 5.007a4.75 4.75 0 0 1-1.313.18c-.32 0-.634-.03-.937-.09.634 2.027 2.472 3.505 4.652 3.544a9.834 9.834 0 0 1-7.374 2.117 13.867 13.867 0 0 0 7.635 2.293c9.162 0 14.17-7.78 14.17-14.53 0-.222-.004-.444-.012-.662a10.223 10.223 0 0 0 2.483-2.643z"
                      fill="#1A202C"
                    />
                  </svg>
                </a>
              </li>
            ) : (
              <> </>
            )}

            {data.site.siteMetadata.instagram !== "" ? (
              <li className="">
                <a href={data.site.siteMetadata.instagram}>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.954-.275c-3.296 0-3.71.014-5.004.073-1.292.059-2.174.264-2.946.564a5.95 5.95 0 0 0-2.15 1.4 5.95 5.95 0 0 0-1.4 2.15c-.3.772-.506 1.654-.565 2.946-.059 1.295-.073 1.708-.073 5.005 0 3.296.014 3.71.073 5.004.06 1.292.265 2.174.565 2.946a5.95 5.95 0 0 0 1.4 2.15 5.951 5.951 0 0 0 2.15 1.4c.772.3 1.654.506 2.946.564 1.295.06 1.708.073 5.004.073 3.297 0 3.71-.014 5.005-.073 1.292-.058 2.174-.264 2.946-.564a5.95 5.95 0 0 0 2.15-1.4 5.951 5.951 0 0 0 1.4-2.15c.3-.772.505-1.654.564-2.946.06-1.295.073-1.708.073-5.004 0-3.297-.014-3.71-.073-5.005-.059-1.292-.264-2.174-.564-2.946a5.95 5.95 0 0 0-1.4-2.15 5.949 5.949 0 0 0-2.15-1.4c-.772-.3-1.654-.505-2.946-.564-1.295-.06-1.708-.073-5.005-.073zm0 2.187c3.241 0 3.625.012 4.905.07 1.183.054 1.826.252 2.254.418.567.22.97.484 1.396.908.424.425.687.83.907 1.396.167.428.364 1.07.418 2.254.059 1.28.071 1.664.071 4.905 0 3.24-.012 3.624-.07 4.904-.055 1.184-.252 1.826-.419 2.254a3.76 3.76 0 0 1-.907 1.396c-.425.424-.83.688-1.396.908-.428.166-1.07.364-2.254.418-1.28.058-1.664.07-4.905.07-3.24 0-3.625-.012-4.904-.07-1.184-.054-1.827-.252-2.254-.418a3.761 3.761 0 0 1-1.396-.908 3.76 3.76 0 0 1-.908-1.396c-.166-.428-.364-1.07-.418-2.254-.058-1.28-.07-1.663-.07-4.904 0-3.241.012-3.625.07-4.905.054-1.184.252-1.826.418-2.254.22-.567.483-.971.908-1.396A3.76 3.76 0 0 1 4.796 2.4c.427-.166 1.07-.364 2.254-.418 1.28-.058 1.663-.07 4.904-.07zm0 3.718a6.233 6.233 0 1 0 0 12.466 6.233 6.233 0 0 0 0-12.466zm0 10.279a4.046 4.046 0 1 1 0-8.092 4.046 4.046 0 0 1 0 8.091zM19.89 5.383a1.457 1.457 0 1 1-2.913 0 1.457 1.457 0 0 1 2.913 0z"
                      fill="#1A202C"
                    />
                  </svg>
                </a>
              </li>
            ) : (
              <></>
            )}
          </ul>

          <div className=" text-center text-xl font-medium text-gray-900 md:font-semibol md:text-3xl mt-16 lgx:mt-24 ">
            Send in your Questions
          </div>
          <div className="mt-6 mb-6 text-gray-700 leading-relaxed md:text-xl">
            Got any questions? want to send us feedback or a comment. Email us!
          </div>
          <a
            className="mt-6"
            href="mailto:whatdayisitpodcast@gmail.com?subject=Question Submission"
          >
            Click here to submit your question
          </a>
          <Newsletter />
        </div>
        {/* ###############################    ABOUT END ########################################### */}
        {/* ###############################    SUPPORT START ########################################### */}
        <div className="w-full bg-gray-100 text-center pb-8 md:pb-16 mt-16 lgx:mt-24">
          <SupportUs />
        </div>
        {/* ###############################    SUPPORT END ########################################### */}

        <div className="mt-16 md:mt-20 pl-4 pr-4 max-w-2xl m-auto lg:max-w-3xl lg:pl-0 lg:pr-0 lgx:max-w-960 xl:max-w-5xl">
          <div className="font-medium text-2xl md:text-3xl md:mb-12 md:mt-12 mb-8 text-gray-900 md:max-w-2xl md:m-auto md:mb-8 lg:max-w-3xl lg:ml-6 lg:mr-6 lgx:max-w-960 lgx:mx-12 xl:max-w-5xl">
            Episodes
          </div>

          {chunk(posts.slice(0, count), 3).map((chunk, i) => (
            <div>
              {chunk.map(node => (
                <Link to={node.id} className="no-underline">
                  <div
                    className={`pl-4 pr-4 pt-8 pb-8 ${
                      albumStyle.box
                    } mb-8 md:max-w-2xl md:m-auto md:mb-8 lg:max-w-3xl lg:mx-6 lgx:max-w-960 lgx:mx-12 xl:max-w-5xl lgx:pl-8`}
                  >
                    {/* <div>{node.title}</div> */}
                    <div className="text-gray-700 text-sm">
                      {formatDate(node.pubDate)}
                    </div>
                    <div className="font-medium text-gray-900 text-base mt-2 lgx:text-xl">
                      {node.title}
                    </div>
                    <div className="mt-2 md:hidden">
                      {formatSubTitle(node.itunes.summary)}
                    </div>
                    <div className="mt-2 hidden md:block">
                      {node.itunes.summary}
                    </div>
                    <div className="text-sm text-gray-700 font-medium mt-2">
                      {formatTime(node.itunes.duration)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
          <div className="flex justify-center mt-16 lgx:max-w-960 lgx:mx-12">
            <button
              onClick={() => setCount(count + 5)}
              className={` ${
                albumStyle.footer
              } text-gray-900 font-medium py-3 px-8 rounded`}
            >
              <span>Load More</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allFeedGatsbyBlog {
      totalCount
      edges {
        node {
          title
          pubDate
          id
          content {
            encoded
          }
          itunes {
            duration
            summary
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        twitter
        instagram
        facebook
      }
    }
  }
`;

function formatTime(timeString) {
  var pieces = timeString.split(":");
  var hour, minute, second;
  var time;

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

function formatDate(dateString) {
  return dateString.substring(4, 16);
}

function formatSubTitle(subTitle) {
  return truncate(subTitle, {
    length: 100, // maximum 30 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods
  });
}

export default IndexPage;
