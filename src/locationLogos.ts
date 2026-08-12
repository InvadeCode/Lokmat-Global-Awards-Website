export const LOCATION_LOGOS: Record<string, string> = {
  baku: "https://static.wixstatic.com/media/548938_1ab989b4e53944148b356acca3d590bd~mv2.png",
  dubai: "https://static.wixstatic.com/media/548938_a197a9bae5b84d93920a8f6feeb15841~mv2.png",
  "hong kong": "https://static.wixstatic.com/media/548938_ffe099d2f4ed4e8eb57c90cabf19628f~mv2.png",
  macau: "https://static.wixstatic.com/media/548938_ffe099d2f4ed4e8eb57c90cabf19628f~mv2.png",
  london: "https://static.wixstatic.com/media/548938_1fd265b8996d407995b8147541858509~mv2.jpg",
  cairo: "https://static.wixstatic.com/media/548938_f3b5076c66b8459ab236b19a2cce9775~mv2.png",
  egypt: "https://static.wixstatic.com/media/548938_f3b5076c66b8459ab236b19a2cce9775~mv2.png",
  singapore: "https://static.wixstatic.com/media/548938_e9fa4e9a5f1b40f9a16d85af6ca4b2dd~mv2.png",
};

export function getLocationLogo(locationOrTitle: string): string {
  const str = (locationOrTitle || "").toLowerCase();
  if (str.includes("cairo") || str.includes("egypt")) return LOCATION_LOGOS["cairo"];
  if (str.includes("dubai")) return LOCATION_LOGOS["dubai"];
  if (str.includes("hong kong") || str.includes("macau")) return LOCATION_LOGOS["hong kong"];
  if (str.includes("london")) return LOCATION_LOGOS["london"];
  if (str.includes("singapore")) return LOCATION_LOGOS["singapore"];
  if (str.includes("baku")) return LOCATION_LOGOS["baku"];
  return LOCATION_LOGOS["cairo"];
}
