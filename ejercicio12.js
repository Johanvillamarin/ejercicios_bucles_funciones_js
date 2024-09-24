const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const foundMutants = mutants.filter((mutant) => mutant.power === power)
  if (foundMutants.length > 0) {
    return (
      'Se encontro ' + foundMutants.length + ' mutante con el poder de ' + power
    )
  } else {
    return 'No existe ningún mutante con el poder de ' + power
  }
}

console.log(findMutantByPower(mutants, 'telepathy'))
console.log(findMutantByPower(mutants, 'invisibility'))
