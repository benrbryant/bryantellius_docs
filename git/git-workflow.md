# Modifying, Staging and Committing Files

Git labels files as _tracked or untracked_. To tell Git to start tracking a file, use `git add <files>`. This will also add the file to the staging area for commit.

Throughout the process of working with files, use `git status [--short]` to receive feedback about tracked, untracked, modified, staged, or committed files.

After you modify a tracked file, add a file(s) to the staging area, then use `git commit -m "message"` to create a snapshot of your current project state.

Once you've made a few commits, it's important to update your remote branch. Use `git push -u origin main` for your first push to a remote repo (given that you created the repo locally, instead of using `git clone ...`). Anytime after your first push, you can push the changes in your main branch with `git push`.

## Git Workflow

1. Add/Edit/Modify Files
2. `git add <files>` to track/stage modified files
3. `git commit -m "descriptive message"` to create a new commit (changes committed files back to _unmodified_)
4. `git push [-u origin main]` to push your local changes to be merged on the remote repo (i.e. GitHub)

## Removing and Moving Files

You can remove file(s) from the staging area (tracked files) with `git rm <files> [--cached]`. A great example would be if you staged/tracked a file that should be included in your `.gitignore` file.

You can move a file(s) with `git mv <oldpath> <newpath>`. However, since Git will still read this as a removed and added file, you can also use `git rm <oldpath> && git add <newpath>` to perform the same effect.

## Sources

- [Git Handbook](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
