import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
    return (

        <div className="max-w-xl rounded overflow-hidden bg-dark mb-4">
            <div className='flex items-center px-2 my-2 justify-between'>
                <div className="font-bold text-xl text-white text-left truncate w-52 hover:text-red">
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>
                </div>
                <div className='flex items-center w-52 justify-end'>
                    <img className='rounded-full w-10 h-10' src={post?.author?.photo?.url} alt='Author image'></img>
                    <div className='text-gray text-xs mx-2'>
                        <strong>{post?.author?.name}</strong>
                        <div>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
                    </div>
                </div>
            </div>
            <img className="w-full" src={post?.featuredImage?.url} alt="Post image" />
            <div className="px-2 py-4">
                <p className="text-gray truncate font-mono">
                    {post.excerpt}
                </p>
            </div>
        </div>
    )
}

export default PostCard