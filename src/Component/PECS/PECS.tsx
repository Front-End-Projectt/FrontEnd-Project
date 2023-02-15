import {Image, Box, Card, CardBody, Flex, Heading, Icon, IconButton, SimpleGrid, Stack, CloseButton, useBoolean } from '@chakra-ui/react'
import React, { ReactNode, useEffect, useState } from 'react'
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
import categories from './Categories'
import Categories from './Categories'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Cards from './Cards'
import SideNav from '../SideNav'
import { useSelector, useDispatch, useStore } from 'react-redux'
import CardsData from "./CardsData"
import {v4 as uuidv4} from 'uuid';
import CardProps from './Cards'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { jsx } from '@emotion/react'
import HiVolumeUp from 'react-icons'

function PECS( ) {
  // let location = useLocation();
  // console.log(location.pathname); // /PECS/Categories
  const delDispatch = useDispatch()
  const [flag, setFlag] = useBoolean()
  // const store = useStore(cardsStore)
  const globalState = useSelector((state:any)=> state.data)


  const speechAllPECS = () => {
      let wordsArr = globalState.map((e:any) => e.title)
      let sentence = wordsArr.join(" ")

      const text = sentence;
      const speech = new SpeechSynthesisUtterance(text)
      speech.rate = 2.5
      for (let voice of speechSynthesis.getVoices()) {
          if(voice.lang == "ar-SA"){
              speech.voice = voice
          }
      }
      
      speechSynthesis.speak(speech)
  }

  const delAllPECS = () =>{ 
    const action = {type: delAllPECS}
    delDispatch(action)
    cardSelector
   }
   const delPECS = (id:any) => { 
    const action = {type: delPECS, payload: id}
    delDispatch(action)
    cardSelector
  }


  const cardSelector = useSelector((state:any)=> {
    console.log(state.data, "useSelector");
    let arr = state.data
    console.log(arr, "arr");

      if(!Object.keys(state.data).length){
        return <></>
      }else{
        return state.data.map( (e:any, i:any) => 
          <Card  w={100} key={i} minW={{base:100, md: 120}}  maxW='md' textAlign={"center"} borderRadius={30}  cursor={"pointer"} border="2px #E2E8F0 solid">
                  <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={3}
                  top={2}
                  onClick={()=>delPECS(i)}
                  />
              <CardBody>
                  <Image src= {e.img}alt={`${e.title}`}/>
                  <Heading mt='6' size='md'>{e.title}</Heading>
              </CardBody>
          </Card>
          )
      }

    }
  )




  return (
    <Box p={4}>
      <Box bg="white" borderRadius={10} border="2px #E2E8F0 solid">
        <Stack spacing={8} direction='row' p={6} overflow="auto" >
              { cardSelector }
        </Stack>
        <Flex p={3} justifyContent={"end"} alignItems={"end"} >
              <IconButton size="lg" variant="ghost" icon={<Icon />} aria-label={''} _hover={{color:"#f00"}} onClick={()=>speechAllPECS()} />
              <IconButton  size="lg" variant="ghost" icon={<StarIcon/>} aria-label={''} _hover={{color:"#FFD700"}}	/>
              <IconButton size="lg" variant="ghost" icon={<DeleteIcon/>} aria-label={''} _hover={{color:"#f00"}} onClick={()=>delAllPECS()} />
        </Flex>
      </Box>
        <SimpleGrid pt={10} columns={[2, 3, 4, 5]} spacing='40px'>

        <Outlet/>


        </SimpleGrid>
    </Box>
  )
}

export default PECS

