import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Button from "@/component/ux/ButtonCustom"
import { collegePosts } from "@/data/postMockData";
import Post from "@/component/post/Post";
import AboutText from "@/component/profile/AboutText";

const CollegeProfile = () => {
  
  const CONTETN = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, libero explicabo. Temporibus hic praesentium numquam doloremque aspernatur. Consequatur assumenda quisquam nostrum veniam
   sunt distinctio neque voluptatum animi qui, earum impedit?
  Cum nam nihil, nulla ipsa in ea accusantium. Quae,
  necessitatibus repellendus, debitis ad pariatur ipsum dolores, eum quasi nemo architecto nesciunt vitae fugiat nisi sint? Dolore totam alias ex illo.
  Ipsum, officia est! Eveniet sapiente reiciendis te
  netur, optio iusto molestias inventore illum doloremque!
   Magnam perspiciatis tempora, totam cupiditate dolores tempore eligendi pariatur eaque architecto animi eveniet enim dolorum consectetur corrupti.
  Dolorum ducimus natus, enim architecto, error commodi totam
   sint cum mollitia rem illum nobis earum fugiat cupiditate similique minima.
    Recusandae fuga aliquid iure natus reiciendis incidunt asperiores, maxime commodi praesentium?
    jdaf Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque recusandae iusto hic ipsa laudantium non repellat
     similique magnam. Quae iure saepe nesciunt amet sequi deleniti libero illum repellendus dolorem est.
    A quis ipsum, aspernatur ad enim rerum id doloremque at reiciendis harum autem, animi sequi est nostrum.
     Quis ipsa, dignissimos, debitis quaerat adipisci inventore sit labore, aut at ea ab?` 
  return (
    <div className="w-4/5 flex flex-col items-center space-y-14 ml-4">
      <div className="w-full space-y-10">
        {/* About section */}
        <div className="w-full flex flex-col items-center gap-8">
          {/* college logo, name and location */}
          <div className="w-full flex flex-col items-center">
            {/* lgog */}
            <div
              className="h-20 w-20 rounded-full border-2 border-[#eeeeee] bg-[#d9d9d9]
            flex items-center justify-center"
            >
              <Image
                src="/network/college.png"
                alt="college.png"
                height={80}
                width={80}
                className="object-cover rounded-full"
              />
            </div>
            {/* about collge */}
            <div className="text-center">
              <h2 className="text-[16px] font-medium">
                Shikshya Mandir Higher Secondary School
              </h2>
              <p className="text-[12px] font-medium">
                Primary to Higher Secondary School, Mid-Baneshwor, Kathmandu
              </p>
              <p className="text-[12px] font-medium">Joined on Apr 7, 2025</p>
            </div>
          </div>
          {/* college/school description */}
          <div className="space-y-4">
            <h1 className="text-[24px] font-medium text-center">
              About the school
            </h1>
           <AboutText content={CONTETN} />
          </div>
        </div>
        {/* follow visit sites and share resume */}
        <div className="flex justify-center gap-8">
          <Button>
            <FiPlus /> Follow
          </Button>
          <Button >
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.05016 0.78955C6.20929 0.78955 6.36191 0.851932 6.47443 0.962972C6.58696 1.07401 6.65017 1.22462 6.65017 1.38165C6.65017 1.53869 6.58696 1.68929 6.47443 1.80033C6.36191 1.91137 6.20929 1.97375 6.05016 1.97375H3.25008C2.77268 1.97375 2.31483 2.1609 1.97725 2.49402C1.63968 2.82714 1.45003 3.27895 1.45003 3.75006V12.0395L1.45963 12.2211C1.50517 12.6584 1.71345 13.0635 2.04417 13.3581C2.37489 13.6527 2.80457 13.8158 3.25008 13.8158H11.6503C12.1277 13.8158 12.5856 13.6286 12.9231 13.2955C13.2607 12.9624 13.4504 12.5106 13.4504 12.0395V10.4606C13.4504 10.3035 13.5136 10.1529 13.6261 10.0419C13.7386 9.93083 13.8912 9.86845 14.0504 9.86845C14.2095 9.86845 14.3621 9.93083 14.4747 10.0419C14.5872 10.1529 14.6504 10.3035 14.6504 10.4606V12.0395C14.6504 12.8247 14.3343 13.5777 13.7717 14.1329C13.2091 14.6881 12.446 15 11.6503 15H3.25008C2.48114 15 1.74156 14.7086 1.18403 14.1861C0.626496 13.6635 0.293575 12.9496 0.254 12.1919L0.25 12.0395V3.75006C0.25 2.96488 0.566079 2.21187 1.1287 1.65666C1.69133 1.10146 2.45441 0.78955 3.25008 0.78955H6.05016ZM9.79986 0.0537644C9.90414 0.00663836 10.0199 -0.0100051 10.1335 0.00580577C10.2471 0.0216166 10.3537 0.0692191 10.4407 0.142974L16.0408 4.87979C16.1042 4.9335 16.1556 4.99969 16.1915 5.07411C16.2275 5.14853 16.2473 5.22955 16.2498 5.31197C16.2522 5.39439 16.2371 5.4764 16.2055 5.55274C16.174 5.62909 16.1266 5.69808 16.0664 5.75531L10.4663 11.0842C10.3815 11.1647 10.2746 11.2189 10.1589 11.2399C10.0432 11.2609 9.92376 11.2479 9.81548 11.2024C9.70721 11.157 9.61486 11.0812 9.54992 10.9844C9.48498 10.8875 9.45032 10.774 9.45025 10.6579V8.30846C8.63903 8.35898 7.87421 8.52398 7.09819 8.91556C6.18936 9.37424 5.22293 10.1637 4.14691 11.5232L3.9301 11.8026C3.85454 11.9021 3.7492 11.9755 3.62899 12.0126C3.50879 12.0496 3.37982 12.0484 3.26035 12.0091C3.14087 11.9698 3.03696 11.8944 2.96333 11.7936C2.88969 11.6928 2.85007 11.5717 2.85007 11.4474C2.85007 9.19187 3.39969 7.03425 4.58452 5.42531C5.68535 3.93085 7.31259 2.94085 9.45025 2.78533V0.592182L9.45665 0.50613C9.47112 0.408476 9.5101 0.31594 9.57004 0.236936C9.62998 0.157932 9.70898 0.0949664 9.79986 0.0537644ZM10.6503 3.35533C10.6503 3.51236 10.5871 3.66296 10.4745 3.774C10.362 3.88505 10.2094 3.94743 10.0503 3.94743C8.00461 3.94743 6.53417 4.79216 5.55574 6.12084C4.85332 7.07452 4.39251 8.29741 4.18211 9.66792C4.98213 8.84056 5.76375 8.25872 6.55177 7.86004C7.7382 7.26241 8.89023 7.10531 10.0503 7.10531C10.2094 7.10531 10.362 7.16769 10.4745 7.27873C10.5871 7.38977 10.6503 7.54037 10.6503 7.69741V9.26372L14.7584 5.35426L10.6503 1.87902V3.35533Z"
                fill="#0070EF"
              />
            </svg>
            Share Resume
          </Button>
          <Button>
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

            Visit Website
          </Button>
        </div>
      </div>
      <div className="w-full">
        <h1 className="bg-[#d9ebff] w-full text-[#333333] text-[14px] px-4 py-4 rounded-md">
          Posts uploaded by Shikshya Mandir Higher Secondary School
          </h1>
      </div>
      <div className="w-full">
        <Post posts={collegePosts} />
      </div>
    </div>
  );
}

export default CollegeProfile;