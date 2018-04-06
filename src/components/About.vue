<template>
<div>
    <Header></Header>
  <h2>What is Keto?</h2>
<p>A keto or ketogenic diet is a very low-carb diet, which turns the body into a fat-burning machine. It has many proven benefits for weight loss, health and performance, as millions of people have experienced already.</p>
<h2 class='center-align'>Benefits of Keto</h2>
<ul class='center-align'>
    <li>Reduced Hunger</li>
    <li>Weight Loss</li>
    <li>Improved Body Composistion</li>
    <li>Increased Energy Levels</li>
    <li>Blood Pressure Reduction</li>
    <li>Improved Insulin Levels</li>
    <li>Healthy blood cholesterol and triglyceride levels</li>
    <li>Naturally Gluten Free</li>
    <li>Proven to treat many deceases such as Epilepsy, PCOS, Neurodegenerative, and Cancer</li>
</ul>
  <p>{{ message }}</p>
</div>
</template>

<script>
export default {
    data () {
        return {
            message: 'testing render statements'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  text-align: center;
}
ul {
  list-style-type: none;
  text-align: center;
}
li {
/* display: inline-block;
  margin: 0 10px; */
  text-align: center;
}
a {
  color: #42b983;
}
</style>
