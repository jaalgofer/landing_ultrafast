import './Loader.css';

export default function Loader() {
  return (
    <section className="loader_container" >
      <div className="blurred" />
      <div className="lds-ellipsis">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}