export function formatDate(date: {
  seconds: number;
  nanoseconds: number;
}): string {
  const newDate = new Date(date.seconds * 1000);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return newDate.toLocaleDateString("en-US", options).replace(/ /g, " / ");
}
