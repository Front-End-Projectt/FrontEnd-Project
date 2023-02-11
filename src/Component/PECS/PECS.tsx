import { Box, Flex, Icon, IconButton, SimpleGrid } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { StarIcon, DeleteIcon } from '@chakra-ui/icons'
import categories from './Categories'
import Categories from './Categories'


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
        <SimpleGrid pt={10} columns={[1, 2, 2, 3, 4]} spacing='40px'>
          <Categories />
        </SimpleGrid>
    </>
  )
}

export default PECS