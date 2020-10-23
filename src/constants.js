export const NUMBERS = ['1','2','3','4','5','6','7','8','9'];
export const BINARY_OP = ['+', '-', '*', '/'];
export const OP_TO_FUNC_MAP = {
  '+': (a, b) => a+b,
  '-': (a, b) => a-b,
  '*': (a, b) => a*b,
  '/': (a, b) => a/b,
  'square': (a) => a*a,
  'root': (a) => Math.sqrt(a),
  'negate': (a) => -a
};