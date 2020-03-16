<template>
    <div id="home" class="container">
        <div class="card heading">
            <div class="card-body">
                <h2 class="card-title">
                    Welcome!.
                </h2>
                <p class="card-text">
                    You are now watching the <strong> Home.vue </strong>
                    component located in <strong> ./src/vue/components/Home.vue </strong>
                    as the name suggests, this is your home page.
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

        .card-text {
            font-size: 1.2em;
        }
    }
</style>

