import React from 'react'

// import { getPostDetails } from '../../services';
import { PostDetail, Categories, Author, Comments, CommentForm, PostWidget } from '../../components'

const PostDetails = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail />
                    <Author />
                    <CommentForm />
                    <Comments />
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PostDetails