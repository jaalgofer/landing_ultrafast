import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MyUser } from '../context';

export const CallForPapers = (props) => {
  const user = useContext(MyUser)

  const signin = () => window.open('https://mykommu.com/login', 'same')
  const callF = () => window.open(props.data.url, 'same')

  return (
    <div id='callforpapers'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Do you want to expose your ideas?</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <Link to="/cfp" >
                {/*  onClick={() => !user.email ? signin() : callF()} */}
                <button type='button' className='btn btn-custom btn-lg' >
                  Call for a paper
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
