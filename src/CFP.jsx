import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const fetchAuth = async () => new Promise(async (resolve, reject) => {
  let res = await fetch(`https://auth.mykommu.com/t/auth/authorize`).catch(err => {
    console.log(err);
    reject(err)
  })
  let resp = await res.json()
  console.log(resp);
  if (!resp.token) reject(resp.err || undefined)
  else resolve({...resp})
})

export default function CFP(props) {
  var [ response, setresponse ] = useState()
  var [ token , settoken ] = useState('')
  const [ loading, setloading ] = useState(false)

  useEffect(() => {
    fetchAuth().then(async (res) => {
      console.log(res);
      if (res.successful) settoken(res.payload.token)
      else return false
      let cfp = await fetch(`http://www.mykommu.com/t/api/cfp/event/${props.event.id}`)
      let cfpData = await cfp.json()
      setresponse(cfpData)
    }).catch((err) => {
      console.log(err);
      window.open(`https://auth.mykommu.com/qa/login?continue=${window.location.href}`, 'same', false)
    });
  }, [])

  return (
    <>
      <div className="row">
        Call for Paper
      </div>
      <Link to="/">
        <button className="btn btn-custom btn-sm rounded" >
          Return
        </button>
      </Link>

    </>
  )
}