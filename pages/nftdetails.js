import React from 'react'

//INTERNAL IMPORT 

import { Button, Catagory, Brand } from '../components/ComponentIndex'
import NFTDetailsPage from '../NFTDetailsPage/NFTDetailsPage'
const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage/>
      <Catagory/>
      <Brand/>
    </div>
  )
}

export default NFTDetails