import { useState, useEffect } from 'react';
import { Bowler } from './types/Bowler';

function Table() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  useEffect(() => {
    const fetchBowlerData = async () => {
      // try {
      //   const rsp = await fetch('http://localhost:51679/Bowling');
      //   const data = await rsp.json();
      //   setBowlerData(data);
      // } catch (error) {
      //   console.error('Error fetching bowler data:', error);
      // }
      const rsp = await fetch('http://localhost:5089/Bowling');
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Team Marlins & Team Sharks</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit}. {b.bowlerLastName}
              </td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
