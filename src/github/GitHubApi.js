export default class GitHubApi {

    getPublicRepositories = async (username) => {
        const url = `https://api.github.com/users/${username}/repos`;
        console.log(`Getting GitHub Repos from ${url}`);

        const response = await fetch(url);
        console.log(`Receives Response from GitHub: ${response.status}`);

        const responseBody = await response.json();
        console.log(`Parsed Response Body from GitHub Repos: ${responseBody.length}`);

        return responseBody.map(repo => {
            const {name, html_url, description} = repo;
            return {
                name,
                html_url,
                description
            };
        });
    };

    getLatestCommits = async (username, repositoryName) => {
        const url = `https://api.github.com/repos/${username}/${repositoryName}/commits`;
        console.log(`Getting GitHub Commits from ${url}`);

        const response = await fetch(url);
        console.log(`Receives Response from GitHub: ${response.status}`);

        const responseBody = await response.json();
        console.log(`Parsed Response Body from GitHub Commits: ${responseBody.length}`);

        return responseBody.map(commitRef => {
            const {sha,commit,committer} = commitRef;
            const {author,message} = commit;
            author.username = committer.login;
            return {
                sha,
                author,
                message: `${message.slice(0, 250)}...`
            };
        });
    };

    getAvatarURL = (username) => {
        const url = `https://avatars.githubusercontent.com/${username}`;
        console.log(`Getting GitHub Avatar URL: ${url}`);
        return url;
    };

}