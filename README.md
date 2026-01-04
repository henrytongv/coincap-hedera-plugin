# Hedera Agent Kit - CoinCap Plugin

A plugin for [Hedera Agent Kit JS](https://github.com/hashgraph/hedera-agent-kit-js) that provides integration with the CoinCap API

In this plugin we use CoinCap to get the current price in USD of one HBAR and combine it with the power of the Hedera Agent Kit to get your current balance of HBA in USD currency.

## Overview

This plugin enables `AI agents` to interact with the CoinCap API

## Installation in the example index.js agent

1.- Install the plugin

```bash
npm install coincap-hedera-plugin
```

2.- Add your CoinCap API Bearer token in the .env file ( You get it in the CoinCap website )

```
# Coincap API needed by coincap-hedera-plugin
COINCAP_BEARER_TOKEN=******************************
```

3.- Import the plugin code in your index.js (Hedera Agent)

```js
// CoinCap plugin to connect to CoinCap API
import { CoinCapHederalugin } from 'coincap-hedera-plugin/plugin.js';
```

4.- Add the query and account plugins from core Hedera Agent code, and, this new plugin, in the plugins secion of the agent

```js
const hederaAgentToolkit = new HederaLangchainToolkit({
client,
configuration: {
    tools: [],
    plugins: [coreQueriesPlugin, coreAccountPlugin, CoinCapHederalugin], // <---- Add these
```

5.- Use a prompt to ask for you current balance and tell the agent to want it in USD currency, for example like this:

```js
const response = await agent.invoke(
{ messages: [{ role: 'user', content: "Get my balance in HBAR and give it to me converted to USD currency" }] },
{ configurable: { thread_id: '1' } }
);
```

6.- Now you can run the example agent and you should get your current HBAR balance converted to USD currency

```bash
node index.js
```

## Tools

```js
// Use the CoinCap API to get the current price in USD of one HBAR
function getHBARPriceInUSD()
```