import useAxios from "./hooks/useAxios"

function App() {
  
  // use ====> useAxios Hooks
  const [response,error,loading] = useAxios({
    method: 'POST', // GET PULL DELETE
    url: 'Add Your link', // '/user/login/'
    headers:{
      token: 'cookies.get("token")'
    },
    data: {
      // send body
    }
  })
  //use ====> useAxios Hooks

  console.log('response : ' + response , 'error : ' + error , 'loading : ' + loading)
  return (
    <>

    </>
  )
}

export default App
