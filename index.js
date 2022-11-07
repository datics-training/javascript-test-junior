// program to check leap year
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// Please write all possible test cases for this function based on the conditions above. Use the Unit Tests button (button with tick mark) in the left sidebar. 

module.exports = {
  leapYear
}