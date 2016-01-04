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

Once the front end dependencies are loaded, you can create/modify application.properties to add your mysql datasource values and run:
```
$ ./gradlew bootRun
```


# Will be updating the following on more recent and relevant  (Please keep looking at this readMe for updates!!)
1) Git clone the repo 

2) Install mysql latest and start the mysql server (http://blog.joefallon.net/2013/10/install-mysql-on-mac-osx-using-homebrew/)
   Note: 
      mysql_secure_installation    for the user name root set password as password. 
      If there are persmission errors,  do 
         $ chmod -R 777 /usr/local/var/mysql
         $ chown -R _mysql:_mysql /usr/local/var/mysql
    Should fix it.
    
    mysql -uroot -p 
    Type in password 
    
    Should take to the mysql console. 
    
    Alternatively install mysql workbench UI.
     (http://dev.mysql.com/get/Downloads/MySQLGUITools/mysql-workbench-community-6.3.5-osx-x86_64.dmg)

3) Create a Database goplay 
```
   CREATE DATABASE IF NOT EXISTS GOPLAYPRO; 
```

4) Create a Table users  (yet  to be updated for authentication and user profiles)

```
CREATE TABLE Persons
(
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255),
  name varchar(255),
  PRIMARY KEY (ID)
)
```

5) Go to the Go PLay Pro  Folder and then

$ ./gradlew bootRun

This will start the servers. From Browser we can issue URL to test the service. 

Command Line Test:  (We will be automating the unit test cases and also the curl test cases, Once the UI is ready we will be having integration test cases.)

Need to pass user:password   encoded as I showed, in the basic authentication header . 

Will update this documentation with more relevant content. Shown here are sample ones from the old repo GoPlay Which i shared long back. 

Create User: 
```
   curl -H "Content-Type: application/json" -X POST -d '{"name":"GOPLAY!","email":"rest@goplay.com"}' http://localhost:8080/users/
```

Delete User: 
  Before deleting check if the id '2' is present either by checking the DB or by searching by id. 

```
 curl  -X DELETE  http://localhost:8080/users/2
```

Find User: 

```
curl  -X GET  http://localhost:8080/users/1
```


