import { Button, Flex, Link } from '@chakra-ui/react'
import React from 'react'

function Buttons() {
  return (
   
        <Flex>
          <Link href='/SignIn' ><Button>SignIn</Button> </Link>
          <Link href='/Register'><Button >SignUp</Button></Link>
        </Flex>
 
  )
}

export default Buttons
