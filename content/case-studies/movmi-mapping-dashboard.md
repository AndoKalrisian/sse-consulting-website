---
order: 2
title: A mapping dashboard reused across shared mobility consultations
card_title: One mapping dashboard, reused across shared mobility clients
short_title: MOVMI MAPPING DASHBOARD
meta_description: "Case study: an interactive Plotly-Dash mapping tool built for movmi and reused across carshare and mobility clients."
industry_tag: TRANSPORTATION
kicker: PLOTLY-DASH · AWS DATA LAKE
accent: sky
card_summary: movmi's consultants needed one place to see demand, transit and service boundaries. I built a tool that has supported at least 8 client consultations.
cover: https://placehold.co/1600x900/122040/3C70BD?text=movmi+Mapping+Dashboard
lead: movmi's consultants needed to look at all the relevant data in one place instead of piecing it together for each project. I built a mapping dashboard that one team now reuses across many clients.
chips:
  - "CLIENT: MOVMI AND ITS CLIENTS"
  - SINCE 2020
  - I BUILT AND MAINTAIN IT
glance:
  Industry: Shared mobility / carshare
  Engagement: Began in 2020 as a direct role with movmi; continued through Solid State Entity from 2021
  My role: Designed and built the tool, and maintain it
  Tools: Python, Plotly-Dash, AWS data lake
---

## The situation

Carshare operators and other shared mobility providers often struggle to decide where to expand. Many don't know where to start: which neighbourhoods have the demand, where vehicles should be added or removed, or which new regions are worth launching in. movmi's consultants advise clients on these decisions, and they needed a way to look at all the relevant data in one place instead of piecing it together separately for each project.

## What I did

I built an interactive mapping dashboard in Python with Plotly-Dash, with some of its data held in an AWS data lake I built. It brings together:

- Census demographic data
- Transit stops and routes
- Bike routes
- Mobility hubs
- Carshare service boundaries
- Trip and station data specific to each client

The first five layers are shared across projects. For each engagement, I add the client's own data sources to enrich the map, so one tool serves many clients without being rebuilt each time.

movmi's consultants, who are subject matter experts in shared mobility, use the tool alongside me. It's usually presented to clients by the movmi consultant working with them. Some of the visualizations in the consulting reports come directly from it. In some cases clients have been given direct access, though that isn't the norm.

## The result

- **Reused across clients:** the tool has been used in at least 8 consultations with different clients.
- **Informed real decisions:** it has helped some projects move forward with expansion, and helped others reconsider expanding into markets that weren't viable.
