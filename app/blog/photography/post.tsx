import React from 'react'
import { Card, CardBody, User, CardFooter, CardHeader, Image } from '@nextui-org/react'
interface postType {
    src: string,
    altImg: string,
    desc: string,
    caption: string
}
export default function Post(props: postType) {
    return (
        <Card shadow='lg' className='font-raleway max-w-[72 min-h-[510px]  max-h-[510px] p-0 m-0 '> 
            <CardHeader className=''>
                <User
                    name="Dwis Aji"
                    description={props.desc}
                    avatarProps={{
                        src: "/blog/photo/gallery/avatar.jpeg",
                        radius: 'sm',
                        isBordered: true,
                    }}
                />
            </CardHeader>
            <CardBody className='w-full h-full p-0 m-0 '>
            <Image loading='eager' radius='none' className='w-full  object-cover p-0 m-0' alt={props.altImg} src={props.src} />
            </CardBody>
            <CardFooter className='h-full w-full p-2 '>
                <p className='font-light text-tiny lg:text-md text-ellipsis overflow-hidden'>{props.caption}</p>
            </CardFooter>
        </Card>

    )
}





{/* <div className='relative w-full md:w-64 bg-blue-500 h-full p-0 border-2 border-black/50'>
<div className='z-0'>
    <Image className=' p-0 m-0 ' src='/blog/photo/Artist.png' />
</div>
<div>
    <div className='flex flex-col gap-2 items-center bg-white -translate-y-12 x-10'>
        <div className='w-12 h-12 -translate-y-12 z-10 '>
            <Image src='/sakura hakuro.png' className='border-2 z-10' />
        </div>
        <p>How to do path blur on Affinity Photo?</p>
    </div>
</div>
</div> */}