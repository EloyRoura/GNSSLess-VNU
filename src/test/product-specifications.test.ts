import { describe, expect, it } from "vitest";
import { productSpecifications as specs, fieldRecord } from "@/lib/product-specifications";

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