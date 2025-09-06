"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Hardcoded clients array
const clients = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Ibis_Logo_2011.png",
    link: "https://client1.com",
    name: "Client 1",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Radisson_Blu_logo.svg/1280px-Radisson_Blu_logo.svg.png",
    link: "https://client2.com",
    name: "Client 2",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qdEMFNsv4mYZOyz8fHRhwu56yCfDioUfGA&s",
    link: "https://client3.com",
    name: "Client 3",
  },
  {
    image:
      "https://images.seeklogo.com/logo-png/8/2/marriott-logo-png_seeklogo-88741.png",
    link: "https://client4.com",
    name: "Client 4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaWB06deUQYU0xs1Rlp-fJV1SUhfmW7dvrQ&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Novotel_logo_%282016%29.svg/2560px-Novotel_logo_%282016%29.svg.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlrYwwGLoHW5W9YEmLgI3zd_wRE0CnGQvSw&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29iDgAJmZk2iGShPwXoCWHq8geY7b0vQCoA&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://www.bestwestern.com/content/dam/best-western/brand/brand-logos/best-western-plus-horizontal-logo-rgb.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Starwood_Hotels_and_Resorts_logo.svg/1024px-Starwood_Hotels_and_Resorts_logo.svg.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOE7haU2twCErHeMgvU4972xHaugNNqDjscQ&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Four_Seasons_logo.svg/1200px-Four_Seasons_logo.svg.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mandarin_Oriental_Hotel_Group_logo.svg/1200px-Mandarin_Oriental_Hotel_Group_logo.svg.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://images.seeklogo.com/logo-png/25/1/intercontinental-hotels-resorts-logo-png_seeklogo-252956.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToYxBzRUw7DxN_oRBtHFWHx0WL9iTix3Ijg&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOiMyPu1Ftcswxd32mc1kA1nlFYf35ANdLLg&s",
    link: "https://client5.com",
    name: "Client 5",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/St._Regis_Hotels_%26_Resorts_logo.svg/2560px-St._Regis_Hotels_%26_Resorts_logo.svg.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzxcoGVW5w7IMuGluFJ0ZGTffnYr63Uyffg&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UYwInxID2a9Npx_FeEK-7Upg-s4cg_HiUw&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVznyIDPATn2p1Ac9I782K1qkC-SFYgm2WcA&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image: "https://www.cdnlogo.com/logos/w/48/westin.svg",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://images.seeklogo.com/logo-png/38/1/crown-hotels-logo-png_seeklogo-385741.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://rwcatskills.com/my-rewards/images/resorts-world-catskills-logo.png",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuGG6tyTwn7YunKPOdSDkJhx8X9DhvxpyXA&s",
    link: "https://client5.com",
    name: "Client 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjdxPNpWfi1vD-x-hN7S0HJaT8nbHSoo4rQ&s",
    link: "https://client5.com",
    name: "Client 5",
  },

   {
    image:
      "https://meetingspanama.com/wp-content/uploads/MicrosoftTeams-image-3.jpg",
    link: "https://client5.com",
    name: "Client 5",
  },
   {
    image:
      "https://stories.hilton.com/uploads/2022/04/DoubleTree-Logo-Color_HR-1.png",
    link: "https://client5.com",
    name: "Client 5",
  },
   {
    image:
      "https://corporate.wyndhamhotels.com/wp-content/uploads/2019/11/WYNDHAM_HR_PMS-285-C@144-e1587994944441.png",
    link: "https://client5.com",
    name: "Client 5",
  },
   {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hskz9g4te12dXm3v1_11HahnKUpk3UMaIA&s",
    link: "https://client5.com",
    name: "Client 5",
  },
   {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9b2e139767947.560dc34190213.jpg",
    link: "https://client5.com",
    name: "Client 5",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ClientSlider = () => {
  const scrollingClients = [...clients, ...clients, ...clients]; // Repeat once for infinite scroll

  return (
    <section className="">
      <section className="flex flex-col mx-auto items-center justify-center gap-7 max-w-[1280px] lg:px-0 w-11/12">
        <div>
          <div className=" text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            className="font-['Playfair_Display',Helvetica] text-center font-medium text-[#243646] text-2xl lg:text-3xl xl:text-4xl leading-tight">
              100+ Training Partners Worldwide
            </motion.div>
          </div>
        </div>
      </section>
      <div className="w-screen mt-8 overflow-hidden ">
        <div className="flex w-max animate-scroll-left">
          {scrollingClients.map((client, index) => (
            <div
              key={`client-${index}`}
              className="flex-shrink-0 mx-4 transition-all duration-300 hover:scale-105"
              style={{ width: "200px", height: "192px" }}
            >
              <Link
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className=" object-contain"
                
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientSlider;
