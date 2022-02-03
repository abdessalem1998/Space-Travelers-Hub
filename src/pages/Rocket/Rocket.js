import { useDispatch } from 'react-redux';
import { joinRocket, leaveRocket } from '../../redux/Rockets/Rockets';

const Rocket = (rocket) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    image,
    description,
    reserved,
  } = rocket;

  const joinHandler = () => {
    dispatch(joinRocket(id));
  };

  const leaveHandler = () => {
    dispatch(leaveRocket(id));
  };

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-3">
          <img src={image} alt="Logo" style={{ maxWidth: '100%', height: '100%' }} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title ">{name}</h5>
            <p className="card-text">
              {
                reserved
                  ? <span className="badge bg-info text-light">Reserved</span>
                  : <span className="badge bg-secondary" />
              }
              &nbsp;
              {description}
            </p>
            {
              reserved
                ? <button type="button" onClick={leaveHandler} className="btn btn-outline-secondary">Cancel Reservation</button>
                : <button type="button" onClick={joinHandler} className="btn btn-primary">Reserve Rocket</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
