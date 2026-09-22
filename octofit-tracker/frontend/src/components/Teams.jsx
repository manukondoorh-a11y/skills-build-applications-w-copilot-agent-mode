import { useEffect, useState } from 'react';
import { buildApiUrl, normalizeRecords } from '../utils/api.js';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadTeams = async () => {
      try {
        setLoading(true);
        const response = await fetch(buildApiUrl('teams'), { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setTeams(normalizeRecords(payload));
        setError('');
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError('Unable to load teams right now.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadTeams();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <div className="alert alert-info">Loading teams...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Captain</th>
                <th>Members</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id || team.name}>
                  <td>{team.name}</td>
                  <td>{team.captain}</td>
                  <td>{team.members}</td>
                  <td>{team.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
