export const Header = ({data}) => {
  return (
    <header id='header' className='text-center'>
      <div className='intro' style={{	background: `url(${data?.banner}) center center no-repeat`}}>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {data ? data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{data ? data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
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
