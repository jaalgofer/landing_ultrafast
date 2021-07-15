import { useState, useEffect, useLayoutEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import jsCookie from 'js-cookie';

import Page from './Page';
import CFP from './CFP';
import JsonData from './data/data.json'

import { MyUser, LoadStatus } from './context';
import Loader from './components/Loader/Loader';

const getUserByCookie = async ({ cookie, setuser }) => {
  let user = await fetch('https://mykommu.com/p/login/auth', {
    method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `Bearer ${cookie}` }
  })
  if (user.ok || user.status < 400) {
    let juser = await user.json()
    let data = juser.data
    return setuser({...data})
  } else return setuser({})
}

const App = () => {
  const [ user, setuser ] = useState({})
  const [ loading, setloading ] = useState(true)
  const [ landingPageData, setLandingPageData ] = useState({})
  const [ cookie, setcookie ] = useState(jsCookie.get('kommu-session'))
  // console.log(cookie);
  useEffect(() => {
    setLandingPageData(JsonData)
    if (cookie) getUserByCookie({cookie, setuser})
  }, [])
  useLayoutEffect(() => {
    setcookie(jsCookie.get('kommu-session'))
  }, [])

  const myUser = MyUser
  const loadVal = useContext(LoadStatus)
  const assign = {
    status: loading, change: () => setloading(!loading)
  }

  return (
    <>
      <LoadStatus.Provider value={assign}>
        <BrowserRouter>
          <myUser.Provider value={ user } >
            <Switch>
              <Route exact  path="/cfp" >
                {CFP}
              </Route>
              <Route exact  path="/" >
                <Page user={ user } landingPageData={ landingPageData } ></Page>
              </Route>
            </Switch>
          </myUser.Provider>
        </BrowserRouter>
        <LoadStatus.Consumer>
          {({status}) => status && <Loader status={loadVal} />}
        </LoadStatus.Consumer>
      </LoadStatus.Provider>
    </>
  )
}

export default App
