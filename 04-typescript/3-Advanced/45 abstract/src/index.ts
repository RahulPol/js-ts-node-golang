abstract class Command {
  abstract CommandLine(): string;

  execute() {
    console.log(`executing ${this.CommandLine()}`);
  }
}

class GitResetCommand extends Command {
  CommandLine(): string {
    return "git reset --hard";
  }
}

class GitFetchCommand extends Command {
  CommandLine(): string {
    return "git fetch --all";
  }
}

new GitFetchCommand().execute();
new GitResetCommand().execute();

new Command(); // Error: can not create instance of abstract class
