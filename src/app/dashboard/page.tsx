import React from 'react'


async function getDashboardData() {
  // Simulate a data fetching delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { message: "Welcome to the Dashboard!" };
}

const Dashboard = async () => {
  const data = await getDashboardData();
  
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default Dashboard