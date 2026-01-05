import React from 'react'
import '../assets/css/blog.css'
const Blogs = [
    {
        heading: "Top 10 casual look ideas to dress up your kids",
        description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbir",
        img: "./src/assets/images/Blog/post-thumb-1.jpg",
        date: "22 Aug 2021",
        category: "Tips & Tricks"
    },
    {
        heading: "Latest trends of wearing street wears supremely",
        description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbir",
        img: "./src/assets/images/Blog/post-thumb-2.jpg",
        date: "25 Aug 2021",
        category: "Trending"
    },
    {
        heading: "10 Different Types of comfortable clothes ideas for women",
        description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbir",
        img: "./src/assets/images/Blog/post-thumb-3.jpg",
        date: "28 Aug 2021",
        category: "Inspiration"
    }
]

const Blog = () => {
  return (
    <section className='blog'>
        <div className='header-container'>
            <h2>Our Recent Blog</h2>
            <a href=''>
                Read All Articles 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 6L19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <div className="card-container">
            {
                Blogs.map((item,index)=>{
                    return (
                        <div key={index} className="card">
                            <img src={item.img} alt='card-img'/>
                            <div className='card-body'>
                                <div className='card-info'>
                                    <p className='date'>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" stroke-width="2"/>
                                            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/>
                                            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/>
                                            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        {item.date}
                                    </p>
                                    <p className='category'>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                                        </svg>
                                        {item.category}
                                    </p>
                                </div>
                                <h6>{item.heading}</h6>
                                <p className='description'>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Blog