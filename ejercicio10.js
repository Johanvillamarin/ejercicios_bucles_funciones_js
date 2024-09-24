const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  const capital =
    capitals[country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()]

  if (capital) {
    return capital
  } else {
    return 'no hay informacion de la capital de ' + country
  }
}

console.log(getCapital('Spain'))
console.log(getCapital('Canada'))
