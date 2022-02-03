import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket/Rocket';
import { fetchRocket } from '../redux/Rockets/Rockets';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockectsReducer);
  const dispatch = useDispatch();

  const URL = 'https://api.spacexdata.com/v3/rockets';

  const fetchData = async () => {
    const response = await fetch(`${URL}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const jsonRespnse = await response.json();
    // delete unwanted data
    const wantedData = jsonRespnse.map((rocket) => (
      {
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        image: rocket.flickr_images[0],
        description: rocket.description,
      }
    ));
    console.log(wantedData);
    dispatch(fetchRocket(wantedData));
  };

  useEffect(() => {
    if (rocketsArray.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="container">
      {
        rocketsArray.map((rocket) => {
          /* disable this rule because it is given from the API */
          /* eslint-disable camelcase */
          const {
            id,
            name,
            image,
            description,
            reserved,
          } = rocket;
          return (
            <Rocket
              key={id}
              id={id}
              name={name}
              image={image}
              description={description}
              reserved={reserved}
            />
          );
        })
      }
    </div>
  );
};

export default Rockets;
