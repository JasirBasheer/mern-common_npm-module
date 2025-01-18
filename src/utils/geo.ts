import geoip, { Lookup } from 'geoip-lite';

/**
 * Finds the geographical location details for a given IP address.
 * @param {string} ip - The IP address to look up.
 * @returns {Lookup | null} The geographical location details for the IP, or null if not found.
 * @throws {Error} If the IP address is invalid or not provided.
 */

export default function findCountryByIp(ip: string): Lookup | null {
    if (!ip) {
        throw new Error("IP not found");
    }
    return geoip.lookup(ip);
}
