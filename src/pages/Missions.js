import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission/Mission';
import { fetchMission } from '../redux/Missions/Missions';

const Missions = () => {
  const missionsArray = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  const URL = 'https://api.spacexdata.com/v3/missions';

  const fetchData = async () => {
    const response = await fetch(`${URL}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const jsonRespnse = await response.json();
    // delete unwanted data
    jsonRespnse.forEach((u) => {
      const e = u;
      delete e.manufacturers;
      delete e.payload_ids;
      delete e.twitter;
      delete e.website;
      delete e.wikipedia;
    });
    dispatch(fetchMission(jsonRespnse));
  };

  useEffect(() => {
    if (missionsArray.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">..</th>
          </tr>
        </thead>
        <tbody>
          {
            missionsArray.map((mission) => {
              /* disable this rule because it is given from the API */
              /* eslint-disable camelcase */
              const {
                mission_name,
                mission_id,
                description,
                reserved,
              } = mission;
              return (
                <Mission
                  key={mission_id}
                  id={mission_id}
                  name={mission_name}
                  reserved={reserved}
                  description={description}
                />
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
