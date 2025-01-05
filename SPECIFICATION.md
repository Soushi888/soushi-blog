# SveltePress Blog and Portfolio Specification

## Project Overview
A personal website combining a blog and portfolio, built with SveltePress and extended with custom features for portfolio management.

## Technical Stack
- **Core Framework**: SveltePress
- **UI Framework**: Skeleton UI
- **Styling**: TailwindCSS
- **Content Management**: SveltePress's built-in MDsveX integration
- **Deployment**: Static site generation

## Core Features

### 1. SveltePress Built-in Features (Used As-Is)
- File-based routing
- Markdown processing with MDsveX
- Automatic navigation generation
- Built-in search functionality
- Dark/Light mode support
- SEO optimization
- Documentation features

### 2. Custom Portfolio Extensions
- Project showcase components
- Project filtering and sorting
- Custom project metadata handling
- Interactive project galleries
- Technology stack visualization

### 3. Custom Blog Extensions
- Enhanced blog post layouts
- Series management
- Reading time estimation
- Related posts suggestions
- Custom code block styling

### 4. UI/UX Customization
- Skeleton UI integration
- Custom theme implementation
- Responsive design
- Portfolio-specific components
- Custom navigation layout

## Content Structure
```
content/
├── .sveltepress/          # SveltePress configuration
│   └── config.ts          # Site configuration
├── blog/
│   ├── posts/            # Blog posts
│   │   └── [...].md
│   └── series/          # Blog series configuration
│       └── _meta.json
├── portfolio/
│   ├── projects/        # Project showcases
│   │   └── [...].md
│   └── _meta.json      # Portfolio configuration
└── pages/              # Static pages
    └── about.md
```

## Metadata Structure

### Blog Post Frontmatter
```yaml
---
title: "Blog Post Title"
description: "Short description"
date: 2025-01-05
series:
  name: "Optional Series Name"
  order: 1
tags: 
  - SvelteKit
  - Web Development
categories:
  - Programming
featured: true
---
```

### Project Frontmatter
```yaml
---
title: "Project Name"
description: "Project description"
date: 2025-01-05
technologies:
  - SvelteKit
  - TypeScript
status: "Completed"
links:
  github: "https://github.com/..."
  demo: "https://..."
featured: true
---
```

## Custom Components

### Portfolio Components
```typescript
// src/lib/components/portfolio/
- ProjectCard.svelte
- TechStack.svelte
- ProjectGallery.svelte
- ProjectFilter.svelte
- ProjectList.svelte
```

### Blog Components
```typescript
// src/lib/components/blog/
- SeriesNavigation.svelte
- PostMeta.svelte
- RelatedPosts.svelte
- TableOfContents.svelte
```

## Implementation Strategy

### 1. SveltePress Configuration
```typescript
// .sveltepress/config.ts
export default {
  title: 'My Portfolio & Blog',
  theme: {
    extend: {
      Layout: './src/lib/layouts/CustomLayout.svelte',
      components: {
        // Custom component overrides
      }
    }
  },
  markdown: {
    // Custom MDsveX configuration
    remarkPlugins: [],
    rehypePlugins: []
  }
}
```

### 2. Custom Theme Integration
```typescript
// src/lib/theme/
- skeleton.ts      // Skeleton UI configuration
- tailwind.css    // Custom TailwindCSS styles
- typography.css  // Typography customization
```

### 3. Data Management
- Utilize SveltePress's built-in data handling
- Extend with custom stores for portfolio data
- Implement filtering and sorting utilities

### 4. Search Enhancement
- Extend SveltePress's search to include project metadata
- Custom search result components
- Advanced filtering options

## Development Workflow
1. Install and configure SveltePress
2. Implement custom theme with Skeleton UI
3. Develop portfolio extensions
4. Enhance blog features
5. Add custom components
6. Configure deployment

## Performance Considerations
- Leverage SveltePress's built-in optimizations
- Implement image optimization
- Use dynamic imports for large components
- Optimize custom component rendering

## SEO Strategy
- Utilize SveltePress's SEO features
- Implement custom meta tags for projects
- Generate project-specific sitemaps
- Optimize image alt texts

## Future Extensibility
- Plugin system for new features
- Custom markdown directives
- API integration capabilities
- Analytics integration
