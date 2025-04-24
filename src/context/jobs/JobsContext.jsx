import React, { createContext, useContext, useState, useEffect } from 'react';
import { BASE_API_URL } from '../../Constant';
const JobsContext = createContext();

export const useJobs = () => {
	const context = useContext(JobsContext);
	if (!context) {
		throw new Error('useJobs must be used within a JobsProvider');
	}
	return context;
};

export const JobsProvider = ({ children }) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [appliedJobs, setAppliedJobs] = useState(() => {
		const savedApplications = localStorage.getItem('appliedJobs');
		return savedApplications
			? new Set(JSON.parse(savedApplications))
			: new Set();
	});

	const fetchJobs = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`${BASE_API_URL}career/careers`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setJobs(data);
		} catch (error) {
			console.error('Fetch error:', error);
			setError(`Failed to fetch jobs: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	const getJobById = (id) => {
		return jobs.find((job) => job.id === id);
	};

	const applyForJob = async (jobId, formData) => {
		if (appliedJobs.has(jobId)) {
			throw new Error('You have already applied for this job!');
		}

		try {
			const requestUrl = `${BASE_API_URL}career/applications/`;
			console.log('Request URL:', requestUrl);
			console.log('Request Method: POST');

			const response = await fetch(requestUrl, {
				method: 'POST',
				body: formData,
				headers: {},
			});

			// Debug: Log response details
			console.log('Response Status:', response.status);
			console.log(
				'Response Headers:',
				Object.fromEntries(response.headers.entries())
			);

			if (!response.ok) {
				const errorText = await response.text();
				console.error('Error Response:', errorText);
				throw new Error(
					`HTTP error! status: ${response.status}, message: ${errorText}`
				);
			}

			const data = await response.json();
			console.log('Success Response:', data);

			setAppliedJobs((prev) => new Set([...prev, jobId]));
			localStorage.setItem(
				'appliedJobs',
				JSON.stringify([...appliedJobs, jobId])
			);
			return data;
		} catch (error) {
			console.error('Application error:', error);
			throw error;
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	const value = {
		jobs,
		loading,
		error,
		appliedJobs,
		fetchJobs,
		getJobById,
		applyForJob,
	};

	return (
		<JobsContext.Provider value={value}>{children}</JobsContext.Provider>
	);
};
