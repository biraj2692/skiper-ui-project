"use client";

import ShareButton from "@/components/ui/share-button";
import WrapButton from "@/components/ui/wrap-button";
import { Apple, Camera, Facebook, Instagram, Linkedin } from "lucide-react";
import { Twinkle_Star } from "next/font/google";
import FlipLink from "../components/ui/text-effect-flipper";
import { div } from "framer-motion/client";
import { TextScroll } from "@/components/ui/text-scroll";
import { CardCarousel } from "@/components/ui/card-carousel";
import { SkiperCard } from "@/components/ui/skiper-card";
import { title } from "process";
import card1 from "/public/card1.jpg";
import card2 from "/public/card2.jpg";
import card3 from "/public/card3.jpg";
import card4 from "/public/card4.jpg";
import card5 from "/public/card5.jpg";
import card6 from "/public/card6.jpg";
import { cn } from "@/lib/utils";
import ImageCursorTrail from "@/components/ui/image-cursortrail"
import MaskedDiv from "@/components/ui/masked-div"
import ThemeToggleButton from "@/components/ui/theme-toggle-button";



const page = () => {

  // const images = [
  //   { src: '/my-app/public/card1.jpg', alt: '' },
  //   { src: '/my-app/public/card2.jpg', alt: '' },
  //   { src: '/my-app/public/card3.jpg', alt: '' },
  //   { src: '/my-app/public/card4.jpg', alt: '' }
  // ]


  // const images = [
  //   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  //   "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  //   "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  //   "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  //   "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  //   "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
  // ]

  return (
    //   {/* Hello Everyone
    // <WrapButton href='https://skiper-ui.com/docs/components/wrap-button'>
    //   <Camera className='animate-bounce'/>
    //   Get Started 
    //   </WrapButton>

    //   <ShareButton links={[{icon:Instagram},{icon: Apple},{icon:Linkedin},{icon:Facebook}]}>Share</ShareButton>

    //   <FlipLink href="https://x.com/guri_who">Behance</FlipLink>
    // <div>
    //   <div className='h-screen border-fuchsia-100 border-t-2'>
    //   </div>
    //   <div className='h-screen border-fuchsia-100 border-t-2'>
    //     <TextScroll text='Biraj is here' default_velocity={4} className='text-white'></TextScroll>

    //   </div>
    //   <div className='h-screen border-fuchsia-100 border-t-2'></div>
    // </div> */}

    // <CardCarousel
    //   images={images}
    //   autoplayDelay={2000}
    //   showPagination={true}
    //   showNavigation={true}
    // />
    // <SkiperCard

    //   title="Happy Coding"
    //   description="Code is Love"
    //   bgClass="w-1/2 lg:bg-gradient-to-tr"
    //   step1img1Class={cn(
    //     "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
    //     "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
    //     "md:group-hover:translate-y-2"
    //   )}
    //   step1img2Class={cn(
    //     "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
    //     "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
    //     "md:group-hover:-translate-y-6 "
    //   )}
    //   step2img1Class={cn(
    //     "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
    //     "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
    //     "md:group-hover:translate-y-2"
    //   )}
    //   step2img2Class={cn(
    //     "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
    //     "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
    //     "md:group-hover:-translate-y-6"
    //   )}
    //   step3imgClass={cn(
    //     "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
    //     "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
    //   )}


    //   image={
    //     {
    //       step1dark1: card1,
    //       step1light1: card1,
    //       step1dark2: card2,
    //       step1light2: card2,
    //       step2dark1: card3,
    //       step2dark2: card3,
    //       step2light1: card4,
    //       step2light2: card4,
    //       step3dark: card5,
    //       step3light: card5,
    //       step4light: card6,
    //       alt: 'Hello'
    //     }
    //   }
    // />
      // <ImageCursorTrail
      //   items={images}
      //   maxNumberOfImages={5}
      //   distance={25}
      //   imgClass="sm:w-40 w-28 sm:h-48 h-36  "
        
      // >
      //   <article className="relative z-50 flex flex-col items-center justify-center ">
      //     <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
      //       Images That Follow the Cursor Cooool Right
      //     </h1>
      //   </article>
      // </ImageCursorTrail>
      // <MaskedDiv className="h-80" maskType="type-3" size={5}>
      // <img className="" src="https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format" alt="" />
      // </MaskedDiv>
    <div className="text-amber-50 p-10">
      <ThemeToggleButton />

    </div>

  );
};

export default page;
