# Atomic Design

By Brad Frost

[Source (Website)](https://atomicdesign.bradfrost.com/table-of-contents/)

## Table of Contents

1. [Chapter 1: Designing Systems](#chapter-1-designing-systems)
2. [Chapter 2: Atomic Design Methodology](#chapter-2-atomic-design-methodology)
3. [Chapter 3: Tools of the Trade](#chapter-3-tools-of-the-trade)

## Chapter 1: Designing Systems

With increasing challenges due to the growth of the web and media, designing your own system for your needs greatly increases overall effectiveness and flexibility.

Guidelines included with creating a design system:

1. Brand Identity - logos, typography, color palettes, messaging, collateral, etc
2. Design Language - design direction and philosophy
3. Voice and Tone - guidelines for company/organization voice (resolute) and tone (dependent on situation)
4. Writing - guidelines detailing writing restrictions and improvements
5. Code Style Guides - patterns, examples and conventions for how to write code

### Style Guide Benefits

Style guides are used to create a consistent user interface that all parties (designers, developers, 3rd parties, users) are familiar with.

"Web style guides promote consistency and cohesion across a user interface."

"Style guides establish a consistent, shared vocabulary between everyone involved in a project, encouraging collaboration between disciplines and reducing communication breakdowns."

"A pattern library communicates the design language in a very tangible way, which helps stakeholders understand that an underlying system is determining the final interface."

"By making a style guid a cornerstone of your workflow, designers and developers are forced to think about how their decisions affect the broader design system It becomes harder to go rogue and easier to think of the greater good."

### Style Guide Challenges

It's a _long-term investment_, not a short-term payoff.

Style guides are _time consuming_.

They get treated as _nice to haves_ because they are viewed as ancillary projects.

Style guides must be _maintained and governed_.

Style guides often lack the exposure to achieve their true potential: to be helpful tools for _everyone involved, not just designers and developers_.

Style guides end up being a large pool of modules, instead of a _structured library_.

## Chapter 2: Atomic Design Methodology

A good example of modularity can be found in the natural world.

For example: atoms -> molecules -> organisms

"Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner."

The 5 distinct stages are:

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

**Atomic design is a mental model to help define user interfaces as a cohesive whole.**

### Atoms

Atoms are the smallest, distinct elements that can't be broken down any further without losing function.

They have base style and innate properties, but must be applied to benefit the interface.

Examples: label, input, button, etc

### Molecules

Molecules are "relatively simple groups of UI elements functioning together as a unit."

Examples: form molecule <- label atom, input atom, button atom

Molecules should be simple UI components. That way, they are reusable, maintainable, consistent, and testable.

### Organisms

Organisms are "relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms."

Examples: header organism <- site logo atom, navigation molecule, search form molecule

### Templates

Templates are "page-level objects that place components into a layout and articulate the design's underlying content structure."

Templates provide _context_ for the abstract molecules and organisms that combine to make a page.

Think about the _content structure_, rather than the _content data_.

Templates are guide-rails for dynamic content.

### Pages

Pages are "specific instances of templates that show what a UI looks like with real representative content in place."

Pages are essential "for testing the effectiveness of the underlying design system."

> We must create systems that establish reusable design patterns and also accurately reflect the reality of the content we’re putting inside of those patterns.

"Pages also provide a place to articulate variations in templates."

### Summary of the Atomic Design Elements

1. "Atoms are UI elements that can't be broken down any further and serve as the elemental building blocks of an interface"
2. "Molecules are collections of atoms that form relatively simple UI components"
3. Organisms are relatively complex components that form discrete sections of an interface"
4. "Templates place components within a layout adn demonstrate the design's underlying content structure"
5. "Pages apply real content to templates and articulate variations to demonstrate the final UI and test resilience of the design system"

### Advantages

- Ability to quickly traverse the abstract and concrete of our interfaces
- Considers design and content separately, although influencing each other
- Atomic design can be applied to _any user interface, created in any tech stack_

## Chapter 3: Tools of the Trade

