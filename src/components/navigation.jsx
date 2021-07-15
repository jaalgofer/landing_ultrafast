import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MyUser, LoadStatus } from '../context';

const fetchAuth = async (setloading) => new Promise(async (resolve, reject) => {
  setloading(true)
  let res = await fetch(`https://auth.mykommu.com/t/auth/authorize`).catch(err => {
    console.log(err);
    reject(err)
  })
  let resp = await res.json()
  console.log(resp);
  if (!resp.token) reject(resp.err || undefined)
  else resolve({...resp})
})

export const Navigation = (props) => {
  const user = useContext(MyUser)
  const [ token, settoken ] = useState('')
  const [ loading, setloading ] = useState(false)
  const loadVal = useContext(LoadStatus)
  // console.log(token);

  useEffect(() => {
    loadVal.change(loading)
  }, [ loading ])

  const hs = useHistory()

  const signin = async () => {
    fetchAuth(setloading).then((res) => {
      console.log(res);
      if (res.successful) {
        setloading(false)
        return settoken(res.payload.token)
      }
      else {
        setloading(false)
        return window.open(`https://auth.mykommu.com/qa/login?continue=${window.location.href}`, 'same', false)
      }
    }).catch((err) => {
      console.log(err);
      setloading(false)
      window.open(`https://auth.mykommu.com/qa/login?continue=${window.location.href}`, 'same', false)
    });
  }
  const callF = () => hs.push('/cfp')

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            React Landing Page
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                about
              </a>
            </li>
            <li>
              <a href='#speaker' className='page-scroll'>
                Speaker
              </a>
            </li>
            <li>
              <a href='#tracks' className='page-scroll'>
                Tracks
              </a>
            </li>
            <li>
              <a href='#callforpapers' className='page-scroll'>
                Expose
              </a>
            </li>
            <li>
              <a href='#partnership' className='page-scroll'>
                Sponsors
              </a>
            </li>
            <li>
              <a href='#group' className='page-scroll'>
                Group
              </a>
            </li>
            <li>
              <button type='submit' className='btn btn-custom btn-lg' onClick={() => !user.email ? signin() : callF()}>
                {!user.email ? 'Join With Kommu' : 'Call for a paper'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
