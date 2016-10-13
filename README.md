guitar-tab-generator
----------------

```
  [![NPM](https://nodei.co/npm/guitar-tab-generator.png)](https://nodei.co/npm/guitar-tab-generator/)
  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
```

### EXAMPLE

### API

`function guitarTabGenerator (tonic, scale, guitarTuning(optional))` 

- tonic: should be a capitalized string representation of the tonic note, i.e, "C", "D", "D#". (note: does not recognize flats, only sharps, ONLY!)
- scale: currently handles 'major', and 'minor'
- guitarTuning: optional, defaults to ['E', 'A', 'D', 'G', 'B', 'E']. 