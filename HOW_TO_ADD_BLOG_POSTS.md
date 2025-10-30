# How to Add Blog Posts

This portfolio uses a **Markdown-based blog system** for easy content management. Here's how to add new blog posts:

## Quick Start

1. Create a new `.md` file in the `content/blog/` directory
2. Add frontmatter (metadata) at the top
3. Write your content in Markdown
4. The post will automatically appear on the blog page

## File Structure

```
content/blog/
├── strategic-culture-international-law.md
├── human-rights-education-central-europe.md
├── legal-english-global-competence.md
└── your-new-post.md  ← Add your posts here
```

## Markdown File Format

Each blog post must have **frontmatter** (metadata) at the top, followed by your content:

```markdown
---
title: "Your Article Title"
date: "2024-10-30"
excerpt: "A brief description of your article (2-3 sentences)"
author: "Martina Paliariková"
category: "International Law"
locale: "en"
readTime: "5 min read"
---

# Your Article Title

## Introduction

Your content starts here. You can use all standard Markdown formatting:

- **Bold text**
- *Italic text*
- Lists
- Links
- And more!

## Section Heading

More content...

### Subsection

Even more content...
```

## Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | Yes | Post title | `"Legal English and Global Competence"` |
| `date` | Yes | Publication date (YYYY-MM-DD) | `"2024-10-30"` |
| `excerpt` | Yes | Brief description for listings | `"A short summary..."` |
| `author` | Yes | Author name | `"Martina Paliariková"` |
| `category` | Yes | Post category | `"International Law"` |
| `locale` | Yes | Language (`en` or `cs`) | `"en"` |
| `readTime` | Yes | Estimated reading time | `"5 min read"` |

## Recommended Categories

For consistency, use these categories:

**English:**
- `International Law`
- `Human Rights`
- `European Law`
- `Legal Education`
- `Strategic Culture`
- `EU Integration`

**Czech:**
- `Mezinárodní právo`
- `Lidská práva`
- `Evropské právo`
- `Právní vzdělávání`
- `Strategická kultura`
- `Integrace EU`

## Supported Markdown Features

Your blog posts support all standard Markdown:

### Headings
```markdown
# H1 Heading
## H2 Heading
### H3 Heading
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2
  - Nested item

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Link text](https://example.com)
```

### Quotes
```markdown
> This is a blockquote
```

### Code
```markdown
`inline code`

\`\`\`
code block
\`\`\`
```

## Creating Bilingual Posts

To create posts in both Czech and English:

1. Create two separate files with different slugs:
   - `your-post-title.md` (English, `locale: "en"`)
   - `vas-prispevek-nazev.md` (Czech, `locale: "cs"`)

2. The blog page will automatically show posts in the user's selected language

## Example: Complete Blog Post

```markdown
---
title: "The Future of International Law in Central Europe"
date: "2024-11-15"
excerpt: "An analysis of emerging trends in international law practice and education in the Czech Republic and Slovakia, examining challenges and opportunities for young legal professionals."
author: "Martina Paliariková"
category: "International Law"
locale: "en"
readTime: "8 min read"
---

# The Future of International Law in Central Europe

## Introduction

As Central European countries continue to integrate more deeply into the international legal order, young legal professionals face both unprecedented opportunities and unique challenges. This article explores the evolving landscape of international law in the region.

## Current Trends

### 1. Increased European Integration

The ongoing process of European integration continues to shape legal practice throughout Central Europe. Understanding EU law has become essential for any aspiring international lawyer.

### 2. Cross-Border Practice

More law firms are handling cross-border transactions, requiring proficiency in multiple legal systems and strong language skills.

## Challenges

- Limited exposure to international legal practice during law school
- Language barriers in accessing international legal resources
- Need for specialized training in international arbitration and dispute resolution

## Opportunities

The challenges also present opportunities:

1. **Growing Market**: Demand for international legal expertise is rising
2. **Academic Excellence**: Central European universities are strengthening their international law programs
3. **Regional Networks**: ELSA and similar organizations provide networking opportunities

## Conclusion

The future of international law in Central Europe is bright for those willing to invest in their professional development, embrace multilingualism, and engage with the broader international legal community.
```

## Testing Your Post

After creating your markdown file:

1. Save it in `content/blog/`
2. Refresh the blog page at `http://localhost:3000/blog`
3. Your post should appear automatically
4. Click on it to view the full article

## Tips for Great Blog Posts

1. **Clear Structure**: Use headings to organize your content
2. **Engaging Introduction**: Hook readers in the first paragraph
3. **Practical Examples**: Use real-world examples when possible
4. **Professional Tone**: Maintain academic and professional language
5. **SEO-Friendly**: Include relevant keywords naturally in your text
6. **Reasonable Length**: Aim for 1000-2000 words for substantive posts
7. **Proofread**: Always check for typos and grammatical errors

## Current Blog Posts

The portfolio currently includes three example posts:

1. **Strategic Culture and International Law** - Analysis of Russian conflicts through strategic culture theory
2. **Human Rights Education in Central Europe** - Discussion of civic education and anti-corruption initiatives
3. **Legal English and Global Competence** - Importance of Legal English proficiency

You can use these as templates for your own posts or replace them with your own content.

## Need Help?

If you encounter issues or have questions:
- Check the existing markdown files in `content/blog/` for reference
- Ensure your frontmatter is properly formatted with `---` delimiters
- Verify all required fields are present
- Make sure there are no extra spaces or special characters in field names

---

**Happy Writing!** 📝

