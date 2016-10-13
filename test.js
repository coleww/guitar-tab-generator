var tap = require('tap')

var guitarTabGenerator = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(guitarTabGenerator('world'), 'hello world', 'does it')
})
