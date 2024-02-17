export function getColumnSize(index: number): string {
  const patternIndex = index % 7; // Repeat the pattern every 7 items

  if (patternIndex < 3) {
    // First 3 items
    return "1/3";
  } else if (patternIndex >= 3 && patternIndex < 5) {
    // Next 2 items
    return "1/2";
  } else if (patternIndex === 5) {
    // 6th item
    return "2/3";
  } else {
    // 7th item
    return "1/3";
  }
}
