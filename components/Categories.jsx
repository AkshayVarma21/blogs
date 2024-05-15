import React from 'react'
import Link from 'next/link';

const Categories = ({categories}) => {
  return (
    <div className='bg-dark rounded-lg px-2 py-2 min-h-72'>
    <div className='text-blue font-extrabold text-center mb-2'>
        Categories
    </div>
    {categories?.map(category =>
        <div className='text-gray-light font-mono flex py-2 items-center' key={category.id}>
            <Link href={`/category/${category.slug}`} className='pl-2 cursor-pointer'>
                <div className='text-sm'>{category.name}</div>
            </Link>

        </div>
    )}
</div>
  )
}

export default Categories