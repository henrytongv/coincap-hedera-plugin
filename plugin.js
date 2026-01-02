import { z } from 'zod';
import { getHBARPriceInUSD } from "./tool.js";

const getHBARpriceInUSDTool = (_context) => ({
    method: 'get_hbar_price_in_USD_tool',
    name: 'get HBAR price in USD Tool',
    description: `
This is an example plugin tool that demonstrates how to get the current HBAR price in USD currency.

Usage:
Use this tool to get the current HBAR price in USD currency. Use it to exchange an amount of HBAR into a USD amount.
`,
    parameters: z.object({}),
    outputParser: undefined,
    execute: async (client, context, params) => {
        const hbarPriceInUSD = await getHBARPriceInUSD();
        return hbarPriceInUSD;
    },
});
// Export the plugin
export const CoinCapHederalugin = {
    name: 'CoinCapHederalugin',
    version: '1.0.0',
    description: 'An example plugin to get the current HBAR price in USD currency. Use it to exchange an amount of HBAR into a USD amount',
    tools: (context) => { return [getHBARpriceInUSDTool(context)]; }
};
export default CoinCapHederalugin;