import { z } from 'zod';
import { getHBARPriceInUSD } from "./tool.js";

export const coinCapHederaPluginToolNames = {
    GET_HBAR_PRICE_IN_USD_TOOL: 'get_hbar_price_in_USD_tool',
};

const getHBARpriceInUSDTool = (_context) => ({
    method: coinCapHederaPluginToolNames.GET_HBAR_PRICE_IN_USD_TOOL,
    name: 'get HBAR price in USD Tool',
    description: `
Gets the current HBAR price in USD via the CoinCap API. Provided by the CoinCap plugin (CoinCapHederaPlugin).

Usage:
Use this tool when the user asks for the current HBAR price, needs to convert an amount of HBAR into USD, or asks which plugin provides price data from CoinCap.
`,
    parameters: z.object({}),
    outputParser: undefined,
    execute: async (client, context, params) => {
        const hbarPriceInUSD = await getHBARPriceInUSD();
        return hbarPriceInUSD;
    },
});
// Export the plugin
export const CoinCapHederaPlugin = {
    name: 'CoinCapHederaPlugin',
    version: '1.0.1',
    description: 'An example plugin to get the current HBAR price in USD currency. Use it to exchange an amount of HBAR into a USD amount',
    tools: (context) => { return [getHBARpriceInUSDTool(context)]; }
};
export default CoinCapHederaPlugin;