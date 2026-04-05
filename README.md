# GoAgent — Personal AI Agent on Nosana

> 🤖 Personal AI Agent built with ElizaOS and deployed on Nosana decentralized GPU network.
> Inspired by [OpenClaw](https://openclaw.ai/) — your AI, your data, your control.

## Challenge Submission

**Nosana x ElizaOS Builders Challenge** | **Prize: $3,000 USDC**

---

## What is GoAgent?

GoAgent is a personal AI research and automation agent that:

- 🔍 **Web Research** — Searches and synthesizes information from the web
- 📋 **Task Automation** — Manages to-do lists and reminders
- 🧠 **Persistent Memory** — Remembers context across conversations
- 🔌 **Plugin-Extensible** — Connect to Telegram, Discord, Twitter, and more
- 🚀 **Decentralized** — Runs on Nosana's GPU network, not Big Tech servers

## Architecture

```
User Message → ElizaOS Framework → Qwen3.5-27B (via Nosana GPU)
              → Custom Actions (search, tasks, skills)
              → Response
```

## Tech Stack

- **Framework:** ElizaOS v1 (open-source AI agent framework)
- **Model:** Qwen3.5-27B via Nosana decentralized inference
- **Compute:** Nosana GPU network (Solana blockchain)
- **Philosophy:** OpenClaw — self-hosted personal AI

## Quick Start

### Local Development

```bash
# Install dependencies
bun install

# Copy environment variables
cp .env.example .env
# Edit .env with your Nosana API key (use "nosana" for challenge endpoint)

# Start in development mode
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to chat with GoAgent.

### Deploy to Nosana

```bash
# Build Docker image
docker build -t liufang88789-ui/nosana-eliza-agent:latest .

# Push to Docker Hub (or any registry)
docker push liufang88789-ui/nosana-eliza-agent:latest

# Deploy via Nosana CLI
nosana job deploy \
  --job ./nos_job_def/nosana_eliza_job_definition.json \
  --network solana
```

Or use the Nosana web interface at [nosana.com](https://nosana.com).

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | API key for LLM (use `nosana` for challenge endpoint) | `nosana` |
| `OPENAI_API_URL` | Nosana Qwen3.5 endpoint | (see .env.example) |
| `MODEL_NAME` | Model to use | `Qwen3.5-27B-AWQ-4bit` |
| `SERVER_PORT` | Server port | `3000` |

## Capabilities

### Web Research
Ask GoAgent to search for information on any topic. In production with a search API key, it performs live web searches and synthesizes findings.

### Task Management
```
User: "Add a task to review the OpenClaw documentation"
GoAgent: ✅ Task added: "Review the OpenClaw documentation" [medium priority]
```

### OpenClaw Skill Discovery
GoAgent knows about OpenClaw agent skills including:
- Memory & context management
- GitHub integration
- Telegram/Discord notifications
- Cron-based automation
- ClawHunt bounty solving

## Deployment URL

*(To be filled after Nosana deployment)*

## Submission Checklist

- [x] GitHub fork with agent code
- [ ] Live Nosana deployment URL
- [ ] Demo video (<1 minute)
- [ ] Social media post (X/Twitter)
- [x] GitHub stars on Nosana repos (✓ starred: agent-challenge, nosana-programs, nosana-kit, nosana-cli)

## Links

- Challenge: https://superteam.fun/earn/bounty/nosana-builders-elizaos-challenge
- ElizaOS Docs: https://elizaos.github.io/eliza/docs
- Nosana Docs: https://learn.nosana.com/
- OpenClaw: https://openclaw.ai/

## License

MIT
