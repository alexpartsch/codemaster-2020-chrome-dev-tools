import GitHubCommitTable from './github/GitHubCommitTable';
import GitHubRepositoryTable from './github/GitHubRepositoryTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <GitHubRepositoryTable username="torvalds" />
    </div>
  );
}

export default App;
