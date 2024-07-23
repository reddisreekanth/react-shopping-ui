

import React, {useState} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Collections from './components/Collections'
import Footer from './components/Footer'

import {Gents, Ladies} from '../data'
import WomentCollection from './components/WomentCollection'


const MainPage = () => {

console.log(Gents)

const [gentsFashion, setGentsFashion] = useState(Gents)
const [ladiesFashion, setladiesFashion] = useState(Ladies)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion} />
        <WomentCollection ladiesFashion= {ladiesFashion} />
       
        <Footer />
    </div>
  )
}

export default MainPage