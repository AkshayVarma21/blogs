import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='bg-dark rounded-lg px-2 py-2 min-h-72'>
      <div className='text-blue font-extrabold text-center mb-2'>
        Recent Posts
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