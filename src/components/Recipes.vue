<template>
<div>
    <h1>Recipes Index</h1>
    <img src={shoes.images[0]} />

</div>
</template>

<script>
import {SHOES_URL} from '../constants.js'
import axios from 'axios'

export default {
    mounted () {
        axios
        .get(`${SHOES_URL}`)
        //send all recipes
        // .then(console.log('this is working'))
        // .then(res => this.setState({recipes: res.data.recipes}))
        .then(res => res.data)
        .catch(err => console.log('not working'))
    }
}
</script>

<style>
h1 {
    text-align: center;
}
</style>

