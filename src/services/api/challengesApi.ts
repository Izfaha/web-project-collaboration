import axios from 'axios';
import { getMockChallenges, getMockUserProgress, startMockChallenge, getMockChallenge, submitMockFlag } from './mockApiService';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Configure axios defaults
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add authorization header if token exists
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export interface Challenge {
  id: string;
  title: string;
  description: string;
  author: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  points: number;
  completed: boolean;
}

export interface UserProgress {
  totalCompleted: number;
  totalChallenges: number;
  easyCompleted: number;
  totalEasy: number;
  mediumCompleted: number;
  totalMedium: number;
  hardCompleted: number;
  totalHard: number;
  completionPercentage: number;
}

// Flag to determine if we should use mock data or real API
const USE_MOCK_API = true;

// Get all challenges
export const getChallenges = async (): Promise<Challenge[]> => {
  if (USE_MOCK_API) {
    return getMockChallenges();
  }
  
  try {
    console.log('Fetching challenges from:', `${API_URL}/challenges`);
    const response = await apiClient.get('/challenges');
    return response.data;
  } catch (error) {
    console.error('Error fetching challenges:', error);
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};

// Get user progress
export const getUserProgress = async (): Promise<UserProgress> => {
  if (USE_MOCK_API) {
    return getMockUserProgress();
  }
  
  try {
    const response = await apiClient.get('/user/progress');
    return response.data;
  } catch (error) {
    console.error('Error fetching user progress:', error);
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};

// Start a challenge
export const startChallenge = async (challengeId: string): Promise<any> => {
  if (USE_MOCK_API) {
    return startMockChallenge(challengeId);
  }
  
  try {
    const response = await apiClient.post(`/challenges/${challengeId}/start`);
    return response.data;
  } catch (error) {
    console.error(`Error starting challenge ${challengeId}:`, error);
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};

// Get challenge details
export const getChallengeDetails = async (challengeId: string): Promise<any> => {
  if (USE_MOCK_API) {
    return getMockChallenge(challengeId);
  }
  
  try {
    const response = await apiClient.get(`/challenges/${challengeId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching challenge ${challengeId}:`, error);
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};

// Submit a flag for a challenge
export const submitFlag = async (challengeId: string, flag: string): Promise<any> => {
  if (USE_MOCK_API) {
    return submitMockFlag(challengeId, flag);
  }
  
  try {
    const response = await apiClient.post(`/challenges/${challengeId}/submit`, { flag });
    return response.data;
  } catch (error) {
    console.error(`Error submitting flag for challenge ${challengeId}:`, error);
    if (axios.isAxiosError(error)) {
      console.error('Status:', error.response?.status);
      console.error('Response data:', error.response?.data);
    }
    throw error;
  }
};
