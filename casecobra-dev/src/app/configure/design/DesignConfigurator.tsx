'use client'

import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import NextImage from 'next/image'
import { cn } from '@/lib/utils'
import { Rnd } from 'react-rnd'
import HandleComponent from '@/components/ui/handleComponent'
import { ScrollArea } from '@/components/ui/scroll-area'
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import { COLORS } from '@/validators/option-validator'
import { Label } from '@/components/ui/label'

interface DesignConfiguratorProps {
  configId: string
  imageURL: string
  imageDimensions: {
    width: number
    height: number
  }
}

const DesignConfigurator = ({ configId, imageURL, imageDimensions }: DesignConfiguratorProps) => {
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number]
  }>({
    color: COLORS[1],
  })

  return (
    <div className="relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div
        className="relative h-[-37.5rem overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed
       border-gray-300 p-12 text-center focus:outlin-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <NextImage
              width={896}
              height={1831}
              alt="phone image"
              src="/phone-template.png"
              className="pointer-events-none z-50 select-none"
            />
          </AspectRatio>

          <div className="absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]',
              `bg-zinc-950`
            )}
          />
        </div>

        <Rnd
          default={{
            x: 150,
            y: 205,
            width: imageDimensions.width / 4,
            height: imageDimensions.height / 4,
          }}
          className="absolute z-20 border-[3px] border-primary"
          lockAspectRatio={true}
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <NextImage src={imageURL} fill alt="Your Image" className="pointer-events-none" />
          </div>
        </Rnd>
      </div>
      <div className="h-[37.5rem] flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />

          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">Customize your case</h2>

            <div className="w-full h-px bg-zinc-200 my-6" />

            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({
                      ...prev,
                      color: val,
                    }))
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="mt-3 flex items-center space-x-3">
                    {COLORS.map((color) => (
                      <RadioGroup.Option
                        key={color.label}
                        value={color}
                        className={({ active, checked }) =>
                          cn(
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-none border-2 border-transparent',
                            {
                              [`border-${color.tw}`]: active || checked,
                            }
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default DesignConfigurator
