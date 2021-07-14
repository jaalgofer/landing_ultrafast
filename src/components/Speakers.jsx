export const Speakers = ({ id, title, description, data }) => {
  return (
    <div id={!id ? 'Speaker' : id} className='section speaker text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>{title ? title : "Speakers"}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={`figures${!id ? '' : ' notSpeaker'}`}>
          {data
            ? data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='team'>
                <div className='thumbnail'>
                  {' '}
                  <div className='img'>
                    <img src={d.img} alt='...' className='team-img' />
                  </div>
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
