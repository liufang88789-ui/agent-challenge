/**
 * ClawForge — Personal Bounty Intelligence Agent
 * 
 * A personal AI agent that helps with bounty hunting:
 * - Finds and evaluates high-value opportunities across Superteam, Algora, GitHub
 * - Tracks active PR submissions and monitors for review/comments
 * - Provides strategic intelligence on the bounty landscape
 * 
 * Built with ElizaOS v2 + deployed on Nosana decentralized GPU network.
 * Inspired by OpenClaw: autonomous, self-hosted, operator-controlled AI.
 * 
 * Required for submission:
 * - Public GitHub fork ✓ (liufang88789-ui/agent-challenge)
 * - Live Nosana deployment (see Dockerfile)
 * - Project description (see README)
 * - Video demo (<1 min) — see /demo link
 * - Social post ✓ (see Twitter/X)
 * - Stars on Nosana repos ✓ (agent-challenge, nosana-programs, nosana-kit, nosana-cli)
 */

import { clawForgePlugin } from "./bounty-plugin";

export { clawForgePlugin };

// Re-export for easy import
export default clawForgePlugin;
