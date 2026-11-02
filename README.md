# LJT-Homepage

Junteng Liu's academic homepage, forked from [academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io).

## Website Sections

- **Home / About** (`/`): personal introduction, education, research interests, research internships, skills, all six publications, honors, and contact details.
- **Publications** (`/publications/`): the same six publication records, rendered from a shared include and `_publications/` data.

Keep these two sections in sync by editing `_publications/`. Do not add interview questions, statements, awards, dates, affiliations, skills, or bibliographic details that are not supplied in the source memory.

## Content and Configuration

- `_pages/about.md`: home/about content, including the publication list.
- `_pages/publications.html`: the publications subpage.
- `_config.yml` and `_data/authors.yml`: Junteng Liu's name and contact links from memory.
- `_data/navigation.yml`: Home and Publications navigation.
- `_includes/archive-single.html`: the shared publication style.
- Full publication dates in the Markdown front matter are ordering metadata, not additional information about publication dates. The displayed dates are the years in memory.
- The Skills section lists the research areas in memory; no additional programming skills were inferred.
- Memories of repository/code availability are displayed, but exact repository URLs were not supplied, so no repository URLs have been invented.
- No sample photographs or personal profile image was provided; the sidebar uses the initials JL. No location, pronouns, biography details, or candidate status beyond memory were added.
- The page uses the original academicpages styles and icons; only the active home/about and publications sections are published.

## Building

The default branch is `master`. The included GitHub Actions workflow builds with Jekyll and deploys with GitHub Pages. If using the repository's built-in Pages deployment instead, select `master` / `root` in Settings > Pages.

The navigation and theme scripts are loaded directly, so a separate JavaScript compilation step is not required. `assets/js/theme.js` is not used.

The source information is from the supplied memory, not an external profile update.
