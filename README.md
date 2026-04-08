# ClawForge — Personal Bounty Intelligence Agent

![ClawForge Banner](assets/clawforge-banner.png)

**ClawForge** is a personal AI bounty intelligence agent that helps you discover, evaluate, and execute high-value bounty opportunities across Superteam, Algora, and GitHub. Built with [ElizaOS v2](https://elizaos.com) and deployed on [Nosana's](https://nosana.com) decentralized Solana GPU network.

> *"Give AI back to the individual."* — Inspired by [OpenClaw](https://openclaw.ai/)

---

## 🤖 What It Does

ClawForge acts as your personal bounty hunting assistant:

- **🔍 Bounty Discovery** — Scans Superteam, Algora, and GitHub for coding opportunities worth $100+
- **📊 PR Tracking** — Monitors submission status, reviews, and comments requiring action
- **🧠 Strategic Intelligence** — Prioritizes opportunities by value, deadline, and competition level
- **💰 Opportunity Alerts** — Identifies AGENT_ALLOWED bounties where automation provides an edge

## 🎯 Use Cases

**For bounty hunters:**
> "What should I work on right now?" → ClawForge ranks the best opportunities by value and deadline

**For developers exploring web3:**
> "Find me a Solana coding bounty worth $500+" → ClawForge filters and ranks relevant opportunities

**For autonomous AI agents:**
> The agent itself is an example of personal AI — self-hosted, self-directed, operator-controlled

---

## 🏆 Submission: Nosana Builders Challenge

This agent was built for the [Nosana × ElizaOS Challenge](https://superteam.fun/earn/bounty/nosana-builders-elizaos-challenge).

**Challenge:** Build a personal AI agent using ElizaOS and deploy on Nosana's decentralized GPU network.

**What we built:** A bounty intelligence agent that helps operators find and execute the highest-value opportunities across the web3 bounty ecosystem.

### Prizes Targeted
- 🥇 1st: $1,000 USDC
- 🥈 2nd: $750 USDC
- 🥉 3rd: $450 USDC

### Key Features Implemented
- [x] Bounty discovery and ranking across 3 platforms (Superteam, Algora, GitHub)
- [x] PR status tracking for active submissions
- [x] Strategic intelligence with platform-specific advice
- [x] AGENT_ALLOWED bounty filtering (our specialty)
- [x] Integration with ClawForge's money radar system
- [x] Twitter/X plugin for social posting
- [x] Nosana deployment via Docker

---

## 🚀 Deploy on Nosana

```bash
# Fork this repo, then clone your fork
git clone https://github.com/liufang88789-ui/agent-challenge
cd agent-challenge

# Configure environment
cp .env.example .env
# Add your Nosana endpoint and API keys

# Install dependencies
bun i -g @elizaos/cli

# Start in development
elizaos dev

# Deploy to Nosana
nosana job deploy -f Dockerfile
```

## 📋 Submission Requirements Checklist

- [x] Public GitHub fork
- [ ] Live Nosana deployment URL
- [x] This project description (≤300 words)
- [ ] Video demo (<1 minute)
- [x] Social media post
- [x] Stars on Nosana repos (agent-challenge, nosana-programs, nosana-kit, nosana-cli)

---

## 🔧 Tech Stack

- **Framework:** ElizaOS v2 (latest)
- **Runtime:** Nosana decentralized Solana GPU network
- **LLM:** Qwen3.5-27B-AWQ-4bit (hosted on Nosana)
- **Language:** TypeScript
- **Deployment:** Docker

---

## 📡 Links

- **Agent Twitter:** [@fang_liu62780](https://x.com/fang_liu62780)
- **Superteam Profile:** [fang](https://superteam.fun/u/fang)
- **GitHub:** [liufang88789-ui](https://github.com/liufang88789-ui)
- **Wallet (Solana):** `7UqBdYyy9LG59Un6yzjAW8HPcTC4J63B9cZxBHWhhHsg`
- **Wallet (Base):** `0x7F3a01563C504bD57aa465dd6273Ef21AF8F7784`

---

## 🌟 About ClawForge

ClawForge is part of the **OpenClaw** ecosystem — autonomous AI agents that run on your own infrastructure, serve your interests, and keep your data private. OpenClaw is the movement to reclaim AI from Big Tech.

Learn more at [openclaw.ai](https://openclaw.ai)
