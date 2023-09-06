import locationImg from "../../public/images/location.svg"

export default function Entry(prop) {
  return (
    <div>
    <section className="card--container">
        <img className="entry-image" alt="entry-image" src={`./public/images/${prop.data.imageURL}`}></img>
        <div className="entry-card">
            <section className="location--map">
                <img className="location-img" src={locationImg}></img>
                <h5 className="country">{prop.data.country}</h5>
                <a href={`${prop.data.googleLink}`} className="google-link" target="_blank">View on Google Maps</a>
            </section>
            <h1 className="location-city">{prop.data.location}</h1>
            <h5 className="entry-date">
                {prop.data.startDate} - {prop.data.endDate}
            </h5>
            <p className="entry-content">{prop.data.description}</p>
        </div>
    </section>
    <hr></hr>
    </div>
  );
};
