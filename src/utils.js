const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const formatDate = (date) => {
  const toFormatDate = date ? new Date(date) : new Date();
  const dateVal = toFormatDate.getDate();
  const monthVal = toFormatDate.getMonth();
  const yearVal = toFormatDate.getFullYear();

  const dateText = dateVal < 10 ? `0${dateVal}` : dateVal;
  const month = monthNames[monthVal];

  return `${dateText} ${month} ${yearVal}`;
}

export const getTime = (date) => {
  const toFormatDate = date ? new Date(date) : new Date();
  let hours = toFormatDate.getHours();
  let minutes = toFormatDate.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}