const DEFAULT_BASE: number = 10;

export function parseNumber(
  value: string,
  base: number = DEFAULT_BASE
): number {
  const result: number = parseInt(value, base);
  if (!isNaN(result)) {
    return result;
  }
  return 0;
}
