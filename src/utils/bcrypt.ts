import bcrypt from "bcryptjs";

/**
 * Hashes a password using bcrypt.
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} The hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};


/**
 * Generates a random password based on the given name.
 * @param {string} base - The base for the password.
 * @returns {Promise<string>} A generated password.
 * @throws {Error} If an error occurs during password generation.
 */
export const generatePassword = async (base: string): Promise<string> => {
    try {
        base = base.replace(/\s+/g, ""); 
        const randomNumbers = Math.floor(Math.random() * 10000); 
        const symbols = "!@#$%&";
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]; 
        const password = `${base}${randomSymbol}${randomSymbol}${randomNumbers}`;
        return password;
    } catch (error) {
        throw error;
    }
};

/**
 * Compares a plain password with a hashed password.
 * @param {string} password - The plain password.
 * @param {string} hashedPassword - The hashed password.
 * @returns {Promise<boolean>} True if the passwords match, false otherwise.
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};
