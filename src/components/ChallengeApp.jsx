import React, { useState, useEffect } from 'react';
import Challenge from './Challenge/Challenge';
import { getChallenges } from '../services/api/challengesApi';

const ChallengeApp = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const data = await getChallenges();
        setChallenges(data);
        if (data.length > 0) {
          setSelectedChallenge(data[0].id);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching challenges:', error);
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  const handleChallengeChange = (e) => {
    setSelectedChallenge(e.target.value);
  };

  if (loading) {
    return <div>Loading challenges...</div>;
  }

  return (
    <div className="challenge-app">
      <h1>Coding Challenges</h1>
      
      <div className="challenge-selector">
        <label htmlFor="challenge-select">Select a challenge:</label>
        <select 
          id="challenge-select" 
          value={selectedChallenge} 
          onChange={handleChallengeChange}
        >
          {challenges.map(challenge => (
            <option key={challenge.id} value={challenge.id}>
              {challenge.title}
            </option>
          ))}
        </select>
      </div>
      
      {selectedChallenge && (
        <div className="current-challenge">
          <Challenge challengeId={selectedChallenge} />
        </div>
      )}
    </div>
  );
};

export default ChallengeApp;
