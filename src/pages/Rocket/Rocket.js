const Rocket = () => {
  const logo = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-3">
          <img src={logo} alt="Logo" style={{ maxWidth: '280px', height: '100%' }} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title ">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
