import { FC  , useState} from "react"
import { Box } from "@chakra-ui/react"



const LoginComp: FC<authFace> = (props) => {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    
    const handle_auth = () => {
        props.authenticateUser(username, password)
    }


    return (
        <>
            <Box className="bg-transparent flex-1 text-navy-blue py-6 sm:py-8 lg:py-12" fontFamily={"Oswald"}>
                <Box className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className=" text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">{props.isLogin ? "Login" : "Register"}</h2>

                    <form className="max-w-lg  mx-auto" onSubmit={(event) =>{event.preventDefault()}}>
                        <Box className="flex flex-col gap-4 p-4 md:p-8">
                            <Box>
                                <label htmlFor="email" className="inline-block text-white text-sm sm:text-base mb-2">Username</label>
                                <input name="email" onChange={(event) => {setUsername(event.target.value)}} className="w-full bg-gray-100 bg-opacity-50 text-white focus:text-gray-800 border focus:bg-white rounded outline-none transition duration-100 px-3 py-2" />
                            </Box>

                            <Box>
                                <label htmlFor="password" className="inline-block text-white text-sm sm:text-base mb-2">Password</label>
                                <input name="password"  onChange={(event) => {setPassword(event.target.value)}} className="w-full text-white bg-gray-100 bg-opacity-50 focus:text-gray-800 border focus:bg-white rounded outline-none transition duration-100 px-3 py-2" />
                            </Box>

                            <button onClick={handle_auth} className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">{props.isLogin ? "Login" : "Register"}</button>
                        </Box>

                        <Box className="flex justify-center items-centerp-4">
                            <p className="text-white text-sm text-center">{!props.isLogin? "Already have an account ? " : "Don't have an account ? "} <a  onClick={() => props.handelChange(!props.isLogin)} className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">{!props.isLogin ? "Login" : "Register"}</a></p>
                        </Box>
                    </form>
                </Box>
            </Box>

        </>
    )
}

export default LoginComp


interface authFace {
    isLogin : boolean
    handelChange : (val : boolean) => void
    authenticateUser : (username : string , password : string) => void
}