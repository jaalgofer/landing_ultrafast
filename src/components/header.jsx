export const Header = ({ data }) => {
  return (
    <header id='header' className='text-center'>
      <div className='intro'>
        <div className='banner' style={{ background: `url(${data?.banner}) center center no-repeat` }} />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {data ? data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{data ? data.paragraph : 'Loading'}</p>
                <div className="row feature">
                  <ul>
                    <li><i className="fa fa-location-arrow" /><span>Online, 4 Languages</span></li>
                    <li><i className="fa fa-calendar" /><span>19/10/20 - 30/10/20</span></li>
                    <li><i className="fa fa-microphone" /><span>Over 117  Speakers</span></li>
                    <li><i className="fa fa-ticket" /><span>Free to attend</span></li>
                  </ul>
                </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-sm page-scroll'
                >
                  Join With Kommu
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
