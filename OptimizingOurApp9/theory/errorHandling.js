import React, { Suspense } from 'react';

function UserData() {
  // Simulating an asynchronous data fetch
  if (errorOccurred) {
    throw new Error("Error fetching data.");
  }

  const data = fetchUserData(); // Fetch data from an API

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>User Profile</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserData />
      </Suspense>
    </div>
  );
}
