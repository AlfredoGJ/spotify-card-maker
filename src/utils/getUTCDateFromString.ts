function getUTCDateFromString(dateString: string) {
  const elements = dateString.split("-");
  const date = Date.UTC(
    Number.parseInt(elements[0]),
    elements[1] ? Number.parseInt(elements[1]) : 0,
    elements[2] ? Number.parseInt(elements[2]) : 0
  );
  return new Date(date);
}

export default getUTCDateFromString;
