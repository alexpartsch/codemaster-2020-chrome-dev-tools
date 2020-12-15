import {Component} from 'react';
import GitHubCommitTable from './github/GitHubCommitTable';
import GitHubRepositoryTable from './github/GitHubRepositoryTable';
import TextInputDialog from './TextInputDialog';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'torvalds'
    };
  }

  setNewUsername = (username) => {
    this.setState(
      {
        username,
        repositoryName: this.state.repositoryName
      });
  };

  setNewRepository = (repositoryName) => {
    this.setState(
      {
        repositoryName,
        username: this.state.username
      });
  };

  render = () => {
    return (
      <div className="App">
        <TextInputDialog label="Username" onTextChange={this.setNewUsername} />
        <TextInputDialog label="Repository" onTextChange={this.setNewRepository} />
        <GitHubRepositoryTable key={this.state.username} username={this.state.username} />
      </div>
    );
  }

}
