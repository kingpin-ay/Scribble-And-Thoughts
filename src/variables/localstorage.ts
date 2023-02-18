
import { useNavigate } from "react-router-dom"

export let l_username = ""
export let l_address = ""


export const update_local_val = (username : string , address : string) => {
    l_username = username
    l_address = address
}

export const get_local_val =() => {
    return {username : l_username , address : l_address}
}


