import { FC } from "react"
import { Box, Button, Heading, Text } from "@chakra-ui/react"



const ExperienceCard: FC<experienceProps> = (props) => {
    return (
        <>
            <Box as="section" className="tablet:flex flex-row-reverse" fontFamily={"oswald"} paddingRight={{ base: "22px" }} paddingLeft={{ base: "22px" }} color="white" marginTop={70}>
                <Box className="flex-1 text-right">
                    <Heading as="h4" className="" size={{ base: "md", sm: "md", md: "md", lg: "lg" }} fontFamily={"oswald"}>
                        Reflections on Being a Web Development Mentor at <br />Mokam Global Technologies Education Hub
                    </Heading>
                    <Text fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "md" }} className="mt-6">
                        As a web development mentor at Mokam Global Technologies Education Hub, I had the opportunity to work with aspiring developers who were eager to learn and grow in their field. My role involved guiding them through various web development concepts, answering their questions, and providing support and feedback on their projects.
                    </Text>
                    <Button className="mt-10 letter-button" border={"1px solid rgb(5 ,68 ,94)"} backgroundColor={"rgb(5 ,68 ,94)"} _hover={{ backgroundColor: "transparent", color: "white" , border : "1px solid white"}}>
                        <a href={"https://drive.google.com/file/d/1XA-Fi3u5d_1zkZT6Ebg12avA89KBC4p5/view?usp=sharing"}
                            target="_blank"
                            className="p-2"
                        >
                            Letter
                        </a>
                    </Button>
                </Box>
                <Box className="tablet:w-[50px] tablet:h-[300px] max-[600px]:hidden bg-contain bg-no-repeat  flex-1 bg-exp-letter"></Box>
                {/* <Image src="/experience_mgteh.jpg" alt="Experience letter" flex={1} className="w-[50px] bg-cover"/> */}

            </Box>
        </>
    )
}


export default ExperienceCard



interface experienceProps {

}