# valueexchange

npm install

node src/main.js

https://www.npmjs.com/package/plotter
is used to output graph, that needs to install gnuplot:

sudo apt-get install gnuplot ghostscript

There's a bunch of parameters that can be set:

-lifetime (lifetime of value)

-curve (set the shape of the decreasing curve)

-refill (amount of value that members get for each refill)

-delay (time members should wait for the next refill)

ex: node src/main.js -lifetime 15 -curve 0.50

