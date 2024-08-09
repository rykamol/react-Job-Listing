const apiBaseUrl = '/api/jobs';

export const addJob = async (newJob) => {
  const response = await fetch(apiBaseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });

  if (!response.ok) {
    throw new Error('Failed to add job');
  }
  
  return response.json(); // If you expect to return a result
}

export const deleteJob = async (id) => {
  const response = await fetch(`${apiBaseUrl}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete job');
  }
  
  return response.json(); // If you expect to return a result
}

export const updateJob = async (job) => {
  const response = await fetch(`${apiBaseUrl}/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });

  if (!response.ok) {
    throw new Error('Failed to update job');
  }

  return response.json(); // If you expect to return a result
}
