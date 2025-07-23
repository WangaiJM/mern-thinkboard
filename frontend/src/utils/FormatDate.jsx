const FormatDate = ({ createDate }) => {
  const date = new Date(createDate);
  const dateKE = new Intl.DateTimeFormat("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Nairobi",
    timeZoneName: "short",
  }).format(date);

  return <div>{dateKE}</div>;
};
export default FormatDate;
