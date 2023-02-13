import { Box , Heading , Text } from "@chakra-ui/react"
import { FC } from "react"

const TechDescription : FC<BioProps> = (props)=> {
  return (
    <>
        <Box as="div" fontFamily="'Oswald', 'sans-serif'" color='white' flex={1} marginTop={{base: '30px' , lg:'10px'}}>
            <Heading size={{base: "lg" ,sm : "lg" , md : "lg" , lg : "xl" }}>
              {props.title}
            </Heading>
            <Heading size={{base : "sm" ,sm : "sm" , md : "sm" , lg : "md" }} marginTop={3}>
                {props.obj}
            </Heading>
            <Text marginTop={3} fontSize={{base : "sm" ,sm : "sm" , md : "sm" , lg : "md" }}>
              {props.content}
            </Text>
          </Box>
    
    </>
  )
}

interface BioProps {
    title: string,
    content: string,
    obj : string
  }

export default TechDescription