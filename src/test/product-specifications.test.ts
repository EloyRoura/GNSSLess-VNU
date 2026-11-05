import { describe, expect, it } from "vitest";
import { productSpecifications as specs } from "@/lib/product-specifications";

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