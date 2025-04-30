/*
 * Given a string `s`, determine if the parentheses are valid.
 * Return `true` if all types of brackets (parentheses, curly braces, square brackets) are properly opened and closed
 * in the correct order. Otherwise, return `false`.
 *
 * I solved this using a stack, as we need to keep track of the last opened bracket. When encountering a closing bracket,
 * we check if it matches the most recent (top) bracket in the stack. If it does, we pop the stack (since the pair is valid).
 * If it doesn't match or if no matching opening bracket is found, we push the closing bracket to the stack.
 *
 * At the end, if the stack is empty, all brackets were closed correctly; otherwise, there are unmatched brackets, meaning
 * the parentheses are invalid.
 */
const isValidParentheses = (s: string): boolean => {
  const stack: string[] = [];

  for (let p of s) {
    if (stack.length) {
      const last = stack[stack.length - 1];
      if (isPair(last, p)) {
        stack.pop();
        continue;
      }
    }
    stack.push(p);
  }

  return stack.length === 0;
};

const isPair = (last: string, cur: string) => {
  return (
    (last === "(" && cur === ")") ||
    (last === "{" && cur === "}") ||
    (last === "[" && cur === "]")
  );
};
