
import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log('Fetching Teams from:', apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched Teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [apiUrl]);

  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="h4">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              {teams[0] && Object.keys(teams[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                {Object.values(team).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
