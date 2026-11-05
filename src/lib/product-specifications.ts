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