
export class GitHubRepository {

    constructor(name, html_url, description) {
        this.name = name;
        this.url = html_url;
        this.description = description;
    }

    getName() {
        return this.name;
    }

    getUrl() {
        return this.url;
    }

    getDescription() {
        return this.description;
    }

}

export class GitHubAuthor {

    constructor(author, committer) {
        this.name = author.name;
        this.username = committer.login;
    }    

    getName() {
        return this.name;
    }

    getUsername() {
        return this.username;
    }
}

export class GitHubCommit {

    constructor(commitRef) {
        const {sha,commit,committer} = commitRef;
        const {author,message} = commit;

        this.sha = sha;
        this.message = message;
        this.author = new GitHubAuthor(author, committer);
    }

    getSha() {
        return this.sha;
    }

    getMessage() {
        return this.message;
    }

    getMessageSummary() {
        return this.getMessage().slice(0, 250);
    }

    getAuthor() {
        return this.author;
    }
}