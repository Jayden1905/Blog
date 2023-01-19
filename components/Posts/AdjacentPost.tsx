'use client'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import moment from 'moment'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AdjacentProps, PostDetailProps } from '../../interfaces'
import { getAdjacentPosts } from '../../services/services'

type AdjacentPostProps = {
  post: PostDetailProps
}

export default function AdjacentPost({ post }: AdjacentPostProps) {
  const [load, setLoad] = useState(true)
  const [data, setData] = useState({
    next: {} as AdjacentProps,
    prev: {} as AdjacentProps,
  })

  const fetchAdjacentPosts = async (createdAt: string, slug: string) => {
    const adjacent = await getAdjacentPosts(createdAt, slug)
    setData({
      next: adjacent.next,
      prev: adjacent.previous,
    })
    setLoad(false)
  }

  useEffect(() => {
    fetchAdjacentPosts(post.createdAt, post.slug)
  }, [])

  return (
    <>
      {!load && (
        <div className='container mx-auto mb-14 h-full w-full flex justify-center items-center gap-14 px-0 flex-col lg:flex-row lg:px-14'>
          {data.prev && (
            <Link
              scroll={false}
              href={`/post/${data.prev.slug}`}
              className='shadow-md'
            >
              <div className='group flex h-full w-full flex-col md:h-[30rem] md:flex-row'>
                <div className='relative h-52 w-full md:h-full md:w-1/2'>
                  <div className='absolute top-0 left-0 hidden h-full w-full items-end justify-end bg-secondary p-4 opacity-0 !transition-all !duration-300 !ease-out group-hover:opacity-80 md:flex'>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className='translate-y-6 translate-x-6 text-white transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0'
                    />
                  </div>
                  <motion.img
                    className='h-full w-full object-cover object-center'
                    src={data.prev.featureImage.url}
                    alt={data.prev.slug}
                  />
                </div>
                <div className='flex h-52 w-full flex-col items-start bg-white p-4 text-start md:h-full md:w-1/2 md:p-10'>
                  <p className='mb-2 text-[0.75rem] tracking-widest text-secondary'>
                    {data.prev.categories.map((category) =>
                      category.name.toUpperCase()
                    )}
                  </p>
                  <h1 className='text-2xl font-extrabold'>{data.prev.title}</h1>
                  <p className='mt-4 text-sm font-thin opacity-60'>
                    {data.prev.excerpt}
                  </p>
                  <p className='mt-auto text-sm opacity-60'>
                    {moment(data.prev.createdAt).format('MMM DD, YYYY')}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {data.next && (
            <Link
              scroll={false}
              href={`/post/${data.next.slug}`}
              className='shadow-md'
            >
              <div className='group flex h-full w-full flex-col md:h-[30rem] md:flex-row'>
                <div className='relative h-52 w-full md:h-full md:w-1/2'>
                  <div className='absolute top-0 left-0 hidden h-full w-full items-end justify-end bg-secondary p-4 opacity-0 !transition-all !duration-300 !ease-out group-hover:opacity-80 md:flex'>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className='translate-y-6 translate-x-6 text-white transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0'
                    />
                  </div>
                  <motion.img
                    className='h-full w-full object-cover object-center'
                    src={data.next.featureImage.url}
                    alt={data.next.slug}
                  />
                </div>
                <div className='flex h-52 w-full flex-col items-start bg-white p-4 text-start md:h-full md:w-1/2 md:p-10'>
                  <p className='mb-2 text-[0.75rem] tracking-widest text-secondary'>
                    {data.next.categories.map((category) =>
                      category.name.toUpperCase()
                    )}
                  </p>
                  <h1 className='text-xl font-extrabold'>{data.next.title}</h1>
                  <p className='mt-4 text-sm font-thin opacity-60'>
                    {data.next.excerpt}
                  </p>
                  <p className='mt-auto text-sm opacity-60'>
                    {moment(data.next.createdAt).format('MMM DD, YYYY')}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      )}
    </>
  )
}
