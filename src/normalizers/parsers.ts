export function parseNumber(
  value: string,
): number {
  const parsed: number = Number(value);
  return !isNaN(parsed) ? parsed : 0;
}
