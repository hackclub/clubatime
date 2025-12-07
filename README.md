# Clubatime

## Developing

Install deps with `pnpm install`. Create a `.env` file and copy the contents of `.env.example` into it. Then, fill in the values.

```sh
pnpm run dev

pnpm run dev -- --open
```

## Building

To create a production version of your app:

```sh
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Important tools
- NodeJS and pnpm: Installing and running the project
- [Biome](https://biomejs.dev/): Linter/code formatter. You should probably run `pnpm biome check` to check any issues before making a commit/pushing.
- `drizzle-kit`: Database tooling. Use to generate migrations. See [The docs](https://orm.drizzle.team/docs/migrations) for more info

## Useful documentation
- https://orm.drizzle.team/docs/overview: Database/ORM
- https://www.better-auth.com/docs/introduction: How we handle authentication
- https://svelte.dev/docs: UI Framework
