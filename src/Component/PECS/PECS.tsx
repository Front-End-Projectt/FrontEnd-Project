import {Image, Box, Card, CardBody, Flex, Heading, Icon, IconButton, SimpleGrid } from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
import categories from './Categories'
import Categories from './Categories'
import { Outlet, Route, Routes } from 'react-router-dom'
import Cards from './Cards'
import SideNav from '../SideNav'

function PECS( ) {
  const [info, setInfo] = useState<any>({})
  // const [cards, setCards] = useState<any>()
console.log();

function checkInfo() {
  if(!Object.keys(info).length){
    return <></>
  }else{
    return [info].map( e => 
      <Card w={100} key={e.title}  maxW='sm' textAlign={"center"} borderRadius={30}  cursor={"pointer"} >
          <CardBody>
              <Image
              src= {e.img}
              alt={`${e.title}`}
              />
              <Heading mt='6' size='md'>{e.title}</Heading>
          </CardBody>
      </Card>
      )
  }
}


  return (
    <>
        <Flex p={4} justifyContent={"space-between"} border={"1px solid"}>
            <Flex p={4} >
              { checkInfo() }
            </Flex>
            <Flex alignItems={"end"}>
              <IconButton  size="lg" variant="ghost" icon={<StarIcon />} aria-label={''}/>
              <IconButton size="lg" variant="ghost" icon={<DeleteIcon />} aria-label={''}/>
            </Flex>
        </Flex>
        <SimpleGrid pt={10} columns={[2, 3, 4, 5]} spacing='40px'>

        <Outlet />

        </SimpleGrid>
    </>
  )
}

export default PECS