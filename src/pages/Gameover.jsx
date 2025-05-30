import { useLocation, Link } from 'react-router-dom';

function Gameover() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div>
        <h1 className="text-red-500">Error: No game result data!</h1>
        <Link to="/" className="text-blue-400 underline">Go to Home</Link>
      </div>
    );
  }

  const resultMessage =
    state.result === "win" ? (
      <h1 className="text-green-500 text-2xl">🎉 YOU WON THE GAME</h1>
    ) : (
      <h1 className="text-red-500 text-2xl">😢 YOU LOST THE GAME</h1>
    );

  return (
    <div className="text-center space-y-4 mt-10">
      {resultMessage}
      <h2 className="text-xl">Original word was: <span className="font-bold">{state.org}</span></h2>
      <Link to="/" className="text-blue-400 underline">Restart the Game</Link>
    </div>
  );
}

export default Gameover;
