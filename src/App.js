import GitHubCommitTable from './github/GitHubCommitTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <GitHubCommitTable username="torvalds" repositoryName="linux" />
      <GitHubCommitTable username="torvalds" repositoryName="libdc-for-dirk" />
    </div>
  );
}

export default App;
