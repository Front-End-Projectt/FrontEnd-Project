import { Box, Flex, Icon, IconButton, SimpleGrid } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
import categories from './Categories'
import Categories from './Categories'
import { Route, Routes } from 'react-router-dom'
import Cards from './Cards'


function PECS( ) {
  

  return (
    <>
        <Flex p={4} justifyContent={"space-between"} border={"1px solid"}>
            <Flex p={4}>
            </Flex>
            <Flex alignItems={"end"}>
              <IconButton  size="lg" variant="ghost" icon={<StarIcon />} aria-label={''}/>
              <IconButton size="lg" variant="ghost" icon={<DeleteIcon />} aria-label={''}/>
            </Flex>
        </Flex>
        <SimpleGrid pt={10} columns={[2, 3, 4, 5]} spacing='40px'>

          <Routes>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path='/Cards' element={<Cards/>}/>
          </Routes>

        </SimpleGrid>
    </>
  )
}

export default PECS