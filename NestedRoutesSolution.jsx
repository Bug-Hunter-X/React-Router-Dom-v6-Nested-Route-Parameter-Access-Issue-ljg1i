// NestedRoutesSolution.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  // Access userId only after it's guaranteed to be resolved
  return (
    <div>
      {userId ? (
        <p>User Profile: {userId}</p>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
}

export default UserProfile;