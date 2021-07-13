export const Speakers = ({ title, description, data }) => {
  return (
    <div id={!title ? 'speaker' : title} className='speaker text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>{!title ? "Speakers" : title}</h2>
          <p>
            {!description ?
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."
              :
              description
            }
          </p>
        </div>
        <div id='row'>
          {data
            ? data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={d.img} alt='...' className='team-img' />
                  {d?.name &&
                    <div className='caption'>
                      {d?.name && <h4>{d.name}</h4>}
                      {d?.job && <p>{d.job}</p>}
                    </div>
                  }
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
