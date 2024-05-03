'use client';

import { http } from "viem";
import { createStorage, cookieStorage } from "wagmi";
import { sepolia } from "viem/chains";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = '504abab40beba6345bd24a2488a2b28d';
const supportedChains: Chain[] = [sepolia];

export const config = getDefaultConfig({
  appName: "Hanns",
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
});
