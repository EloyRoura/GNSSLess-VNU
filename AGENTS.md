<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep numerical product specifications in a shared browser-safe module used by the page and specification tests, so displayed values and verified requirements remain consistent.
- Contact enquiries are validated with a shared zod schema and saved by a server function into an insert-only database table (no public read access), so leads are kept without exposing them.
