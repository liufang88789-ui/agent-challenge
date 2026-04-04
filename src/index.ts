import {
  type Plugin,
  elizaLogger,
} from "@elizaos/core";
import { z } from "zod";

// ============ Action Response Types ============
interface ActionResult {
  text: string;
  data: Record<string, unknown>;
}

// ============ Web Search Action ============
const searchSchema = z.object({
  query: z.string().describe("The search query"),
});

const searchAction = {
  name: "WEB_SEARCH",
  description: "Search the web for current information on any topic",
  similes: ["SEARCH", "LOOKUP", "FIND", "GOOGLE"],
  schema: searchSchema,
  validate: async (_runtime: unknown, _message: unknown) => true,
  handler: async (
    _runtime: unknown,
    _message: unknown,
    _state: unknown,
    options: Record<string, unknown>
  ): Promise<ActionResult> => {
    const query = String(options.query || "");
    elizaLogger.info(`[GoAgent] Web search: ${query}`);
    return {
      text: `🌐 Searching the web for: "${query}"...\n\nIn a full deployment, this would use a real web search API (e.g. Tavily, DuckDuckGo, or SerpAPI). For this Nosana Challenge demo, the search query has been captured and logged.\n\nDemo mode: set up a SERP_API_KEY or Tavily API key in .env to enable live search.`,
      data: { query },
    };
  },
  examples: [],
};

// ============ Summarize Action ============
const summarizeSchema = z.object({
  topic: z.string().describe("The topic to summarize"),
  depth: z.enum(["brief", "detailed"]).default("brief"),
});

const summarizeAction = {
  name: "SUMMARIZE",
  description: "Summarize information about a topic",
  similes: ["SUMMARY", "TLDR", "ABSTRACT"],
  schema: summarizeSchema,
  validate: async () => true,
  handler: async (
    _runtime: unknown,
    _message: unknown,
    _state: unknown,
    options: Record<string, unknown>
  ): Promise<ActionResult> => {
    const topic = String(options.topic || "");
    elizaLogger.info(`[GoAgent] Summarizing: ${topic}`);
    return {
      text: `## Summary: ${topic}\n\n**Brief Overview:**\nThis demo shows the agent's summarization capability. In production, this would use RAG (Retrieval Augmented Generation) with live web search + document retrieval to synthesize information from multiple sources.\n\n**Key Points:**\n- In production: fetch relevant documents using search APIs\n- Generate summaries using Qwen3.5-27B model\n- Running entirely on decentralized GPU via Nosana\n\n*Demo mode: Configure a search API key for full functionality*`,
      data: { topic },
    };
  },
  examples: [],
};

// ============ Task Automation Action ============
const taskSchema = z.object({
  action: z.enum(["add", "list", "done"]).describe("Task action"),
  task: z.string().optional().describe("Task description (for add)"),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
});

const taskAction = {
  name: "MANAGE_TASKS",
  description: "Manage personal tasks and to-do items",
  similes: ["TODO", "TASKS", "ADD_TASK", "LIST_TASKS"],
  schema: taskSchema,
  validate: async () => true,
  handler: async (
    _runtime: unknown,
    _message: unknown,
    _state: unknown,
    options: Record<string, unknown>
  ): Promise<ActionResult> => {
    const action = String(options.action || "");
    elizaLogger.info(`[GoAgent] Task action: ${action}`);
    if (action === "add") {
      return {
        text: `✅ Task added: "${options.task}" [${options.priority} priority]\n\n*Note: Full implementation stores tasks in SQLite database with persistent memory*`,
        data: { action: "add", task: options.task, priority: options.priority },
      };
    } else if (action === "list") {
      return {
        text: `📋 Your Tasks:\n\n1. [medium] Explore ElizaOS plugin ecosystem\n2. [high] Deploy agent to Nosana\n3. [low] Create demo video for submission\n\n*Demo tasks — full implementation uses persistent SQLite storage*`,
        data: { action: "list" },
      };
    }
    return { text: "Unknown task action. Try: add, list, or done", data: {} };
  },
  examples: [],
};

// ============ Skill Discovery Action ============
const skillDiscoveryAction = {
  name: "SKILL_DISCOVERY",
  description: "Discover and explain OpenClaw agent skills",
  similes: ["FIND_SKILLS", "SEARCH_SKILLS", "SKILLS"],
  schema: z.object({
    query: z.string().optional().describe("Optional skill search query"),
  }),
  validate: async () => true,
  handler: async (
    _runtime: unknown,
    _message: unknown,
    _state: unknown,
    options: Record<string, unknown>
  ): Promise<ActionResult> => {
    const query = options.query ? String(options.query) : undefined;
    elizaLogger.info(`[GoAgent] Skill discovery: ${query || "all skills"}`);
    return {
      text: `🔍 **OpenClaw Skill Discovery**\n\n${query ? `Searching for skills matching: "${query}"` : "Available OpenClaw skill categories:"}\n\n**Core Skills:**\n- 🧠 Memory & Context Management\n- 🌐 Web Search & Fetch\n- 📁 File Operations\n- 🔄 Automation & Cron Jobs\n- 💻 Code Execution\n\n**Platform Integrations:**\n- GitHub PR & Issue Management\n- Telegram / Discord Notifications\n- Cron-based Reminders\n- Feishu / Larksuite Docs\n\n**Specialized Bounty Agents:**\n- ClawHunt Bounty Bridge (autonomous task solving)\n- Superteam Earn Monitor\n- Algora Bounty Scout\n\n*This GoAgent itself is an OpenClaw agent running on Nosana GPU network!*`,
      data: { query },
    };
  },
  examples: [],
};

// ============ Agent Info Action ============
const infoAction = {
  name: "AGENT_INFO",
  description: "Provide information about this agent",
  similes: ["ABOUT", "WHO_ARE_YOU", "HELLO"],
  schema: z.object({}),
  validate: async () => true,
  handler: async (): Promise<ActionResult> => {
    return {
      text: `🤖 **GoAgent — Personal AI on Decentralized Infrastructure**

I'm a personal AI agent built with ElizaOS and running on the Nosana decentralized GPU network (Solana blockchain).

**My Capabilities:**
- 🔍 Web research and information synthesis
- 📋 Task automation and reminders
- 🧠 Persistent memory across conversations
- 🔌 Plugin-extensible (Telegram, Discord, Twitter, etc.)
- 🚀 Running on decentralized compute — no Big Tech AI

**Built for:** Nosana x ElizaOS Builders Challenge 2026
**Philosophy:** OpenClaw — your AI, your data, your control

*Built with ElizaOS v1 | Qwen3.5-27B via Nosana GPU | OpenClaw inspired*`,
      data: {},
    };
  },
  examples: [],
};

// ============ Main Plugin ============
export const goAgentPlugin: Plugin = {
  name: "go-agent",
  description:
    "GoAgent — Personal AI assistant with web search, task automation, and OpenClaw skill discovery",
  actions: [searchAction, summarizeAction, taskAction, skillDiscoveryAction, infoAction],
  providers: [],
  evaluators: [],
};

export default goAgentPlugin;
