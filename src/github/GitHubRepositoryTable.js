import {Component} from 'react';
import GitHubApi from './GitHubApi';

export default class GitHubRepositoryTable extends Component {

    constructor(props) {
        super(props);
        this.api = new GitHubApi();
        this.state = {
            repos: []
        };
    }

    componentDidMount = async () => {
        const {username} = this.props;
        const repos = await this.api.getPublicRepositories(username);
        this.setState({repos});
    };

    render = () => {
        const {username} = this.props;
        return (
            <div id="github-repo-table-cnt">
                <h2>Public Repositories for User {username}</h2>
                <table id="github-repo-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.repos.map(repo => {
                            return (
                                <tr>
                                    <td><a href={repo.html_url}>{repo.name}</a></td>
                                    <td>{repo.description}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

}