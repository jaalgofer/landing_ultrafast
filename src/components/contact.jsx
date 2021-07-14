export const Contact = ({ data }) => {

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
              <button type='submit' className='btn btn-custom btn-lg'>
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
