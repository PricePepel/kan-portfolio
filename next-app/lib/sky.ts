/**
 * Spherical astronomy utilities.
 *
 * Convert right ascension / declination → altitude / azimuth for a
 * given observer (lat, lon) at a given UTC instant. Math is the standard
 * Meeus textbook formulae; precision is ~0.1° (more than enough for a
 * vector starfield rendered at <1% page opacity).
 */

const DEG = Math.PI / 180;
const HOURS_TO_DEG = 15;

/** Julian Date from UTC components (Gregorian calendar). */
export function julianDate(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second = 0
): number {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return (
    Math.floor(365.25 * (year + 4716)) +
    Math.floor(30.6001 * (month + 1)) +
    day +
    B -
    1524.5 +
    (hour + minute / 60 + second / 3600) / 24
  );
}

/** Greenwich Mean Sidereal Time in degrees. */
function gmst(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  let gst =
    280.46061837 +
    360.98564736629 * (jd - 2451545.0) +
    0.000387933 * T * T -
    (T * T * T) / 38710000;
  gst = ((gst % 360) + 360) % 360;
  return gst;
}

/**
 * Convert equatorial (RA hours, Dec deg) to horizontal (Alt deg, Az deg)
 * for an observer at (latDeg, lonDeg) at the given Julian Date.
 * Azimuth measured from north, increasing eastwards (standard convention).
 */
export function raDecToAltAz(
  raHours: number,
  decDeg: number,
  latDeg: number,
  lonDeg: number,
  jd: number
): { alt: number; az: number } {
  const lst = (gmst(jd) + lonDeg) % 360; // local sidereal time in degrees
  const ha = lst - raHours * HOURS_TO_DEG; // hour angle in degrees
  const haRad = ha * DEG;
  const decRad = decDeg * DEG;
  const latRad = latDeg * DEG;

  const sinAlt =
    Math.sin(decRad) * Math.sin(latRad) +
    Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt))) / DEG;

  const cosAlt = Math.cos(Math.asin(sinAlt));
  let az = 0;
  if (cosAlt !== 0) {
    const cosAz =
      (Math.sin(decRad) - Math.sin(latRad) * sinAlt) /
      (Math.cos(latRad) * cosAlt);
    az = Math.acos(Math.max(-1, Math.min(1, cosAz))) / DEG;
    if (Math.sin(haRad) > 0) az = 360 - az;
  }

  return { alt, az };
}

/**
 * Stereographic projection: zenith at center of unit disc, horizon at rim.
 * Returns { x, y } in [-1, 1]² coordinates. Returns null if below horizon.
 *
 * North is up (negative y), east is right (positive x).
 */
export function stereographic(
  alt: number,
  az: number
): { x: number; y: number } | null {
  if (alt < 0) return null;
  const zenith = 90 - alt;
  const r = Math.tan((zenith * DEG) / 2);
  const azRad = az * DEG;
  return {
    x: r * Math.sin(azRad),
    y: -r * Math.cos(azRad)
  };
}

/** Tashkent observer constants. */
export const TASHKENT = {
  latDeg: 41.3,
  lonDeg: 69.3,
  /** A fixed instant the sky is captured at — late spring evening, 2026-05-11 21:47 local (UTC+5). */
  instantUtc: { year: 2026, month: 5, day: 11, hour: 16, minute: 47 },
  /** Pretty label rendered in the footer. */
  label: '2026-05-11 · 21:47 UTC+5'
};

/** Compute Tashkent's fixed-instant sky once at module load. */
export function projectedTashkentSky() {
  const { year, month, day, hour, minute } = TASHKENT.instantUtc;
  const jd = julianDate(year, month, day, hour, minute);
  return { jd };
}
