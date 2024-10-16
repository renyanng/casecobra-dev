import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/phone";
import { Icons } from "@/components/icon";
import Link from "next/link";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";

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
      {/* value proposition section */}
      <section className='bg-slate-100 py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className = 'flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className = 'order-1 mt-2 tacking-tight text-center text-balance !leading tight font-bold text-5xl md:text-6xl text-gray-900'>
               What our {' '}
               <span className='relative px-2'> 
                customers {' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-800' />
                </span> {' '}
                say
                </h2>
                <img src='/snake-2.png' className= 'w-24 order-0 lg:order-2' alt='Testimonial' />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20>'
            >
              <div className='flex gap-0.5 mb-2'>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and <span
                  className='p-0.5 bg-slate-800 text-white'> the image is super clear</span> on the case I had before, the image started fading into yellow-ish colour after a couple weeks.
                  LOVE IT. "
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                className='rounded-full h-12 w-12 object-cover' 
                src='/user1.jpg' 
                alt='User 1'  
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'> Jennie </p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'> International KPOP artist</p>
                    </div>
                    </div>                </div>
            </div>
            {/* second user review */}
                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20>'
            >
              <div className='flex gap-0.5 mb-2'>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "I love my phone case—it reflects my style and keeps my device safe. <span
                  className='p-0.5 bg-slate-800 text-white'> The vibrant designs</span> let me express my personality, and { }
                  <span
                  className='p-0.5 bg-slate-800 text-white'>the durability</span>
                   {} gives me peace of mind while I create. 
                   "
                </p>
              </div>
              <div className='flex gap-4 mt-2 pt-7'>
                <img
                className='rounded-full h-12 w-12 object-cover' 
                src='/user2ahyeon.jpg' 
                alt='User 2'  
                />
                <div className='flex flex-col pt-0'>
                  <p className='font-semibold'> Ahyeon from Baby Monster </p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>South Korean Singer and Rapper </p>
                    </div>
                    </div>                </div>
            </div>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20>'
            >
              <div className='flex gap-0.5 mb-2'>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "这款手机壳设计简约，手感极佳，能够有效保护手机<span
                  className='p-0.5 bg-slate-800 text-white'>免受刮擦和摔落的伤害</span>。 最让我满意的是它的<span
                  className='p-0.5 bg-slate-800 text-white'>防滑性能</span>，让我在使用手机时更加安心。
                  作为小米的创始人，我一直强调用户体验，这款手机壳无疑为我们的手机增添了不少价值。"
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                className='rounded-full h-12 w-12 object-cover' 
                src='/user5leijun.jpg' 
                alt='User 5'  
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'> 雷軍 </p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>小米創始人</p>
                    </div>
                    </div>                </div>
            </div>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20>'
            >
              <div className='flex gap-0.5 mb-2'>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
                <Star className= 'h-5 w-5 text-green-600 fill-green-600'/>
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "手機殼就像我拍的電影，有些看著特別好，但實際上可能‘水’得很！這網站的手機殼，設計得像‘無敵戰士’，但一摔就變成‘無敵碎片’！
                  手機殼就像電影中的角色，雖然外表很重要，但最關鍵的還是<span
                  className='p-0.5 bg-slate-800 text-white'>內在</span>的保護力！ "
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                className='rounded-full h-12 w-12 object-cover' 
                src='/stephenchow.jpeg' 
                alt='Stephen Chow'  
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'> 周星馳 </p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>香港著名演員</p>
                    </div>
                    </div>                </div>
            </div>

          </div>
        </MaxWidthWrapper>
        <div className='pt-16'>
              < Reviews />
            </div>

      </section>

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Upload your photo and get {' '} 
                <span className='relative px-2 bg-green-600 text-white'>your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/horse.jpg'
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone className='w-60' imgSrc='/horse_phone.jpg' />
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'
              >
                Create your case now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}