// it's a protected route it's can not be opened without logging in 

import { Box, Container, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { get_local_val } from "../variables/localstorage"

import Peer from "peerjs"



const Chat = () => {
  const [peerId, setPeerId] = useState("")
  const data = get_local_val()
  const navigate = useNavigate()
  const peer = new Peer();
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const [remotePeerId, setRemotePeerId] = useState("")


  // protecting this route
  useEffect(() => {
    if (!data.username) {
      navigate('/login')
    }

    peer.on('open', (id) => {
      console.log('My peer ID is: ' + id);
      setPeerId(id)
    });

    peer.on('call', async (call) => {

      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      }).then((mediaStream) => {
        currentVideoRef.current.srcObject = mediaStream
        currentVideoRef.current.play()
        call.answer(mediaStream); // Answer the call with an A/V stream.}


        call.on('stream', (remoteStream) => {

          // Show stream in some video/canvas element.
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play()
        })
      }).catch((err) => {
        console.log('Failed to get local stream', err);
      })

    })

  }, [data.username, data.address])





  const call = async () => {
    console.log(remotePeerId)

    await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    }).then((mediaStream) => {
      var call = peer.call(remotePeerId, mediaStream);

      currentVideoRef.current.srcObject = mediaStream
      currentVideoRef.current.play()

      call.on('stream', function (remoteStream) {

        // Show stream in some video/canvas element.
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play()


      });
    }).catch((err) => {
      console.log('Failed to get local stream', err);
    })


  }
  return (
    <Container boxSize={"5xl"} className="mt-12">
      <Text>
        Welcome {data.username}
      </Text>
      Your Id is {peerId}

      <input value={remotePeerId} onChange={e => setRemotePeerId(e.target.value)} />
      <button
        onClick={call}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Call
      </button>

      <Box>
        <Text>Your : </Text>
        <video ref={currentVideoRef} muted/>
      </Box>
      <Box>
        <Text>Member : </Text>
        <video ref={remoteVideoRef} />
      </Box>
    </Container>
  )

}

export default Chat 