import React, { useState, useEffect } from 'react';
import { getChallenges } from '../../services/api/challengesApi';
import './Challenge.css';

const Challenge = ({ challengeId }) => {
  const [challenge, setChallenge] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChallenge = async () => {
      try {
        setLoading(true);
        const challenges = await getChallenges();
        const found = challenges.find(c => c.id === challengeId);
        if (found) {
          setChallenge(found);
          setError(null);
        } else {
          setError('Challenge not found');
        }
      } catch (err) {
        setError('Failed to load challenge. Please try again later.');
        console.error('Error loading challenge:', err);
      } finally {
        setLoading(false);
      }
    };

    loadChallenge();
  }, [challengeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!userAnswer.trim()) return;

    try {
      setIsSubmitting(true);
      // This would need to be replaced with a proper API call from challengesApi.ts
      // For now, let's simulate a response
      const isCorrect = userAnswer.includes(challenge.title.toLowerCase());
      
      const result = {
        isCorrect,
        message: isCorrect 
          ? 'Great job! Your solution passed all test cases.' 
          : 'Your solution didn\'t pass all test cases. Try again!'
      };
      
      setFeedback(result);
    } catch (err) {
      setError('Failed to submit your answer. Please try again.');
      console.error('Error submitting answer:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return (
    <div className="challenge-loading">
      <div className="loading-spinner"></div>
      <p>Loading challenge...</p>
    </div>
  );
  
  if (error) return (
    <div className="challenge-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <p>{error}</p>
    </div>
  );
  
  if (!challenge) return null;

  return (
    <div className="challenge-container">
      <div className="challenge-header">
        <div className="challenge-badge" data-difficulty={challenge.difficulty.toLowerCase()}>
          {challenge.difficulty}
        </div>
        <h2 className="challenge-title">{challenge.title}</h2>
      </div>
      
      <div className="challenge-details">
        <div className="challenge-info">
          <span className="challenge-category">{challenge.category}</span>
          <span className="challenge-points">{challenge.points} points</span>
        </div>
        
        <div className="challenge-description">
          <p>{challenge.description}</p>
        </div>
      </div>
      
      <div className="challenge-code-block">
        <div className="code-header">
          <span>Challenge Code</span>
        </div>
        <pre>{challenge.initialCode}</pre>
      </div>
      
      <form onSubmit={handleSubmit} className="challenge-form">
        <div className="form-group">
          <label htmlFor="solution">Your Solution:</label>
          <textarea
            id="solution"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your code here..."
            rows={10}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-dot"></span>
              <span>Submitting...</span>
            </>
          ) : 'Submit Solution'}
        </button>
      </form>
      
      {feedback && (
        <div className={`feedback ${feedback.isCorrect ? 'success' : 'error'}`}>
          <div className="feedback-header">
            {feedback.isCorrect ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="feedback-icon success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="feedback-icon error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <h3>Result: {feedback.isCorrect ? 'Correct!' : 'Incorrect'}</h3>
          </div>
          <p>{feedback.message}</p>
        </div>
      )}
    </div>
  );
};

export default Challenge;
