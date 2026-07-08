import { useState } from 'react'
import { getAiResponse } from './Ai';
import Header from './components/HeaderSection'
import Main from './components/MainSection'


getAiResponse("Where is myanmar")

export default function App(){
    return (
        <>
        <Header/>
        <Main/>
        </>
    )
}