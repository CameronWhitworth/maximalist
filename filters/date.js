import Vue from 'vue'

export default () => {
    Vue.filter('date', function (value) {
        const date = new Date(value)
        return date.toLocaleString(['en-GB'], { month: 'long', day: 'numeric', year: 'numeric'})
    })

}