# Best Kept Secrets of Peer Code Review

By SmartBear

[Book Source](https://static1.smartbear.co/smartbear/media/pdfs/best-kept-secrets-of-peer-code-review_redirected.pdf)

## Table of Contents

## Notes

Peer code reviews offer:

- improved code quality
- fewer defects in code
- improved communication about code content
- education of junior programmers
- shorter development/test cycles
- reduced impact on technical support
- more customer satisfaction
- more maintainable code

> Definition of a _defect_: When a reviewer or consensus of reviewers determines that code must be changed before it is acceptable, it is a "defect"

### Five Types of Review

#### Formal Inspections

Formal Inspections, christened _Fagan Inspections_, involve a half dozen developers in a room with a big screen, with roles assigned to attendees (observers, readers and a reviewer). The team goes through a process of inspection of given lines of code, identifies defects, and repeats. Any defects are send back to the author to rework.

Formal inspections are _heavy-set_ reviews with a lot of resources dedicated to them.

#### Over-The-Shoulder Reviews

Over-the-shoulder reviews are informal and interactive. They promote developer collaboration and interpersonal exchange. This involves an author showing review files to a reviewer, and explaining their changes.

Due to their informal behavior, they often are the least effective in finding defects _and verifying fixed defects_.

#### Email Pass-Around Reviews

Email pass-around reviews are also informal reviews where one or more developers receive emails, notifications, etc of changes to review from an author. Although this process allows for better objective reviews, even from remote developers, the process can take days to complete and still face verification issues.

#### Tool-Assisted Reviews

Tool-assisted reviews attempt to mitigate problems with the previous methods by including:

- Automated File Gathering
- Combined Display: Difference, Comments, Defects
- Automated Metrics Collection (kLOC/hour - inspection rate, defects/hour - defect rate, defects/kLOC - defect density)
- Review Enforcement
- Clients and Integrations

Tool-assisted reviews offer the best of all worlds, just as a price (cash or dev time).

#### Pair Programming

Pair programming involves an author and reviewing implementing changes _together_, or rather the author makes the changes in from of the reviewer. This greatly reduces the amount of defects that make it into the code base, and promotes knowledge transfers. However, when the reviewer is that close to the changes, they often fail to catch some defects that they would otherwise notice as an objective post-changes reviewer.

### Code Review Studies and Findings

Summarized findings from studies of heavyweight code review processes:

- Reviews should be 1 hour or less
- Slower code readings yield more detected defects
- In-person inspection meetings don't have _significant_ advantages for finding defects versus email or other communication medium
- Defects/LOC is an unreasonable metric due to external factors for code reviews
- Omissions are the hardest defects to detect

Although these findings are applicable, they ultimately are too small for true statistical significance.

Summarized findings from studies of lightweight code review processes:

- Review size should no larger than 400, closer to 200 is ideal
- Review time should be between 30 and 60 minutes
- Inspection Rate should be 300 LOC/hour or less for effective defect detection
- Authors preparing, or _self-reviewing_, before a review significantly reduces defects
- Defect Rates average to 15 defects/hour
- Inspection Rate will vary depending on many factors

### Social Effects of Peer Reviews

Code Reviews play on the "Ego Effect".

For good, developer egos promote self-improvement. When a developer notices their mistakes, or their mistakes are pointed out to them by a reviewer, they will strive to correct those mistakes from happening again.

For bad, some developers will be hyper-sensitive to criticism and resistant to metrics collected during the review process.

Mitigate the Ego Effect as managers and team leads by stressing the following points to the team:

1. Hard code has more defects
2. More time yields more defects
3. It's all about the code
4. The more _found_ defects, the better

### Questions for a Review Process

- What are the goals of the review?
- How amenable are your developers to review?
- How will you improve the process over time?
- How will you collect metrics?
- How will you manage negative emotions?
- How will you develop the review checklist?

### Measurement and Improvement

Raw Measurements

- Lines of Code (LOC)
- Inspection Time
- Defect Count

Analytical Metrics

- Inspection Rate: LOC/hour
- Defect Rate: defects/hour
- Defect Density: defects/kLOC (kLOC = 1000 LOC)

Two takeaways from analytical metrics:

1. Defect rates for a review are _task independent_
2. The meaning of metrics depends on the _goal of the review_

