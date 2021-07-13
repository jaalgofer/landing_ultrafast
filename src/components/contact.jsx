const _date = new Date()
export const Contact = ({ data }) => {

  return (
    <div>
      <div id='contact' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>{data?.titleEvent ? data.titleEvent : "React landing page"}</h2>
            <h3>
              {(data?.start && data?.end) ? data.start : `${_date.getDay()} - ${_date.getDay()} ${_date.getMonth()} ${_date.getFullYear()}`}
            </h3>
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
