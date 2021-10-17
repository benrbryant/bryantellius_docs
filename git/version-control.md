# What is Version Control?

> "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later."

- Version control can track changes to any file.

Using a **Version Control System** (VSC) has the following benefits:

1. Revert selected files back to a previous state
2. Revert a project back to a previous state
3. Compare changes over time
4. Monitor who makes changes to a project or files
5. Monitor where issues originated

Locally, **Revision Control System** (RCS) was/is used to manage _patches_, differences between file changes, to manage version control.

However, that is local to one computer. Many files and projects are shared, making it difficult to manage version control locally on many shared computers.

This introduced **Centralized Version Control System** (CVCS) systems where a file or project was/is hosted on a single server that many collaborators have access to. An administer manages the access and roles of collaborators to a project or file, and the entire version control history is stored on the server.

The central, ;), problem with a CVCS is that the version history and the entire project or file is stored in a single place. If the server goes down, no one can access the project. If for some reason, someone makes a terminal mistake on the project or a file, it affects the project entirely.

**Distributed Version Control Systems** (DVCS) prevent such problems. Every collaborator clones the entire project locally. This means, that if the server goes down, I can still access the project or file I need to work on because I have them downloaded and tracked locally on my computer. Likewise, if the server loses the project or any files, I can restore the project or files on the server with the clone on my local computer.

A DVCS also makes it possible to have varietable workflows, since all parties have clones of the repository.

## Sources

- [Git Handbook](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
