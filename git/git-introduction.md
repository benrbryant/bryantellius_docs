# What is Git?

_Git_ is a Distributed Version Control System that manages changes to files and projects as a whole.

Many VCSs control file versions as a list of file-based changes. Meaning, they store data related to files and changes made to files over the history of a project (_delta-based version control_).

Git stores data as _snapshots_ of a project from version to version. If a file does not contain changes, it refers to the previous snapshot, instead of saving the file again, otherwise the file has changes, and it stores the reference to the snapshot where that change was made. The Git team thinks of this management as dealing with _streams of snapshots_.

One goal to Linus Torvalds had in mind when creating Git was speed. Because Git saves these snapshots locally, you can access your project history very quickly since your reading data stored on your local hard disk (as opposed to access a centralized server). This is great because it enables you to work offline!

Git uses SHA-1 hash checksums to provide data integrity. Git will always know if a file is changed, including data loss, content updates, or directory changes.

> A SHA-1 hash is 40 characters long, made of hexadecimal, alphanumerical values that are calculated based on the contents of a file or directory structure.

Three main tenents of Git are it's **states**:

1. Modified - a change has occurred to/in the file
2. Staged - a file is marked as ready to commit
3. Committed - the file/data is stored as a snapshot in the local database

The **working tree** is "a single checkout of one version of the project." This is the version of the project you are checking out, making edits to.

The **staging area** is "a file, generally contained in your Git directory, that stores information about what will go into your next commit." When add files to the staging area that have been modified, you are ready to commit the files and save a snapshot of your project.

## Sources

- [Git Handbook](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
