import { FC, useState } from "react"
import { Box } from "@chakra-ui/react"
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom"
import { update_local_val } from "../variables/localstorage"



const LoginComp: FC<authFace> = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const registration_url = 'https://detaapis_a_t-1-e9437566.deta.app/user-generation'
    const login_url = 'https://detaapis_a_t-1-e9437566.deta.app/log-in'
    const navigate = useNavigate()

    const inPlaceText = "Min 8 character"

    const setDefault = () => {
        setUsername("")
        setPassword("")
    }
    
    const registerNewUser = async () => {
        
        await axios.post(registration_url, {
            username: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response => {
            const code = Response.data.code
            if (code == 301) {
                swal("Sorry!", "username exists Please select another username", "error");
                setDefault()
            }
            else if (code == 602) {
                swal("Sorry!", "error occured on Creating the user please try agian later", "error");
                setDefault()
            }
            else {
                swal("Success!", "successfully created the User with the username " + username, "success");
                update_local_val(username , address)
                setDefault()
                navigate("/chat")
            }
        }).catch(error => {
            swal("Sorry!", "Your registration failed  try agian later", "error");
            console.log(error)
            setDefault()

        })

    }


    const loginUser = async () => {
        await axios.post(login_url, {
            username: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(Response => {
            const code = Response.data.code
            if (code == 402) {
                swal("Sorry!", "user does not exists", "error");
                setDefault()
            }
            else if (code == 401) {
                swal("Sorry!", "Wrong Password", "error");
                setDefault()
            }
            else {
                swal("Success!", "Login successfully with the username " + username, "success");
                console.log(Response)
                setAddress(Response.data.address_code)
                update_local_val(username , address)
                setDefault()

                navigate("/chat")
            }
        }).catch(AxiosError => {
            swal("Sorry!", "The is not been abel to send to server Please try again .", "error");
            console.log(AxiosError.message)
            setDefault()
        })


    }

    const handle_auth = () => {
        
        if(props.isLogin) {
            return loginUser()
        } 
        return registerNewUser()
    }

    


    return (
        <>
            <Box className="bg-transparent flex-1 text-navy-blue py-6 sm:py-8 lg:py-12" fontFamily={"Oswald"}>
                <Box className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className=" text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">{props.isLogin ? "Login" : "Register"}</h2>

                    <Box className="max-w-lg  mx-auto">
                        <Box className="flex flex-col gap-4 p-4 md:p-8">
                            <Box>
                                <label htmlFor="email" className="inline-block text-white text-sm sm:text-base mb-2">Username</label>
                                <input name="email" value={username} onChange={(event) => { setUsername(event.target.value) }} className="w-full bg-gray-100 bg-opacity-50 text-white focus:text-gray-800 border focus:bg-white rounded outline-none transition duration-100 px-3 py-2"
                                placeholder={inPlaceText}
                                />
                            </Box>

                            <Box>
                                <label htmlFor="password" className="inline-block text-white text-sm sm:text-base mb-2">Password</label>
                                <input name="password" value={password} type={"password"} onChange={(event) => { setPassword(event.target.value) }} className="w-full text-white bg-gray-100 bg-opacity-50 focus:text-gray-800 border focus:bg-white rounded outline-none transition duration-100 px-3 py-2" 
                                placeholder={inPlaceText}
                                />
                            </Box>

                            <button onClick={handle_auth} className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3
                            disabled:bg-gray-600"
                            disabled={(username.length >= 8 && password.length >= 8) ? false : true}
                            >{props.isLogin ? "Login" : "Register"}</button>
                        </Box>

                        <Box className="flex justify-center items-centerp-4">
                            <p className="text-white text-sm text-center">{!props.isLogin ? "Already have an account ? " : "Don't have an account ? "} <a onClick={() => props.handelChange(!props.isLogin)} className="text-indigo-500 hover:cursor-pointer hover:text-indigo-600 active:text-indigo-700 transition duration-100">{!props.isLogin ? "Login" : "Register"}</a></p>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default LoginComp


interface authFace {
    isLogin: boolean
    handelChange: (val: boolean) => void
}