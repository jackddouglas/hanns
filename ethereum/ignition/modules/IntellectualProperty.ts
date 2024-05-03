import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const IPModule = buildModule("IPModule", (m) => {
  const ip = m.contract("IntellectualProperty");

  return { ip };
});

module.exports = IPModule;
