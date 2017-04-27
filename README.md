### Loop list Technical Challenge
###### Alex Bennett

#### Running Locally:
```shell
$ git clone git@github.com:alexUXUI/loopList.git
$ cd loopList
$ npm i
$ npm run start
```

> To run the tests:

```shell
$ npm run test
```

#### Notes

Overall thought it was a *super* fun assessment. Really wanted to build a function that could take an array of search terms as well as an HTML source, and recursively walk through the DOM nodes, while collecting data points around each search term. But, since I didn't have time to write such a solution, I focused on getting the job done rather than designing and implementing a solution that could handle more search criteria and/or different webpages. Was a hard tradeoff!

###### Trouble shooting

If you are having any trouble downloading and running the application and tests, please try these things. `$ rm -rf node_modules` folder and re-download. May have to download mocha globally with `$ npm i -g mocha`. Chai request can also get a little fussy so if you;re having trouble running the tests, just wait a moment and try re-running the tests with `$ npm run start` or `$ mocha`.
