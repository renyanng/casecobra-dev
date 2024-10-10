import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import Phone from "@/components/phone";

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <section>
        <MaxWidthWrapper className='px-24 pt-10 lg-grid lg:grid lg:grid-cols-3 
        sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img src="/casecobra-logo.png" className='w-full'alt="Casecobra Logo" />
              </div>
              <h1 className = 'relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:txt-6xl lg:text-7xl'>
              Your image on a  <span className='bg-green-600 px-2 text-white'> Custom</span> Phone Case
              </h1>
              <p className ='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Capture your favourite memories with your own, <span className='font-semibold'>one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your phone case.
                 </p>

                 <ul className= 'mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start' > 
                  <div className= 'space-y-2'>
                    <li className='flex gap-1.5 items-center text-left'>
                        <Check className='w-5 h-5 shrink-0 text-green-600' />
                        High-quality, durable material 
                    </li>
                    <li className='flex gap-1.5 items-center text-left'>
                      <Check className='w-5 h-5 shrink-0 text-green-600' />
                        5 year print guarantee
                    </li>
                    <li className='flex gap-1.5 items-center text-left'>
                        <Check className='w-5 h-5 shrink-0 text-green-600' />
                        Modern iPhone models supported 
                    </li>
                    <li className='h-4'></li>
                  </div>

                </ul>

                <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                  
                  <div className = 'flex -space-x-3'>
                    <img className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src = '/user1.jpg' alt = 'User Image' />
                    <img 
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src = '/user2ahyeon.jpg' alt = 'User 2 Ahyeon Image' 
                    />
                    <img 
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src = '/user5leijun.jpg' alt = 'User 5 LJ Image' 
                    />
                    <img className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src = '/user3jisoo.jpg' alt = 'User 3 Jisoo Image' />
                    <img 
                    className='inline-block object-fill h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src = '/user4minji.jpeg' alt = 'User 4 Minji Image' 
                    />
                    </div>
                    <div>

                    <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  </div>
                  
                      <p> <span className='font-semibold'> 1250 </span> happy customers</p>
                  </div>
                
                  </div>
                </div>
            </div>
          </div>
          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-2 h-fit'>
            <div className='relative md:max-w-xl'>
              <img 
              src='/your-image.png'
              className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block' 
              /> 
              <img 
              src='/line.png'
              className='absolute w-20 -left-6 -bottom-6 select-none' 
              />
              <Phone className='w-64' imgSrc='/testimonials/new1.jpg' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
     </div>
    
  )
}