'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getChallenges, getUserProgress, startChallenge, Challenge, UserProgress } from '@/services/api/challengesApi';
import { checkApiConnection, logApiError, debugNetworkStatus } from '@/utils/apiDebug';

export default function ChallengePage() {
    const router = useRouter();
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>([]);
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('None');
    const [statusFilter, setStatusFilter] = useState<'All' | 'Completed' | 'Uncomplete'>('All');
    const [difficultyFilter, setDifficultyFilter] = useState<{
        Easy: boolean;
        Medium: boolean;
        Hard: boolean;
    }>({ Easy: false, Medium: false, Hard: false });
    const [categoryFilter, setcategoryFilter] = useState<{
        [key: string]: boolean;
    }>({
        'Incident Response': false,
        'Digital Forensic': false,
        'Malware Analyst': false
    });

    // Fetch challenges and user progress on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Mock API is used internally now, so we don't actually need to check connection
                setConnectionStatus(true);
                
                await debugNetworkStatus();
                
                try {
                    const challengesData = await getChallenges();
                    setChallenges(challengesData);
                    setFilteredChallenges(challengesData);
                } catch (challengeErr) {
                    logApiError(challengeErr, 'getChallenges');
                    throw new Error('Failed to load challenges. Please check the console for details.');
                }
                
                try {
                    const progressData = await getUserProgress();
                    setProgress(progressData);
                } catch (progressErr) {
                    logApiError(progressErr, 'getUserProgress');
                    console.warn('Progress data could not be loaded, but challenges were fetched successfully.');
                    // Don't throw error here as we at least got the challenges
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Failed to load challenges. Please try again later.');
                }
                console.error('Error in fetchData:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Apply filters when filter states change
    useEffect(() => {
        let result = challenges;
        
        // Apply search filter
        if (searchTerm) {
            result = result.filter(challenge => 
                challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Apply status filter
        if (statusFilter === 'Completed') {
            result = result.filter(challenge => challenge.completed);
        } else if (statusFilter === 'Uncomplete') {
            result = result.filter(challenge => !challenge.completed);
        }
        
        // Apply difficulty filter
        const activeDifficulties = Object.entries(difficultyFilter)
            .filter(([_, isActive]) => isActive)
            .map(([difficulty]) => difficulty);
            
        if (activeDifficulties.length > 0) {
            result = result.filter(challenge => 
                activeDifficulties.includes(challenge.difficulty)
            );
        }
        
        // Apply category filter
        const activeCategories = Object.entries(categoryFilter)
            .filter(([_, isActive]) => isActive)
            .map(([category]) => category);
            
        if (activeCategories.length > 0) {
            result = result.filter(challenge => 
                activeCategories.includes(challenge.category)
            );
        }
        
        // Apply sorting
        if (sortBy === 'Difficulty (Easy-Hard)') {
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            result = [...result].sort((a, b) => 
                difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
            );
        } else if (sortBy === 'Difficulty (Hard-Easy)') {
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            result = [...result].sort((a, b) => 
                difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]
            );
        } else if (sortBy === 'Points (High-Low)') {
            result = [...result].sort((a, b) => b.points - a.points);
        } else if (sortBy === 'Points (Low-High)') {
            result = [...result].sort((a, b) => a.points - b.points);
        }
        
        setFilteredChallenges(result);
    }, [challenges, searchTerm, sortBy, statusFilter, difficultyFilter, categoryFilter]);

    // Handle starting a challenge
    const handleStartChallenge = async (challengeId: string) => {
        try {
            await startChallenge(challengeId);
            router.push(`/challenge/${challengeId}`);
        } catch (err) {
            console.error('Error starting challenge:', err);
            setError('Failed to start challenge. Please try again.');
        }
    };

    // Reset all filters
    const resetFilters = () => {
        setSearchTerm('');
        setSortBy('None');
        setStatusFilter('All');
        setDifficultyFilter({ Easy: false, Medium: false, Hard: false });
        setcategoryFilter({
            'Incident Response': false,
            'Digital Forensic': false,
            'Malware Analyst': false
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-900">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-700 mb-4"></div>
                    <div className="h-4 w-40 bg-blue-700 rounded mb-3"></div>
                    <div className="h-3 w-32 bg-blue-800 rounded"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-900 p-6">
                <div className="bg-[#06304b] p-8 rounded-xl shadow-sm max-w-md w-full text-center">
                    <div className="text-red-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p className="text-gray-100 mb-6 font-medium">{error}</p>
                    <p className="text-sm text-gray-300 mb-6">
                        API Connection: {connectionStatus === null ? 'Checking...' : connectionStatus ? 'Connected' : 'Failed'}
                    </p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-gray-900 min-h-screen pb-12">
            {/* Progress Overview Card */}
            <div className="max-w-6xl mx-auto pt-8 px-4 sm:px-6">
                <div className="bg-[#06304b] rounded-xl p-6 shadow-sm mb-8 text-white">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex items-center mb-4 md:mb-0 md:mr-12">
                            <div className="flex-shrink-0">
                                <Image src="/image/book-white.png" width={60} height={60} alt="book-logo" className="opacity-90" />
                            </div>
                            <h1 className="text-2xl font-bold text-white ml-5">Challenges</h1>
                        </div>
                        
                        <div className="flex-grow">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div className="bg-[#052a42] p-3 rounded-lg text-center">
                                    <p className="text-xl font-bold text-blue-100">{progress?.totalCompleted}/{progress?.totalChallenges}</p>
                                    <p className="text-sm text-blue-200">Challenges</p>
                                </div>
                                <div className="bg-[#052a42] p-3 rounded-lg text-center border-l-4 border-green-400">
                                    <p className="text-lg font-medium text-green-400">{progress?.easyCompleted}/{progress?.totalEasy}</p>
                                    <p className="text-sm text-blue-200">Easy</p>
                                </div>
                                <div className="bg-[#052a42] p-3 rounded-lg text-center border-l-4 border-orange-400">
                                    <p className="text-lg font-medium text-orange-400">{progress?.mediumCompleted}/{progress?.totalMedium}</p>
                                    <p className="text-sm text-blue-200">Medium</p>
                                </div>
                                <div className="bg-[#052a42] p-3 rounded-lg text-center border-l-4 border-red-400">
                                    <p className="text-lg font-medium text-red-400">{progress?.hardCompleted}/{progress?.totalHard}</p>
                                    <p className="text-sm text-blue-200">Hard</p>
                                </div>
                            </div>
                            
                            <div className="relative h-4 bg-[#052a42] rounded-full overflow-hidden">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-blue-400 transition-all duration-300" 
                                    style={{ width: `${progress?.completionPercentage || 0}%` }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xs font-medium text-white">{progress?.completionPercentage || 0}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Filters Panel */}
                    <div className="lg:w-1/4">
                        <div className="bg-[#06304b] rounded-xl p-6 shadow-sm text-white">
                            <div className="mb-6">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Search challenges"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-[#052a42] border border-[#043658] rounded-lg px-4 py-3 pl-10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <div className="absolute left-3 top-3.5 text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-blue-100 mb-3">Sort By</h3>
                                <select 
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full bg-[#052a42] border border-[#043658] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2393c5fd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                                >
                                    <option value="None">None</option>
                                    <option value="Difficulty (Easy-Hard)">Difficulty (Easy-Hard)</option>
                                    <option value="Difficulty (Hard-Easy)">Difficulty (Hard-Easy)</option>
                                    <option value="Points (High-Low)">Points (High-Low)</option>
                                    <option value="Points (Low-High)">Points (Low-High)</option>
                                </select>
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-blue-100 mb-3">Status</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={statusFilter === 'Completed'}
                                            onChange={() => setStatusFilter(statusFilter === 'Completed' ? 'All' : 'Completed')}
                                            className="form-checkbox h-5 w-5 text-blue-500 rounded border-blue-600 focus:ring-blue-500 bg-blue-800"
                                        />
                                        <span className="ml-2 text-blue-100">Completed</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={statusFilter === 'Uncomplete'}
                                            onChange={() => setStatusFilter(statusFilter === 'Uncomplete' ? 'All' : 'Uncomplete')}
                                            className="form-checkbox h-5 w-5 text-blue-500 rounded border-blue-600 focus:ring-blue-500 bg-blue-800"
                                        />
                                        <span className="ml-2 text-blue-100">Incomplete</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-blue-100 mb-3">Difficulty</h3>
                                <div className="flex flex-wrap gap-3">
                                    <label className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={difficultyFilter.Easy}
                                            onChange={() => setDifficultyFilter({...difficultyFilter, Easy: !difficultyFilter.Easy})}
                                            className="form-checkbox h-5 w-5 text-green-400 rounded border-blue-600 focus:ring-green-400 bg-blue-800"
                                        />
                                        <span className="ml-2 text-green-400 font-medium">Easy</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={difficultyFilter.Medium}
                                            onChange={() => setDifficultyFilter({...difficultyFilter, Medium: !difficultyFilter.Medium})}
                                            className="form-checkbox h-5 w-5 text-orange-400 rounded border-blue-600 focus:ring-orange-400 bg-blue-800"
                                        />
                                        <span className="ml-2 text-orange-400 font-medium">Medium</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={difficultyFilter.Hard}
                                            onChange={() => setDifficultyFilter({...difficultyFilter, Hard: !difficultyFilter.Hard})}
                                            className="form-checkbox h-5 w-5 text-red-400 rounded border-blue-600 focus:ring-red-400 bg-blue-800"
                                        />
                                        <span className="ml-2 text-red-400 font-medium">Hard</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <button 
                                    onClick={resetFilters}
                                    className="flex-1 bg-[#052a42] hover:bg-[#043658] text-blue-100 py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                                >
                                    Reset
                                </button>
                                <button 
                                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Challenges Grid */}
                    <div className="lg:w-3/4">
                        {filteredChallenges.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredChallenges.map((challenge) => (
                                    <div key={challenge.id} className="bg-[#06304b] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-white">
                                        <div className="flex">
                                            <div className="mr-4">
                                                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                                                    challenge.difficulty === 'Easy' ? 'bg-green-900 ring-2 ring-green-400' : 
                                                    challenge.difficulty === 'Medium' ? 'bg-orange-900 ring-2 ring-orange-400' : 
                                                    'bg-red-900 ring-2 ring-red-400'
                                                }`}>
                                                    <Image src="/image/book-white.png" width={30} height={30} alt="challenge-icon" className="opacity-90" />
                                                </div>
                                                <p className={`text-center text-sm font-medium mt-2 ${
                                                    challenge.difficulty === 'Easy' ? 'text-green-400' : 
                                                    challenge.difficulty === 'Medium' ? 'text-orange-400' : 
                                                    'text-red-400'
                                                }`}>{challenge.difficulty}</p>
                                            </div>
                                            
                                            <div className="flex-grow">
                                                <h3 className="text-lg font-semibold text-white mb-1">{challenge.title}</h3>
                                                <p className="text-sm text-blue-200 mb-2">{challenge.author}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="inline-block bg-[#052a42] text-blue-100 text-xs px-2 py-1 rounded-full">
                                                        {challenge.category}
                                                    </span>
                                                    <span className="inline-block bg-yellow-700 text-yellow-100 text-xs px-2 py-1 rounded-full font-medium">
                                                        {challenge.points} Points
                                                    </span>
                                                </div>
                                                <button 
                                                    onClick={() => handleStartChallenge(challenge.id)}
                                                    className={`text-sm px-4 py-2 rounded-lg ${
                                                        challenge.completed 
                                                            ? 'bg-green-600 text-white hover:bg-green-500 shadow-md shadow-green-900/50' 
                                                            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-900/50'
                                                    } transition-colors font-medium`}
                                                >
                                                    {challenge.completed ? 'Solved' : 'Start Challenge'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-[#06304b] rounded-xl p-10 shadow-sm text-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg font-medium text-blue-100 mb-2">No challenges found</h3>
                                <p className="text-blue-200">Try adjusting your filters or search criteria</p>
                                <button 
                                    onClick={resetFilters}
                                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors text-sm font-medium"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}