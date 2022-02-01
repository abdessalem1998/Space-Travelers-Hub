/* eslint-disable */
const Mission = (mission) => {
  const { id, name, description } = mission;
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{description}</td>
      <td className="align-middle"><span className="badge bg-secondary">Not A MEMBER</span></td>
      <td className="align-middle"><button type="button" className="btn btn-outline-secondary">Join Mission</button></td>
    </tr>
  );
};

export default Mission;
