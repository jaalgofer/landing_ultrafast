import { useState, useEffect, useContext } from 'react';
import { MyUser, LoadStatus } from '../context';

const fetchAuth = async (setloading) => new Promise(async (resolve, reject) => {
  setloading(false)
  let res = await fetch(`https://auth.mykommu.com/t/auth/authorize`).catch(err => {
    console.log(err);
    reject(err)
  })
  let resp = await res.json()
  console.log(resp);
  if (!resp.token) reject(resp.err || undefined)
  else resolve({...resp})
})

export const Contact = ({ data }) => {
  const [ token, settoken ] = useState('')
  const [ loading, setloading ] = useState(false)
  const loadVal = useContext(LoadStatus)
  // console.log(token);

  useEffect(() => {
    loadVal.change(loading)
  }, [ loading ])

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

  return (
    <div>
      <div id='contact' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>{data?.titleEvent ? data.titleEvent : "React landing page"}</h2>
            <div className="row feature">
              <ul>
                <li><i className="fa fa-location-arrow" /><span>Online, 4 Languages</span></li>
                <li><i className="fa fa-calendar" /><span>19/10/20 - 30/10/20</span></li>
                <li><i className="fa fa-microphone" /><span>Over 117  Speakers</span></li>
                <li><i className="fa fa-ticket" /><span>Free to attend</span></li>
              </ul>
            </div>
            <div className="row">
              <p>Not logged yet?</p>
              <button type='button' className='btn btn-custom btn-lg' onClick={() => signin()} >
                Join With Kommu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Kommu. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
