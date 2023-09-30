export const formatDate = (
  date,
  year = "numeric",
  month = "long",
  day = "numeric"
) => {
  const options = {
    year,
    month,
    day,
  };
  return new Date(date).toLocaleDateString("es-CL", options);
};
