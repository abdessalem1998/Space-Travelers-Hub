import Mission from './Mission/Mission';

const Missions = () => (
  <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Mission</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">.</th>
        </tr>
      </thead>
      <tbody>
        <Mission />
      </tbody>
    </table>
  </div>
);

export default Missions;
