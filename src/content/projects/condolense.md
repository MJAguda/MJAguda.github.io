---
title: CondoLense
tagline: An AI-powered lead finder for condo agents in Metro Manila and Cebu. It pulls buyer posts from Reddit, Telegram and Facebook, scores them with AI and drafts the first message.
role: Full-stack development
tech: [Laravel, Livewire, Alpine.js, Tailwind CSS, MySQL, Groq (LLaMA 3.3 70B), Facebook Graph API, Reddit API, Telegram, AWS EC2, GitHub Actions, PHPUnit]
order: 3
status: personal-project
links:
  - label: Source on GitHub
    href: https://github.com/MJAguda/condolense
---

Condo buyers in the Philippines post what they want in the open every day, often in Taglish: *"May budget ako ng 4.5M, looking for 1BR sa BGC or Makati."* Agents miss most of these posts because they're buried in hours of scrolling and noise, and a slow reply loses the sale. CondoLense finds those buyers, ranks them and helps the agent reach out first. I designed and built it end to end.

## Lead finding and scoring

- Pulls posts and comments on a schedule from **property subreddits**, **public Telegram channels** and the agent's own **Facebook Page**.
- An LLM (**LLaMA 3.3 70B on Groq**) classifies each post as buyer, seller or noise, scores buyer intent from 0 to 100, and extracts the **budget, location, unit type and urgency**. Location aliases are normalised on the server too, so "Fort Bonifacio" and "BGC" count as the same place.
- A buyer who posts several times becomes **one lead** with their full message history.
- The lead inbox filters by signal, status, score, location, unit type and urgency.

![The CondoLense lead inbox: buyer posts from Reddit and Facebook, each with an AI intent score, extracted location, unit type, budget and urgency, plus an AI-drafted Taglish message and a matching unit from the agent's inventory (demo data)](../../assets/condolense/lead-inbox-wide.png)

## AI outreach in the agent's own voice

The agent pastes one message they would normally send, and the AI drafts first-contact messages in the same tone, in **Filipino, Taglish or English**. It also checks the agent's inventory for up to three **available units that match** the buyer's budget, location and unit type, and can write the offer straight into the draft.

## Contract-aware Messenger replies

When a buyer messages the agent's Facebook Page, a **Messenger webhook** matches the sender to their unit (by unit or contract number, owner name or an earlier thread). It then reads the **contract PDF** and drafts a reply from the real figures: total price, amortisation, down payment terms and turnover date. If no unit matches, it asks the buyer for their unit or contract number.

![The Messenger inbox: a buyer asks in Taglish about their balance and turnover, the message is linked to unit E-2801, and the AI drafts a reply with the contract number, total price and turnover date (demo data)](../../assets/condolense/messenger-reply-wide.png)

## Inventory and dashboard

- Agents manage their projects and units in the app. Pasting raw unit details or uploading a PDF lets the AI fill in the form, with every AI-filled field highlighted and nothing saved until the agent approves it.
- A dashboard shows the lead pipeline by status, how posts were classified on each platform, and the unit inventory.

![Dashboard panels: leads by status, post classification (buyer, seller, noise) and unit inventory by status and unit type (demo data)](../../assets/condolense/dashboard-pipeline-wide.png)

## How it's built

- **Laravel 12** with **Livewire 4**, **Alpine.js** and **Tailwind CSS 4**, on **MySQL**. Domain logic lives in single-purpose action classes, and every external API sits behind its own service.
- **Facebook Login**, plus **Reddit OAuth** and the **Telegram Login Widget** for connecting accounts.
- Tests in **PHPUnit**, and a **GitHub Actions** pipeline that runs them, then deploys to **AWS EC2** (Nginx, PHP-FPM).
- Respects the Groq free-tier rate limit (30 requests per minute) by pacing classification calls.
