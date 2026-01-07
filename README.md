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

4.- Import the coreAccountQueryPlugin plugin code in your index.js (Hedera Agent)

This core plugin is already provided by the Hedera, it is needed to query the account (read its balance)
```js
import { coreAccountQueryPlugin } from 'hedera-agent-kit';
```

5.- Add the query and account plugins from core Hedera Agent code, and, this new plugin, in the plugins section of the agent

```js
const hederaAgentToolkit = new HederaLangchainToolkit({
client,
configuration: {
    tools: [],
    plugins: [coreAccountQueryPlugin, CoinCapHederalugin], // <---- Add the plugin here
```

6.- Use a prompt to ask for you current balance and tell the agent to want it in USD currency, for example like this:

```js
const response = await agent.invoke(
{ messages: [{ role: 'user', content: "Get my balance in HBAR and give it to me converted to USD currency" }] },
{ configurable: { thread_id: '1' } }
);
```

> [!NOTE]
> The previous prompt results in a multi-step tool invocation:
> 
> - Fetch the HBAR balance.
> - Fetch the current HBAR price.
> - Convert the balance to USD.
> 
> It is important for developers to be aware of, as configurations that limit the agent to only one tool call per request will cause this prompt to fail or behave incorrectly.

7.- Now you can run the example agent and you should get your current HBAR balance converted to USD currency

```bash
node index.js
```

## Tools

### Get HBAR price in USD
Invoke the CoinCap API to get the current price in USD of one HBAR

#### JS Function
```js
function getHBARPriceInUSD()
```

#### Input Parameters

None

#### Output Values

| Value   | Type     | Description |
|---------|----------|-------------|
| Result  | `Number` | Value in USD currency of 1 HBAR according to CoinCap |

## Optional: Plugin distribution, only needed to publish the npm package

```bash
npm login
npm publish
```