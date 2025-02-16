export function formatDate(val: string) {
  if (!val) {
    console.error("Invalid date value:", val);
    return "Invalid Date";
  }

  const date = new Date(val);

  if (isNaN(date.getTime())) {
    console.error("Unable to parse date:", val);
    return "Invalid Date";
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}
