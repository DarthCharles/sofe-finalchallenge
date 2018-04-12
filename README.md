# Final Challenge - Real Life Application

During the last stage of SoFE participants will be required to test their teamwork skills and their readiness when working with a "`real-life`" working app.

For this stage we are going to pretend that you have just been hired to work in a big travel company that is proud of its flight booking platform. Your project manager raised several issues and features that will make the platform grow stronger in the market and it will be your job to fix as much tickets as you can. Issues can go from small front-end changes (e.g Change button color) or an evil bug that is making us bleed money (e.g. Users cannot book a flight).

Each solved issue will make the participants collect points depending on the difficulty of each issue/feature. Difficulty levels can be:

 * Easy
 * Medium
 * Hard


## Prerequisites
You will need to have all this already installed by the day of the final challenge, please install everything listed below to start hacking:

### Terminal

You will need a terminal to install dependencies and run frontend and backend server, you better be comfortable working with it!

* For Windows users we recommend using `Git Bash` or `PowerShell`.
* For UNIX users you can use iterm or the terminal that is already included in OS.

### Ruby

Download and install ruby 2.4.X, you can check what installer you should use here: https://www.ruby-lang.org/en/documentation/installation/

For Windows user we recommend: https://rubyinstaller.org/

Once it is done go to a terminal and run:

```
$ gem install bundler
```

### Node
Download and install Node 8.11.X from https://nodejs.org/en/download/

### Text Editor
You can use whatever you want, we recommend you Atom or Visual Studio Code.

## Installation
This is where things get spicy, to get your project up and running you will first need install all dependencies, please read carefully:

**Note** the `$` symbol means you should type that command in your console.

### Backend

Go to your preferred terminal and open the project directory (don't forget where you save it) then execute:

```
$ cd ruby-api
```

If you already installed bundler run the command below if note please install it and come back later:

```
$ ruby-api bundle install
```
It will take a couple of minutes so be patient.
Once it is done go to the following directory:

```
$ cd ruby-api/vendor/farandula-ruby
```

and execute:
```
$ ruby-api/vendor/farandula-ruby bundle install
```

### Frontend
Go back to your project root and the execute:

```
$ cd react-app
```
then run:

```
$ react-app npm install
```
and let it sink for a couple of minutes.

## Running the Servers

For this deed you will need to open two terminal instances, one for the ruby server and one for the react app.

In terminal #1 run:

```
$ finallchallenge/ruby-api ruby lib/app.rb
```

In terminal #2 run:

```
$ finallchallenge/react-app npm start
```

If nothing blows up it means you finally did it!

App should open automatically, if not you can always open your favorite browser and type: `http://localhost:3000`:


**Note:** Use `ctrl+c` to stop everything.

**⚠️Keep in Mind**
* Since we are using test credentials, try to search for common markets and always pick an international airport.
* Try to search flights 1 or more weeks in advance, same day flights can be problematic.


## PROTIPS:
* Take a look at the project structure, see the content of each folder and find out what is its purpose ✨.
* Take your time to understand how the product works. Make a couple of searchs and figure out how that process works. Once you have that understanding attacking bugs will be much easier. (It's worthwhile to do this as a team, so that you're all on the same page)
* Organize your resources cleverly! Read all the issues you can attack and make quick estimations on how long solving them will take (it will probably take you longer than you'd normall expect!)
* Hedge your bets between large tasks and quick wins, it's all about deliverables! A halfway fix is worth ZERO.
* Search wisely. It's ok to make search on how to do X or Y in the given stack. Just make sure you understand what you want to ask and take the time to formulate the search properly. You'll end up saving time and frustrations.
* Learn to love and use Chrome Developer Tools https://developer.chrome.com/devtools
* React Developer Tools might come handy when debugging components https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
* Have fun and happy hacking! :stuck_out_tongue:


