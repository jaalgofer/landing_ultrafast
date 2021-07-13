export const Navigation = (props) => {
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
              <a href='#partnership' className='page-scroll'>
                Partnership
              </a>
            </li>
            <li>
              <button type='submit' className='btn btn-custom btn-lg'>
                Join With Kommu
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
