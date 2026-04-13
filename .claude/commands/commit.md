Create a git commit following the Conventional Commits specification (v1.0.0-beta.4).

## Steps

1. Run `git status` (never use `-uall`) and `git diff --cached` in parallel to see staged changes. Also run `git diff` to see unstaged changes. Run `git log --oneline -10` to see recent commit style.
2. If there are no staged changes, stage the relevant modified/untracked files (prefer specific files over `git add -A`). Do NOT stage files that likely contain secrets (.env, credentials, etc.).
3. Analyze all staged changes and determine:
   - The **type**: one of `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`
   - An optional **scope** in parentheses (a noun describing the section of the codebase, e.g., `parser`, `api`, `ui`)
   - A concise **description** in imperative mood, lowercase, no period at the end
   - An optional **body** (only if the change needs more explanation)
   - An optional **footer** (e.g., `BREAKING CHANGE:`, `Closes #123`)
4. Format the commit message as:

```
<type>(<optional scope>): <description>

<optional body>

<optional footer>
```

5. Create the commit using a HEREDOC to preserve formatting:

```
git commit -m "$(cat <<'EOF'
<commit message here>
EOF
)"
```

6. Run `git status` after the commit to verify success.

## Rules

- Type MUST be lowercase
- Description MUST be lowercase, imperative mood, no period
- Description MUST NOT exceed 72 characters (including type and scope prefix)
- BREAKING CHANGE MUST be uppercase in body/footer
- Use `!` after type/scope for breaking changes (e.g., `feat!:` or `feat(api)!:`)
- If the commit includes a breaking change, BOTH the `!` marker AND `BREAKING CHANGE:` in the footer are required
- Do NOT commit files that contain secrets
- Do NOT use `--no-verify` or skip hooks
- If a pre-commit hook fails, fix the issue and create a NEW commit (do NOT amend)
- Do NOT include a `Co-Authored-By` line
