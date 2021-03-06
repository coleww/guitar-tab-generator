var tap = require('tap')

var guitarTabGenerator = require('./src')

tap.test('renders a C major scale', function (t) {
  t.plan(1)
  const cMajorScale = `E|-0--1-----3-----5-----7--8-----10----12-|
B|-0--1-----3-----5--6-----8-----10----12-|
G|-0-----2-----4--5-----7-----9--10----12-|
D|-0-----2--3-----5-----7-----9--10----12-|
A|-0-----2--3-----5-----7--8-----10----12-|
E|-0--1-----3-----5-----7--8-----10----12-|`

  t.equal(guitarTabGenerator('C', 'major'), cMajorScale)
})

tap.test('renders an E major scale', function (t) {
  t.plan(1)
  const eMajorScale = `E|-0-----2-----4--5-----7-----9-----11-12-|
B|-0-----2-----4--5-----7-----9--10----12-|
G|----1--2-----4-----6-----8--9-----11----|
D|----1--2-----4-----6--7-----9-----11----|
A|-0-----2-----4-----6--7-----9-----11-12-|
E|-0-----2-----4--5-----7-----9-----11-12-|`

  t.equal(guitarTabGenerator('E', 'major'), eMajorScale)
})

tap.test('renders an A minor scale', function (t) {
  t.plan(1)
  const aMinorScale = `E|-0--1-----3-----5-----7--8-----10----12-|
B|-0--1-----3-----5--6-----8-----10----12-|
G|-0-----2-----4--5-----7-----9--10----12-|
D|-0-----2--3-----5-----7-----9--10----12-|
A|-0-----2--3-----5-----7--8-----10----12-|
E|-0--1-----3-----5-----7--8-----10----12-|`

  t.equal(guitarTabGenerator('A', 'minor'), aMinorScale)
})

tap.test('renders an alternate guitar tuning', function (t) {
  t.plan(1)
  const cMajorScale = `E|-0--1-----3-----5-----7--8-----10----12-|
B|-0--1-----3-----5--6-----8-----10----12-|
G|-0-----2-----4--5-----7-----9--10----12-|
D|-0-----2--3-----5-----7-----9--10----12-|
A|-0-----2--3-----5-----7--8-----10----12-|
D|-0-----2--3-----5-----7-----9--10----12-|`

  t.equal(guitarTabGenerator('C', 'major', ['D', 'A', 'D', 'G', 'B', 'E']), cMajorScale)
})