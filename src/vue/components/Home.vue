<template>
    <div id="home" class="container">
        <div class="card heading">
            <div class="card-body">
                <h2 class="card-title">
                    Welcome stranger!.
                </h2>
                <p class="card-text">
                    If you are watching this it means that you manage to get the server
                    started with success, Im a boilerplate for Vue JS projects, Im configured
                    right out the box but here are some things you should know about me before
                    you get your hands dirty.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title"> Components </h3>
                <p class="card-text">
                    You can find the Vue components under the
                    <strong> ./src/vue/ </strong> path
                </p>
                <p class="card-text">
                    You are now watching the <strong> Home.vue </strong>
                    component located in <strong> ./src/vue/components/Home.vue </strong>
                    as the name suggests, this is your home page element.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title"> Routing </h3>
                <p class="card-text">
                    The routing file is located under the <strong> root </strong>
                    of the project, this is where you will find yourself editing
                    and adding more routes, oh, almost forgot, you will find this
                    file under the name of <strong> router.js </strong>
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title"> Styles </h3>
                <p class="card-text">
                    By default the css preprocessor  <strong> sass </strong>
                    is configured, you wil find the main file under the
                    <strong> root </strong> folder named as <strong> app.scss </strong>,
                    the rest of your scss files should be created under this
                    <strong> ./src/scss/ </strong> directory.
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title"> Build it! </h3>
                <p class="card-text">
                    By running the command <strong> npm run build </strong>
                    your app will compile into 3 files under the <strong> dist </strong>
                    folder, you will find your main html file, your js file
                    and your css file. .
                </p>
                <p class="card-text">
                    By default your app is going to be build in <strong> Development </strong>
                    mode, you can switch this to production mode in the webpack config file
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">
                    Of you go!.
                </h3>
                <p class="card-text">
                    That's all you need to know, have fun, happy codding!. Cheers 🍺🍺.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="scss">
    .card {
        margin: 15px 0;

        &.heading {
            border-top: 5px solid #7fcd91;
        }
    }
</style>

