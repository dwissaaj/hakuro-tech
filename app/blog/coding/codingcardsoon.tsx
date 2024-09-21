import React from 'react'
import { Card, CardHeader, Image, CardFooter, Button, CardBody } from '@nextui-org/react'
import Link from 'next/link'
import { subtle } from 'crypto'

interface CodingCardSoon {
    source: string,
    altImg: string,
    headline: string,
    subtitle: string,
    buttonTitle: string,
    style: string
}
export default function CodingCardSoon({ altImg, source, headline, subtitle, style, buttonTitle, }: CodingCardSoon) {
    return (
        <Card isFooterBlurred className={`${style} font-raleway hover:-translate-y-1 transition ease-in-out `}>
            <CardHeader className="absolute z-10 top-1 flex-col items-start ">
                <p style={{color: 'white'}} className="font-bold text-sm lg:text-2xl shadow-2xl shadow-slate-100 bg-black/50 rounded-lg p-2">{headline}</p>
            </CardHeader>
            <Image
                removeWrapper
                alt={altImg}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={source}
            />
            <CardFooter className="absolute  bottom-0 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny text-white font-bold text-tiny">{subtitle}</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                    {buttonTitle}
                </Button>
            </CardFooter>
        </Card>

    )
}