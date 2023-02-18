import { Container, Box } from "@chakra-ui/react";
import {  useState } from "react";
import AccountAuth from "../components/AccoutAuth";




export default function Login() {




  
  const [isLoginVar, setIsLoginVar] = useState(true)
 

  const updateIsLogin = (newVal: boolean) => {
    setIsLoginVar(newVal)
  }








  return (
    <>
      <Box className="bg-pixil-sunset loginPage">
        <Container as="div" className="w-full h-screen  align-middle flex items-center justify-center" >
          <AccountAuth isLogin={isLoginVar} handelChange={updateIsLogin}  />
        </Container>
      </Box>
    </>
  )
}
