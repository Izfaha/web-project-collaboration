import { mockChallenges, mockChallengeDetails, mockUserProgress } from '../../data/mockChallenges';
import { Challenge, UserProgress } from './challengesApi';

// Function to simulate API delay
const simulateDelay = (ms: number = 800) => new Promise(resolve => setTimeout(resolve, ms));

// Mock implementation for getting challenges
export const getMockChallenges = async (): Promise<Challenge[]> => {
  console.log('Fetching mock challenges...');
  await simulateDelay();
  return [...mockChallenges];
};

// Mock implementation for getting user progress
export const getMockUserProgress = async (): Promise<UserProgress> => {
  console.log('Fetching mock user progress...');
  await simulateDelay();
  return { ...mockUserProgress };
};

// Mock implementation for starting a challenge
export const startMockChallenge = async (challengeId: string): Promise<any> => {
  console.log(`Starting mock challenge ${challengeId}...`);
  await simulateDelay();
  
  const challenge = mockChallenges.find(c => c.id === challengeId);
  if (!challenge) {
    throw new Error(`Challenge with ID ${challengeId} not found`);
  }
  
  return { success: true, message: `Started challenge: ${challenge.title}` };
};

// Mock implementation for getting a specific challenge
export const getMockChallenge = async (challengeId: string): Promise<any> => {
  console.log(`Fetching mock challenge ${challengeId}...`);
  await simulateDelay();
  
  const challengeDetail = mockChallengeDetails[challengeId];
  if (!challengeDetail) {
    throw new Error(`Challenge with ID ${challengeId} not found`);
  }
  
  return challengeDetail;
};

// Mock implementation for submitting a challenge flag
export const submitMockFlag = async (challengeId: string, flag: string): Promise<any> => {
  console.log(`Submitting flag for challenge ${challengeId}: ${flag}`);
  await simulateDelay(1200);
  
  const challenge = mockChallengeDetails[challengeId];
  if (!challenge) {
    throw new Error(`Challenge with ID ${challengeId} not found`);
  }
  
  // Simple mock validation (in a real app, you'd have proper flag validation)
  // For this mock, let's say if the flag contains "CTF{" and the challenge ID, it's correct
  const isCorrect = flag.includes('CTF{') && flag.toLowerCase().includes(challengeId);
  
  return {
    correct: isCorrect,
    message: isCorrect 
      ? 'Congratulations! You solved the challenge.' 
      : 'Incorrect flag. Please try again.'
  };
};
