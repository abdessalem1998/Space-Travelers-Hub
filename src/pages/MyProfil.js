import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedRocket = useSelector((state) => state.rockectsReducer)
    .filter((rocket) => rocket.reserved === true);
  const reservedMission = useSelector((state) => state.missionReducer)
    .filter((mission) => mission.reserved);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h2>My Missions</h2>
          <table className="table table-bordered">
            <tbody>
              {
                reservedMission.map((mission) => (
                  <tr key={mission.mission_id}>
                    <th scope="row">{mission.mission_name}</th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-sm">
          <h2>My Rockets</h2>
          <table className="table table-bordered">
            <tbody>
              {
                reservedRocket.map((mission) => (
                  <tr key={mission.id}>
                    <th scope="row">{mission.name}</th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
