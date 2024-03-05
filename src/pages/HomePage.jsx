import React from 'react'
import HomePageContent from '../components/home/HomePageContent'
import { Helmet } from 'react-helmet'
export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <HomePageContent />
        </>
    )
}
