import jwt, { JwtPayload, TokenExpiredError } from 'jsonwebtoken';

/**
 * Generates an access token and a refresh token.
 * @param {string} jwtAccessSecret - Secret key for signing the access token.
 * @param {string} jwtRefreshSecret - Secret key for signing the refresh token.
 * @param {JwtPayload} payload - The payload to encode in the tokens.
 * @returns {Promise<{ accessToken: string, refreshToken: string } | Error>} An object containing both tokens or an error.
 */
export async function createTokens(
    jwtAccessSecret: string,
    jwtRefreshSecret: string,
    payload: JwtPayload
): Promise<any> {
    try {
        if (!jwtAccessSecret || !jwtRefreshSecret) throw new Error('Invalid token secrets');
        const accessToken = jwt.sign(payload, jwtAccessSecret as string, { expiresIn: '1h' });
        const refreshToken = jwt.sign(payload, jwtRefreshSecret as string, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    } catch (error) {
        return new Error('Unexpected error occurred. Please try again');
    }
}

/**
 * Generates a single JSON Web Token (JWT).
 * @param {string} jwtSecret - Secret key for signing the token.
 * @param {JwtPayload} payload - The payload to encode in the token.
 * @returns {Promise<string | null>} The generated JWT or null if an error occurs.
 */
export async function generateToken(
    jwtSecret: string,
    payload: JwtPayload
): Promise<any> {
    try {
        if (!jwtSecret) throw new Error('Invalid token secret');
        return jwt.sign(payload, jwtSecret as string, { expiresIn: '1h' });
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Verifies and decodes a JSON Web Token (JWT).
 * @param {string} token - The JWT token to verify.
 * @param {string} jwtSecret - Secret key used to verify the token.
 * @returns {Promise<JwtPayload>} The decoded token payload if verification is successful.
 * @throws {Error} If the token is expired or invalid.
 */

export async function verifyToken(
    token: string,
    jwtSecret: string
): Promise<JwtPayload> {
    try {
        if (!jwtSecret) throw new Error('JWT_SECRET is not defined');
        const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
        return decoded;
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            throw new Error('Token has expired');
        }
        throw new Error('Invalid Token');
    }
}
