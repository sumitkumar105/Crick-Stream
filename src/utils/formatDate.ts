// export function formatDate(val: string) {
//   console.log(val);
//   const date = new Date(val);
//   console.log(date);
//   const formattedDate = date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   return formattedDate;
// }
export function formatDate(val: string) {
  if (!val) {
    console.error("Invalid date value:", val);
    return "Invalid Date";
  }

  const date = new Date(val);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error("Unable to parse date:", val);
    return "Invalid Date";
  }

  // Formatting the date
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}
