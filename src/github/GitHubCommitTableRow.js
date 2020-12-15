import {Component} from 'react';
import GitHubApi from './GitHubApi';

export default class GitHubCommitTableRow extends Component {

    constructor(props) {
        super(props);
        this.api = new GitHubApi();
    }

    render = () => {
        const {commit} = this.props;
        return (
            <tr>
                <td><img src={this.api.getAvatarURL(commit.author.username)} /></td>
                <td>{commit.author.name} ({commit.author.username})</td>
                <td>{commit.message}</td>
            </tr>
        );
    };

}