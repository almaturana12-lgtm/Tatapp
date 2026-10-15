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

## Tatapp architecture
- Use TanStack file routes for every content section and a shared root shell, so navigation and metadata remain consistent.
- Keep fictional demo data and search logic in src/lib/tatapp-data.ts and client state in DemoProvider, so all sections share consistent data without claiming external integrations.
- This explicitly device-only academic prototype uses versioned localStorage after hydration; never use it for real sensitive data or imply that it is secure cloud storage.
- Define visual roles and responsive styles in src/styles.css and use the shared Button and Radix Dialog primitives, so appearance and accessibility remain consistent.
- Keep mobile navigation in the shared shell with a Radix dialog for secondary destinations, so every page retains accessible navigation and focus handling.
