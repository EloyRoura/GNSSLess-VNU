import { describe, expect, it } from "vitest";
import {
  productSpecifications as specs,
  fieldRecord,
  specSheet,
  swapLine,
} from "@/lib/product-specifications";

const group = (name: string) => specSheet.find((g) => g.group === name)!;
const row = (name: string, key: string) =>
  group(name).rows.find(([k]) => k === key)?.[1];

describe("GNSSLess spec sheet", () => {
  it("states position average error as within 5% of altitude AGL", () => {
    expect(row("Performance", "Position average error")).toBe("Within 5% of altitude AGL");
  });
  it("states drift as 5 m/s with a wind-speed footnote", () => {
    expect(row("Performance", "Drift under dead reckoning")).toBe("5 m/s*");
    expect(group("Performance").footnotes).toContain(
      "* Subject to wind speed without GNSS initialization.",
    );
  });
  it("states altitude as tested up to 3000 m AGL", () => {
    expect(row("Environment", "Altitude")).toBe("Tested up to 3000 m AGL");
  });
  it("states terrain as engineered for featureless areas", () => {
    expect(row("Environment", "Terrain")).toBe("Engineered for featureless areas");
  });
  it("states operational conditions as 24h operations and adverse weather", () => {
    expect(row("Environment", "Operational conditions")).toBe(
      "24h operations · adverse weather",
    );
  });
  it("collapses size, power and weight into one SWaP row", () => {
    expect(row("Platform", "SWaP")).toBe(swapLine);
    expect(swapLine).toBe("210 × 155 × 125 mm · 100 W · 1.7 kg");
    expect(group("Platform").rows.map(([k]) => k)).not.toContain("Payload dimensions");
    expect(group("Platform").rows.map(([k]) => k)).not.toContain("Power consumption");
    expect(group("Platform").rows.map(([k]) => k)).not.toContain("Navigation payload");
  });
  it("keeps every card to four rows by dropping altitude error and flight controller", () => {
    expect(group("Performance").rows.map(([k]) => k)).not.toContain("Altitude average error");
    expect(group("Platform").rows.map(([k]) => k)).not.toContain("Flight controller");
    for (const g of specSheet) {
      expect(g.rows).toHaveLength(4);
    }
  });
});

describe("GNSSLess field record", () => {
  it("has 42 flights, 6 platforms, 5 locations, 3 ongoing integrations", () => {
    expect(fieldRecord.flights).toBe(42);
    expect(fieldRecord.platformsFlown).toBe(6);
    expect(fieldRecord.locations).toBe(5);
    expect(fieldRecord.ongoingIntegrations).toBe(3);
  });
});

describe("GNSSLess product specifications", () => {
  it("operates from 0 to 3000 m AGL", () => {
    expect(specs.minimumAltitudeAglM).toBe(0);
    expect(specs.maximumAltitudeAglM).toBe(3000);
  });
  it("consumes 100 W", () => {
    expect(specs.powerW).toBe(100);
  });
  it("supports MAVLink with customizable communications", () => {
    expect(specs.interface).toBe("MAVLink");
    expect(specs.customizableCommunications).toBe(true);
  });
  it("supports desert, mountains and urban terrain", () => {
    expect(specs.terrain).toEqual(["desert", "mountains", "urban"]);
  });
  it("operates day and night", () => {
    expect(specs.dayAndNight).toBe(true);
  });
});