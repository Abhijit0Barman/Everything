import React from 'react'
import { notFound } from 'next/navigation'

const SinglePage = ({ params }) => {
    const { iD } = params

    if (iD === '3') {
        notFound()
    }


    return (
        <div>
            ID:-{iD}
        </div>
    )
}

export default SinglePage
