<div align="center">
  <img src="./packages/twenty-front/public/images/icons/vertex-logo.png" width="96" alt="Vertex" />
  <h1>Vertex</h1>
  <p><strong>A CRM your team can shape — companies, people, opportunities, tasks, notes and workflows in one workspace.</strong></p>
</div>

---

## What it is

Vertex is a customer relationship manager for teams that outgrow off-the-shelf tools. Every
object, field, view and automation is yours to change, and each sign-up gets its own
workspace with its own data.

- **Records** — companies, people, opportunities, tasks and notes, with custom objects and fields
- **Views** — tables and kanban boards, filtered, sorted and grouped however the team works
- **Workflows** — triggers and actions that run when records change
- **AI** — an assistant over your workspace data, plus a built-in MCP server
- **Self-serve workspaces** — anyone who signs up gets their own workspace; sign in again and you land straight back in it

## Live

The hosted instance serves the marketing page at `/` and the product at `/welcome`, from a
single service.

## Running it locally

Requires Node (see `.nvmrc`), Yarn 4, PostgreSQL and Redis.

```bash
bash packages/twenty-utils/setup-dev-env.sh   # Postgres + Redis, first run only
npx nx start twenty-server                    # API           → http://localhost:3002
npx nx start twenty-front                     # landing + app → http://localhost:3004
npx nx run twenty-server:worker               # background jobs
```

Then open **http://localhost:3004** for the landing page, or `/welcome` to sign in.

Configuration lives in `packages/twenty-server/.env` and `packages/twenty-front/.env`.
The settings that matter most:

| Variable | Purpose |
| --- | --- |
| `PG_DATABASE_URL`, `REDIS_URL` | Data stores |
| `APP_SECRET` | Signing key for sessions and tokens |
| `SERVER_URL`, `FRONTEND_URL` | Public URLs of the instance |
| `IS_MULTIWORKSPACE_ENABLED` | Every sign-up creates its own workspace |
| `IS_WORKSPACE_SUBDOMAIN_ROUTING_DISABLED` | Keep all workspaces on one hostname, for hosts without wildcard DNS |
| `IS_WORKSPACE_CREATION_LIMITED_TO_SERVER_ADMINS` | Set `false` to allow self-serve sign-up |
| `AUTH_GOOGLE_*`, `AUTH_MICROSOFT_*` | Social sign-in |

## Deployment

The image is built from `packages/twenty-docker/twenty/Dockerfile.railway`, which bundles
the API and the front end into one service. It needs PostgreSQL and Redis, and creates its
own schema on first boot.

## Checks

```bash
npx nx lint twenty-front && npx nx lint twenty-server
npx jest <path> --config=packages/<package>/jest.config.mjs
```
