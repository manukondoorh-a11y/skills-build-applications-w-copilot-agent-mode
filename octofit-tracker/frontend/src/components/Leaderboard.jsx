import { useEffect, useState } from 'react';
import { buildApiUrl, normalizeRecords } from '../utils/api.js';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await fetch(buildApiUrl('leaderboard'), { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setEntries(normalizeRecords(payload));
        setError('');
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError('Unable to load leaderboard right now.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadLeaderboard();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <div className="alert alert-info">Loading leaderboard...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped align-middle mb-0">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.rank ?? entry.name ?? entry.team}>
                  <td>{entry.rank}</td>
                  <td>{entry.name}</td>
                  <td>{entry.points}</td>
                  <td>{entry.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
