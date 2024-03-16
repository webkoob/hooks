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

  // use ====> useAxiosSAH Hooks // set auto headers
    const [responseSAH,errorSAH,loadingSAH] = useAxios({
      method: 'POST', // GET PULL DELETE
      url: 'Add Your link', // '/user/login/'
      data: {
        // send body
      }
    } , true) // true = set auto headers | false or null or '' = dont sending headers automatically
  //use ====> useAxiosSAH Hooks // set auto headers

  // use ====> useAxiosSAB Hooks // set auto body
    const [responseSAB,errorSAB,loadingSAB] = useAxios({
      method: 'POST', // GET PULL DELETE
      url: 'Add Your link', // '/user/login/'
      headers: {
        // send headers
      }
    } , true) // true = set auto body | false or null or '' = dont sending body automatically
  //use ====> useAxiosSAB Hooks // set auto body

  // use ====> useAxiosSAHB Hooks // set auto headers and body
  const [responseSAHB,errorSAHB,loadingSAHB] = useAxios({
    method: 'POST', // GET PULL DELETE
    url: 'Add Your link', // '/user/login/'
  } ,true ,true) // frist true = set auto headers | second true = set auto body | false or null or '' = dont sending headers and body automatically
//use ====> useAxiosSAHB Hooks // set auto headers and body

  console.log('response : ' + response , 'error : ' + error , 'loading : ' + loading)
  return (
    <>

    </>
  )
}

export default App
