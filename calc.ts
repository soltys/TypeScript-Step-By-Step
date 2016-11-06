export default class Calc {
    /**
     * Adds two number together
     * 
     * @static
     * @param {number} lhs first number 
     * @param {number} rhs second number
     * @returns {number} result of addition
     * 
     * @memberOf Calc
     */
    public static add(lhs: number, rhs: number): number {
        return lhs + rhs;
    }

    public static mul(lhs: number, rhs: number): number {
        return lhs * rhs;
    }
}
