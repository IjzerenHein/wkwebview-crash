wkwebview-crash
==========

Project to intentionally crash WkWebView for testing purposes

# Build

To build the demo, make sure grunt, webpack and webpack-dev-server are installed globally:

```
npm install -g grunt
npm install -g webpack
npm install -g webpack-dev-server
```

Run npm to install all dev-dependencies:

```
npm install
```

To build the output (www-folder), run the webpack command:

```
webpack
```


# Running

To run the demo either open `www/index.html`

Or use the live-reload server:

```
grunt serve
```

