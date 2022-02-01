import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/Missions/Missions';

const Mission = (mission) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    description,
    reserved,
  } = mission;
  const joinHandler = () => {
    dispatch(joinMission(id));
  };

  const leaveHandler = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{description}</td>
      <td className="align-middle">
        {
          reserved
            ? <span className="badge bg-info text-light">A MEMBER</span>
            : <span className="badge bg-secondary">NOT A MEMBER</span>
        }
      </td>
      <td className="align-middle">
        {
          reserved
            ? <button type="button" onClick={leaveHandler} className="btn btn-outline-danger">Leave Mission</button>
            : <button type="button" onClick={joinHandler} className="btn btn-outline-secondary">Join Mission</button>
        }
      </td>
    </tr>
  );
};

export default Mission;
