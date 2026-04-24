export interface CoinCapHederaPluginTool {
  method: string;
  name: string;
  description: string;
  parameters: unknown;
  outputParser: unknown;
  execute: (client: unknown, context: unknown, params: unknown) => Promise<unknown>;
}

export interface CoinCapHederaPluginType {
  name: string;
  version?: string;
  description?: string;
  tools: (context: unknown) => CoinCapHederaPluginTool[];
}

export const CoinCapHederaPlugin: CoinCapHederaPluginType;

export const coinCapHederaPluginToolNames: {
  readonly GET_HBAR_PRICE_IN_USD_TOOL: "get_hbar_price_in_USD_tool";
};

export default CoinCapHederaPlugin;
