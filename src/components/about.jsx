export const About = (props) => {
  return (
    <div id='about' className='section text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>About Us</h2>
        </div>
        <div className="row">
          <div className='col-xs-12 text-justify'>
            <p>{props.data ? props.data.paragraph : 'loading...'}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
