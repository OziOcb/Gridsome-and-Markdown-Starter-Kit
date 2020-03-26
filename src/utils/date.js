const monthAbbrev = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

export const getYear = date => {
  const dateInstance = new Date(date)
  return dateInstance.getFullYear()
}

export const getMonth = date => {
  const dateInstance = new Date(date)
  return monthAbbrev[dateInstance.getMonth()]
}

export const getDay = date => {
  const dateInstance = new Date(date)
  return dateInstance.getDate()
}

export const formatDateToMonthDay = date => {
  const month = getMonth(date)
  const day = getDay(date)

  return `${month} ${day}`
}

export const formatDateToDayMonthYear = date => {
  const year = getYear(date)
  const month = getMonth(date)
  const day = getDay(date)

  return `${day} ${month} ${year}`
}
