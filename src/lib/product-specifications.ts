export const productSpecifications = {
  minimumAltitudeAglM: 0,
  maximumAltitudeAglM: 3000,
  powerW: 100,
  dimensionsMm: [210, 155, 125],
  weightKg: 1.7,
  interface: "MAVLink",
  customizableCommunications: true,
  terrain: ["desert", "mountains", "urban"],
  dayAndNight: true,
} as const;

/** Field deployment record (flight-test campaign Jan 2025 – Feb 2026 + programme totals). */
export const fieldRecord = {
  flights: 42,
  flightHours: 28.5,
  flightDays: 23,
  platformsFlown: 6,
  locations: 5,
  ongoingIntegrations: 3,
  testBed: "AYK-250",
  typicalPositionErrorM: 21,
  typicalPositionAltitudeM: 550,
  typicalVelocityErrorMs: 0.62,
} as const;

/** Common specification sheet. */
export const specSheet = [
  {
    group: "Performance",
    rows: [
      ["Operation within GNSS-denied area", "No limit"],
      ["Position average error", "50 m + 5% of altitude AGL"],
      ["Drift under dead reckoning", "5 m/s (after GNSS initialization; subject to wind speed without it)"],
      ["Velocity average error", "5 m/s"],
      ["Altitude average error", "10 m"],
    ],
  },
  {
    group: "Environment",
    rows: [
      ["Altitude", "Tested between 550 m and 3,000 m AGL"],
      ["Terrain", "Mixed featureful and featureless, over desert areas"],
      ["Geographic operation", "Worldwide"],
      ["Operational conditions", "24-hour navigation · adverse weather · over open water"],
    ],
  },
  {
    group: "Platform",
    rows: [
      ["Platform type", "Tested on VTOL and fixed-wing"],
      ["Flight dynamics", "Max roll rate 30° · roll angle 40°"],
      ["Velocity", "Tested up to 50 m/s"],
      ["Flight controller", "PX4 and ArduPilot via MAVLink"],
      ["Payload dimensions", "210 × 155 × 125 mm"],
      ["Power consumption", "100 W"],
      ["Navigation payload", "1.7 kg (computer, RGB camera, IMU)"],
    ],
  },
] as const;
