# guitar-tab-generator
----------------

[![NPM](https://nodei.co/npm/guitar-tab-generator.png)](https://nodei.co/npm/guitar-tab-generator/)

node module for generating ascii guitar tab representations of scales

### EXAMPLE

``` 
  var guitarTabGenerator = require('guitar-tab-generator');
  guitarTabGenerator('C', 'major');
  => 
    E|-0--1-----3-----5-----7--8-----10----12-|
    B|-0--1-----3-----5--6-----8-----10----12-|
    G|-0-----2-----4--5-----7-----9--10----12-|
    D|-0-----2--3-----5-----7-----9--10----12-|
    A|-0-----2--3-----5-----7--8-----10----12-|
    E|-0--1-----3-----5-----7--8-----10----12-|

```

### API

`function guitarTabGenerator (tonic, scale, guitarTuning(optional))` 

- tonic: should be a capitalized string representation of the tonic note, i.e, "C", "D", "D#". (note: does not recognize flats, only sharps, ONLY!)
- scale: currently handles 'major', and 'minor'
- guitarTuning: optional, defaults to ['E', 'A', 'D', 'G', 'B', 'E']. 