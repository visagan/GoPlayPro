### Server Side Tech Stack
* JDK 1.8
* Spring Boot 1.3RC1
* Spock Testing (Unit/Integration/Functional)

### Front End Tech Stack
* Node (Node Package Manager - npm only, I'm not using node.js)
* Bower for managing javascript libraries
* AngularJS 1.4.x

### Build/Run

#### Front End Dependencies

If you don't have Node and Bower, you can install them easily via homebrew on OSX. You are on your own if you are using Windows or another OSX package manager:
```
$ brew install node
$ npm install -g bower
```

Once installed, you need to use Bower to download the javascript dependencies. Bower uses bower.json and .bowerrc to know which dependencies to get and where to save them:
```
$ cd <project directory>
$ bower install
```

Once the front end dependencies are loaded, you can create/modify application-default.properties to add your oracle datasource values and run:
```
$ ./gradlew bootRun
```
