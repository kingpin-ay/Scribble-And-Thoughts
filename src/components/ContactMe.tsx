import { Box } from "@chakra-ui/react"
import { useState } from "react"
import icons from "../variables/icons"
import axios from 'axios';
import swal from 'sweetalert'

export default function ContactMe() {
    const reachoutContent = "We're always happy to hear from our visitors! Whether you have a question about our products or services, a suggestion for how we can improve, or just want to say hello, we'd love to hear from you .To get in touch with us, simply fill out the contact form below with your name, email address, and message. We'll do our best to get back to you within 24-48 hours. You can also email us directly at the email address below ."

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [feedback, setFeedback] = useState("")

    const sendFeed = async () => {
        const data = {
            name: name,
            email: email,
            feedback: feedback
        }

        console.log(data)
        
        const url = 'https://detaapis_a_t-1-e9437566.deta.app/send-feedback'

        axios.post(url, {
            name: name,
            email: email,
            feedback: feedback
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                swal("Thank You!", "Thank you for taking the time to submit a feedback I will reach you as soon as possible", "success");
                setName("")
                setEmail("")
                setFeedback("")

                console.log(response.data);
            })
            .catch(error => {
                swal("Sorry!", "your feedback is not submited please try again later", "error");
                console.error(error);
            });
    }

    return (
        <>
            <Box className="text-gray-600 body-font relative" fontFamily="'Oswald', 'sans-serif'" color={"white"}>
                <Box className="container px-5 py-24 mx-auto">
                    <Box className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Reach Out to Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{reachoutContent}</p>
                    </Box>
                    <Box className="lg:w-1/2 md:w-2/3 mx-auto">
                        <Box className="flex flex-wrap -m-2">
                            <Box className="p-2 w-1/2">
                                <Box className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-200">Name</label>
                                    <input type="text" id="name" name="name" value={name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-white focus:text-mirage py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={(event) => setName(event.target.value)} />
                                </Box>
                            </Box>
                            <Box className="p-2 w-1/2">
                                <Box className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-200">Email</label>
                                    <input type="email" id="email" name="email" value={email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-white focus:text-mirage py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-temp-mail-org="0" required onChange={(event) => setEmail(event.target.value)} />
                                </Box>
                            </Box>
                            <Box className="p-2 w-full">
                                <Box className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-200">Message</label>
                                    <textarea id="message" name="message" value={feedback} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32  focus:text-mirage text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required onChange={(event) => setFeedback(event.target.value)}></textarea>
                                </Box>
                            </Box>
                            <Box className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg disabled:opacity-50" disabled={(!name || !email || !feedback) ? true : false} onClick={sendFeed}>send</button>
                            </Box>
                            <Box className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-gray-200">ayushmondal001@gmail.com</a>
                                <p className="leading-normal my-5">Kasbah North
                                    <br />Kolkata, West Bengal, 700039, India.
                                </p>
                                <span className="inline-flex">
                                    <a className="text-white" href="https://www.youtube.com/channel/UCNTWx8YAn4uhiHuAjhR4rcw">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                                            <path d={icons.youtube}></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white" href="https://discord.gg/Fycw94eCjM">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                                            <path d={icons.discord}></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white" href="https://www.linkedin.com/in/ayush-mondal-a13023205/">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                                            <path d={icons.linkdin}></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white" href="https://github.com/kingpin-ay">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                                            <path d={icons.github}></path>
                                        </svg>
                                    </a>
                                </span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
