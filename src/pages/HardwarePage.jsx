import React from 'react'
import { Helmet } from 'react-helmet'
import HardwarePageContant from '../components/hardware/HardwarePageContant'

export default function HardwarePage() {
    return (
        <>
            <Helmet>
                <title>Hardware page</title>
                <meta name="description" content="The hardware page of the open source game development community" />
            </Helmet>
            <HardwarePageContant />
        </>
    )
}
