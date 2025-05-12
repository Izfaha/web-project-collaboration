'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getChallengeDetails, submitFlag } from '@/services/api/challengesApi';

export default function ChallengeSolvePage() {
  const params = useParams();
  const router = useRouter();
  const [challenge, setChallenge] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState<boolean[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        setLoading(true);
        const challengeData = await getChallengeDetails(params.id as string);
        setChallenge(challengeData);
        setShowHint(new Array(challengeData.hints?.length || 0).fill(false));
      } catch (err) {
        console.error('Error fetching challenge:', err);
        setError('Failed to load challenge details');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchChallenge();
    }
  }, [params.id]);

  const handleSubmitFlag = async () => {
    if (!flag.trim()) return;
    
    try {
      setSubmitting(true);
      setFeedback('');
      const response = await submitFlag(params.id as string, flag);
      
      setFeedback(response.message);
      if (response.correct) {
        setTimeout(() => {
          router.push('/challenge');
        }, 2000);
      }
    } catch (err) {
      console.error('Error submitting flag:', err);
      setFeedback('Error submitting flag. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleHint = (index: number) => {
    const newShowHint = [...showHint];
    newShowHint[index] = !newShowHint[index];
    setShowHint(newShowHint);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-700 mb-4"></div>
          <div className="h-4 w-40 bg-blue-700 rounded mb-3"></div>
          <div className="h-3 w-32 bg-blue-800 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !challenge) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
        <div className="bg-[#06304b] p-8 rounded-xl shadow-sm max-w-md w-full text-center">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-gray-100 mb-6 font-medium">{error || 'Challenge not found'}</p>
          <button 
            onClick={() => router.push('/challenge')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors"
          >
            Return to Challenges
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#06304b] rounded-xl shadow-sm overflow-hidden mb-6 text-white">
          <div className="bg-gradient-to-r from-[#052a42] to-[#0a3a57] px-6 py-4">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 mr-4`}>
                <Image src="/image/book-white.png" width={30} height={30} alt="challenge-icon" className="opacity-90" />
              </div>
              <div>
                <span className={`inline-block text-xs px-3 py-1.5 rounded-full font-medium shadow-sm ${
                  challenge.difficulty === 'Easy' ? 'bg-green-800 text-green-300 border border-green-400' : 
                  challenge.difficulty === 'Medium' ? 'bg-orange-800 text-orange-300 border border-orange-400' : 
                  'bg-red-800 text-red-300 border border-red-400'
                }`}>{challenge.difficulty}</span>
                <h1 className="text-xl font-bold text-white mt-1">{challenge.title}</h1>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap items-center text-sm text-blue-200 mb-6">
              <div className="mr-6">
                <span className="font-medium text-blue-100">Author:</span> {challenge.author}
              </div>
              <div className="mr-6">
                <span className="font-medium text-blue-100">Category:</span> {challenge.category}
              </div>
              <div>
                <span className="font-medium text-blue-100">Points:</span> {challenge.points}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-blue-100 mb-3">Description</h2>
              <div className="prose prose-sm max-w-none text-blue-200">
                <p>{challenge.description}</p>
              </div>
            </div>
            
            {challenge.content && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-blue-100 mb-3">Challenge Details</h2>
                <div className="bg-[#052a42] rounded-lg p-4 font-mono text-sm text-blue-100 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{challenge.content}</pre>
                </div>
              </div>
            )}
            
            {challenge.hints && challenge.hints.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-blue-100 mb-3">Hints</h2>
                <div className="space-y-3">
                  {challenge.hints.map((hint: string, index: number) => (
                    <div key={index} className="border border-[#043658] rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleHint(index)}
                        className="w-full text-left p-3 flex items-center justify-between font-medium text-blue-100 hover:bg-[#052a42] transition-colors"
                      >
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Hint {index + 1}
                        </span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 text-blue-300 transition-transform ${showHint[index] ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {showHint[index] && (
                        <div className="p-4 border-t border-[#043658] bg-[#052a42]">
                          <p className="text-blue-200">{hint}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="border-t border-[#043658] pt-6">
              <h2 className="text-lg font-semibold text-blue-100 mb-3">Submit Flag</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={flag}
                  onChange={(e) => setFlag(e.target.value)}
                  placeholder="Enter flag (e.g., CTF{...})"
                  className="flex-1 bg-[#052a42] border border-[#043658] rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSubmitFlag}
                  disabled={submitting || !flag.trim()}
                  className={`px-6 py-3 rounded-lg font-medium flex-shrink-0 transition-colors ${
                    submitting || !flag.trim() 
                      ? 'bg-[#043658] text-blue-300 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit Flag'}
                </button>
              </div>
              {feedback && (
                <div className={`mt-4 p-4 rounded-lg animate-fadeIn ${
                  feedback.includes('Correct') 
                    ? 'bg-green-800 text-green-100 border-l-4 border-green-400 shadow-lg shadow-green-900/30' 
                    : 'bg-red-800 text-red-100 border-l-4 border-red-400 shadow-lg shadow-red-900/30'
                }`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => router.push('/challenge')}
          className="inline-flex items-center gap-2 bg-[#06304b] text-white px-5 py-2.5 rounded-lg hover:bg-[#052a42] transition-colors font-medium shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Challenges
        </button>
      </div>
    </div>
  );
}
