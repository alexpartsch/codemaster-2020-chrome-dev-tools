import {Component} from 'react';
import GitHubApi from './GitHubApi';
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
        const commits = await this.api.getLatestCommits('torvalds', 'linux');
        this.setState({
            commits
        });
    };

    render = () => {
        return (
            <div id="github-commit-table-cnt">
                <h2>GitHub Commits</h2>
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
                            return (
                                <tr key={commit.sha}>
                                    <td><img src={this.api.getAvatarURL(commit.author.username)} /></td>
                                    <td>{commit.author.name} ({commit.author.username})</td>
                                    <td>{commit.message}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };
}