import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ContactMe from "../components/ContactMe";
import ExperienceCard from "../components/ExperienceCard";
import Features from "../components/Features";
import TechDescription from "../components/TechDescription";
import content from "../variables/futureContent";

export default function About() {

  const tech = {
    systemD : {
      title : "01",
      content : "System design creates scalable and reliable software by meeting functional and non-functional requirements.",
      obj: "The Importance of System Design"
    },
    blockchain : {
      title : "02",
      content : "Blockchain is a secure and transparent way to store and share data, resistant to tampering. Its decentralized nature makes it suitable for various applications.",
      obj: "The Power of Blockchain Technology"
    },

    ai : {
      title : "03",
      content : "AI tech has immense potential to transform our lives for the better, but we must ensure ethical development practices to maximize its benefits.",
      obj: "Vision on Artificial Intelligence"
    }


  }






  return (
    <>

      <div className="
      w-full
      h-full
      bg-about-cover 
      bg-cover 
      bg-no-repeat 
      bg-fixed
      flex
      py-12
      ">

        <Container as='section' maxW={{base : "" , sm : "container.sm" , md : "container.lg" , lg : "6xl" }}  marginTop={40}>

          <Box maxW={500} fontFamily="'Oswald', 'sans-serif'" paddingRight={{base : "22px"}} paddingLeft={{base : "22px"}} >
            <Heading as='h2' size={{base: "lg" ,sm : "lg" , md : "lg" , lg : "xl" }} color='white'  fontFamily='"Oswald", "sans-serif"' >
              Hi , I'm <span className="text-navy-blue">Ayush</span> 
            </Heading>
            <Heading as='h4' size={{base : "sm" ,sm : "sm" , md : "sm" , lg : "md" }} color='white' fontFamily="'Oswald', 'sans-serif'"  marginTop={5}>
              System Designer , Blockchain Developer , AI developer
            </Heading>

            <Text fontSize={{base : "sm" ,sm : "sm" , md : "sm" , lg : "md" }} color='white' marginTop={5}>
              Hey there! I'm a B.Tech student studying Computer Science and Engineering, and let me tell you, I'm absolutely thrilled to be working with blockchain technology and artificial intelligence! I'm a total Python, C/C++, and Javascript whiz, and I'm always looking for the next cool thing to learn, like Typescript and Rust. When I'm not busy coding, you can usually find me playing around with new tech, listening to music, or hanging out with my friends. So, if you're looking for a tech enthusiast with a radiant vibe, that's definitely me!
            </Text>
          </Box>

          <Box as="div" display={{base:'block',lg : "flex"}} justifyContent="space-between" marginTop={20} paddingRight={{base : "22px"}} paddingLeft={{base : "22px"}}   >
            <TechDescription title={tech.systemD.title} obj={tech.systemD.obj} content={tech.systemD.content}/>
            <TechDescription title={tech.blockchain.title} obj={tech.blockchain.obj} content={tech.blockchain.content}/>
            <TechDescription title={tech.ai.title} obj={tech.ai.obj} content={tech.ai.content}/>
          </Box>

          
          <ExperienceCard/>          
         <Features 
          title={content.decentralizedChat.title}
          contentOne={content.decentralizedChat.contentOne}
          contentTwo={content.decentralizedChat.contentTwo}
          security={content.decentralizedChat.security} 
          securityTag={content.decentralizedChat.securityTag}
          performanceTag = {content.decentralizedChat.performanceTag}
          performance = {content.decentralizedChat.Performance}
          rewardTag = {content.decentralizedChat.rewardTag}
          reward = {content.decentralizedChat.reward}
          userTag = {content.decentralizedChat.userTag}
          user = {content.decentralizedChat.user}
          /> 
        <ContactMe />
          
        </Container>
      </div>

      


    </>
  );
}
