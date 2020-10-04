# Mirroring a repository

## Open Git Bash.

## Create a bare clone of the repository.
$ git clone --bare https://github.com/exampleuser/old-repository.git

## Mirror-push to the new repository.
$ cd old-repository.git
$ git push --mirror https://github.com/exampleuser/new-repository.git

## Remove the temporary local repository you created earlier.
$ cd ..
$ rm -rf old-repository.git

## Reference:
https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/duplicating-a-repository 


