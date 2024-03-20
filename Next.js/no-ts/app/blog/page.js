import Link from 'next/link'
import React from 'react'

const Blog = () => {

    const arr = [
        {
            id: 1,
            title: "Abhijit",
            description: "Good at Frontend"
        },
        {
            id: 2,
            title: "Barman",
            description: "Good at Backend"
        },
    ]



    return (
        <div className='flex-col m-8'>
            {
                arr.map((e, i) => (
                    <div key={i}>
                        <Link href={`blog/${e.id}`}>
                            <p>
                                ID:{e.id} TITLE:{e.title}  DESC:{e.description}
                            </p>
                        </Link>
                    </div>
                ))
            }
        </div >
    )
}

export default Blog
