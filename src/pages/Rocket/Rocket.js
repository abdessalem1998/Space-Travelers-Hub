/* eslint-disable */
const Rocket = (rocket) => {
  const {
    id,
    name,
    image,
    description,
  } = rocket;
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-3">
          <img src={image} alt="Logo" style={{ maxWidth: '100%', height: '100%' }} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title ">{name}</h5>
            <p className="card-text">{description}</p>
            <button type="button" className="btn btn-primary">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
