import logo from './DBBowlingLeague.png';

//make a nice little heading for the site
function Heading(props: any) {
  return (
    <header>
      <div className="row">
        <div className="col-md-4">
          <img className="logo" src={logo} alt="DB Bowling League" />
        </div>
        <div className="col">
          <h2>Our League Roster</h2>
          <h4>{props.title}</h4>
        </div>
      </div>
    </header>
  );
}

export default Heading;
