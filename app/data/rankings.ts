export type Forecast = "up" | "steady" | "down";

export type Location = {
  name: string;
  zone: string;
  score: number;
  forecast: Forecast;
};

// Mock data — replace with the real sensor feed.
const locations: Location[] = [
  { name: "Central Library", zone: "Zone A", score: 76, forecast: "up" },
  { name: "Engineering Building", zone: "Zone A", score: 67, forecast: "steady" },
  { name: "Sports Complex", zone: "Zone B", score: 67, forecast: "down" },
  { name: "Faculty of Arts", zone: "Zone B", score: 67, forecast: "down" },
  { name: "Main Auditorium", zone: "Zone C", score: 52, forecast: "steady" },
  { name: "Science Plaza", zone: "Zone C", score: 31, forecast: "up" },
  { name: "Student Center", zone: "Zone D", score: 7, forecast: "down" },
  { name: "Dormitory 1", zone: "Zone D", score: 7, forecast: "down" },
  { name: "Canteen", zone: "Zone A", score: 7, forecast: "steady" },
  { name: "Parking Building", zone: "Zone B", score: 6, forecast: "up" },
];

export type RankedLocation = Location & { rank: number };

/** All locations ranked best (highest score) first, rank starting at 1. */
export function getRankings(): RankedLocation[] {
  return [...locations]
    .sort((a, b) => b.score - a.score)
    .map((loc, i) => ({ ...loc, rank: i + 1 }));
}
