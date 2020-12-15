import {Component} from 'react';
import GitHubApi from './GitHubApi';
import GitHubCommitTableRow from './GitHubCommitTableRow';
import './GitHubCommitTable.css';

export default class GitHubCommitTable extends Component {

    constructor(props) {
        super(props);
        this.api = new GitHubApi();
        this.state = {
            commits: []
        };
    }

    componentDidMount = async () => {
        const {username, repositoryName} = this.props;
        const commits = await this.api.getLatestCommits(username, repositoryName);
        this.setState({
            commits
        });
    };

    render = () => {
        return (
            <div id="github-commit-table-cnt">
                <h2>GitHub Commits for {this.props.repositoryName}</h2>
                <table id="github-commit-table">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Author</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.commits.map(commit => {
                            return (<GitHubCommitTableRow key={commit.getSha()} commit={commit} />);
                        })}
                    </tbody>
                </table>
            </div>
        );
    };
}