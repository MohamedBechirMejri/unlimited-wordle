import React from "react";

const Leaderboard = () => {
  const leaderboard = [
    {
      name: "John Doe",
      score: 100,
    },
    {
      name: "Jane Doe",
      score: 90,
    },
    {
      name: "Joe Doe",
      score: 80,
    },
    {
      name: "Jill Doe",
      score: 70,
    },
    {
      name: "Jack Doe",
      score: 60,
    },
    {
      name: "Jill Doe",
      score: 50,
    },
    {
      name: "Jack Doe",
      score: 40,
    },
  ];
  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(player => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Leaderboard;
