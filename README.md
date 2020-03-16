# Vue JS Boilerplate 

Start your new Vue JS project with this friendly and
easy to use boilerplate!. 

### Install 

Go ahead and make a new directory in which you would like
to hold the application locally, go ahead and 
clone this boilerplate with the following command.

`git clone https://github.com/BenjiBoy13/Vue-Boilerplate.git`

After the repo is cloned go into the directory you just
created and run the following commands.

`npm install`

`npm run start`

This will hopefully launch the application on a 
webpack local server open in port 3000, lets now 
break down the boiler architecture so you can understand
how to use it and get your hands dirty.

### Components

You can find the Vue components under the
**./src/vue/** directory, In which you will hold
all of your vue components, simple, right?; Moving on.

### Routing

The routing file is located under the **root**
of the project, this is where you will find yourself editing
and adding more routes, oh, almost forgot, you will find this
file under the name of **router.js**.

### Styles

By default the css preprocessor  **sass** is
configured, you wil find the main file under the
**root** folder named as **app.scss**, the rest of 
your scss files should be created under this
**./src/scss/** directory.

### Build it!

By running the command **npm run build** your app 
will compile into 3 files under the **dist**
folder, you will find your now bundled files.
Html, Css and javascript.

By default your app is going to be build in 
**Development** mode, you can switch this to 
production mode by editing your webpack config file 
like so:

```javascript
module.exports = {
    mode: "production",
    // ...
}
```

### Of you go!.

That's all you need to know, have fun, happy codding!. 
Cheers 🍺🍺.