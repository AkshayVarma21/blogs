import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const PostWidget = ({ recentPosts }) => {
    // const [relatedPosts, setRelatedPosts] = useState([])

    // useEffect(()=>{

    // },[])
    console.log("recentPosts", recentPosts)
    return (
        <div className='bg-dark rounded-lg px-2 py-2 min-h-72'>
            <div className='text-blue font-extrabold text-center mb-2'>
                Recent Posts
            </div>
            {recentPosts?.map(post =>
                <div className='text-gray-light font-mono flex py-2 items-center' key={post.createdAt}>
                    <img className='rounded-full w-10 h-10' src={post?.featuredImage?.url} alt='Featured image'></img>
                    <Link href={`/post/${post.slug}`} className='pl-2 cursor-pointer'>
                        <div className='text-sm'>{post.title}</div>
                        <div className='text-xs'>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
                    </Link>

                </div>
            )}
        </div>
    )
}

export default PostWidget
