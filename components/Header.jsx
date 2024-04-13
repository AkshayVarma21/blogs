import Link from 'next/link'
import React from 'react'

const Header = () => {

    const categories = [
        {name:"Travel", slug:"travel"},
        {name:"Web Development", slug:"web-dev"}
    ]
    return (
        <div className='container mx-auto px-8 mb-8'>
            <div className='border-b w-full inline-block border-slate-100 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className="cursor-pointer font-bold text-4xl text-white">My Blogs</span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header