const scales = {
  major: [2, 4, 5, 7, 9, 11],
  minor: [2, 3, 5, 7, 8, 10]
}

module.exports = function (tonic, scale, guitarTuning) {
  // TODO: error handling
  // - if tonic is not a valid note, yell
  // - if scale is not in scales yell
  // - if guitarTUning is passed, and contains a note that is not valid, yell
  const tuning = guitarTuning || ['E', 'A', 'D', 'G', 'B', 'E'];
  const intervals = scales[scale];
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const tonicIndex = notes.findIndex((note) => note === tonic);
  const plentyOfNotes = notes.concat(notes); // lol
  const notesInScale = intervals.reduce((collection, interval) => {
    collection.push(plentyOfNotes[tonicIndex + interval])
    return collection
  }, [notes[tonicIndex]])

  const renderedStrings = tuning.map((stringRoot) => {
    const stringRootIndex = notes.findIndex((note) => note === stringRoot);
    var stringString = ''
    for (var i = 0; i < 13; i++) {
      var currentNoteIndex = stringRootIndex + i;
      var currentNote = plentyOfNotes[currentNoteIndex]
      if (notesInScale.find((note) => currentNote === note)) {
        var separator = i < 10 ? '--' : '-'
        stringString += (i + separator)
      } else {
        stringString += '---'
      }
    }
    return `${stringRoot}|-${stringString}|`;
  })
  return renderedStrings.slice().reverse().join('\n')
}
