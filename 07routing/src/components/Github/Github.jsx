import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const followers = useLoaderData();

  if (!followers) {
    return <div>Loading...</div>; // shows only while data is null/undefined
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">
        Github Followers: {followers.length}
      </h1>

      {followers.length === 0 ? (
        <p className="text-lg text-gray-300">No followers yet 🚀</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {followers.map((follower) => (
            <div
              key={follower.id}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <img
                src={follower.avatar_url}
                alt={follower.login}
                className="w-24 h-24 rounded-full mx-auto border-2 border-white"
              />
              <p className="mt-2 font-semibold">{follower.login}</p>
              <a
                href={follower.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm block mt-1 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Github;

// Loader function
export const githubLoader = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/users/TheGeekyCoder06/followers'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch followers');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching followers:', error);
    return [];
  }
};
