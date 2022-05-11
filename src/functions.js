export const yearsOld = (date) => {
  const today = new Date()

  const actualYear = parseInt(today.getFullYear())
  const actualMonth = parseInt(today.getMonth() + 1)
  const actualDay = parseInt(today.getDate())

  const [year, month, day] = date.split('-')

  parseInt(year)
  parseInt(month)
  parseInt(day)

  let age = actualYear - year
  if (actualMonth < month) {
    age--
  } else if (actualMonth === month && actualDay < day) {
    age--
  }

  return age
}
