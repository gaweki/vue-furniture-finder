
<template>
  <div class="finder-container">
    <div class="header-container">
      <div class="w-50 mb-10 text-left">
        <input type="text" class="mb-10 search-input" v-model="inputValue" placeholder="Search Furniture" @keyup="filterChange">
      </div>
      <div class="d-flex">
        <div class="w-50 mr-37">
          <multiselect :multiple="true" @input="filterChange" placeholder="Furniture Style" v-model="valueStyleSelect" :options="optionsStyleSelect"></multiselect>
        </div>
        <div class="w-50">
          <multiselect :multiple="true" @input="filterChange" placeholder="Delivery Time" v-model="valueDeliveryTimeSelect" :options="optionsDeliveryTimeSelect"></multiselect>
        </div>
      </div>
    </div>
    <div class="body-container">
      <Card :datas="searchCollection" /> 
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import axios from 'axios';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Card from '../components/Card.vue'

export default {
  components: {
    Multiselect,
    Card
  },
  name: 'Finder',
  props: {
    msg: String
  },
  data (){
    return {
      inputValue: '',
      valueStyleSelect: [],
      valueDeliveryTimeSelect: [],
      optionsStyleSelect: ["ddd"],
      optionsDeliveryTimeSelect: ["1 Week", "2 Weeks", "1 Month", "More 1 Month"],
      convertedOptionsDeliveryTimeSelect: [],
      products: [],
      searchCollection: [],
      haveRunFilter: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const response = await axios("http://www.mocky.io/v2/5c9105cb330000112b649af8")
      this.optionsStyleSelect = response.data.furniture_styles
      this.products = response.data.products 
      this.searchCollection = response.data.products 
      //hardcode test more than one month
      this.products.push({
            "name": "Sofa More Than 1 Month",
            "description": "Selama Anda dapat berkumpul bersama keluarga dan orang-orang terdekat, duduk di manapun mungkin rasanya tidak menjadi masalah untuk Anda. Akan tetapi, dengan berkumpul bersama menggunakan Jobi L Sofa, suasana quality time Anda akan terasa 180 derajat perubahannya.",
            "furniture_style": ["Classic", "Midcentury"],
            "delivery_time": "40",
            "price": 5000000
        })
    },
    filterChange () {
      this.runFiltering() 
    },
    onChangeStyleSelect (value) {
      this.valueStyleSelect = value
      this.runFiltering() 
    },
    onChangeDeliveryTimeSelect (value) {
      this.valueDeliveryTimeSelect = value
      this.runFiltering() 
    },
    filterDeliveryTimeSelect () {
      console.log("RUN FILTER DELIVERY TIME")
      let self = this
      this.convertedOptionsDeliveryTimeSelect = []
      let arr = []
      this.valueDeliveryTimeSelect.forEach( val => {
        self.convertedOptionsDeliveryTimeSelect.push(self.convertToDays(val))
      })
      var biggestTime = Math.max.apply(Math, this.convertedOptionsDeliveryTimeSelect);
      if(biggestTime <= 30){
        let datas = this.searchCollection.length ? this.searchCollection : this.products
        datas.forEach( valDatas => {
          parseInt(valDatas.delivery_time) <= biggestTime ? arr.push(valDatas) : ''
        })
      } else {
        arr = this.searchCollection
      }
      this.searchCollection = arr
    },
    filterSearch () {
      console.log("RUN FILTER SEARCH")
      const { inputValue, products } = this
      let datas = this.searchCollection.length && inputValue !== '' ? this.searchCollection : products
      this.searchCollection = datas.filter( (val) => {
        return val.name.toLowerCase().includes(inputValue.toLowerCase())
      }) 
    },
    filterStyle(){
      console.log("RUN FILTER STYLE")
      const { products } = this
      let arr = []
      let datas = this.searchCollection.length ? this.searchCollection : products
      if(this.haveRunFilter && this.searchCollection.length){
        this.valueStyleSelect.forEach( valStyleSelect => {
          this.searchCollection = datas.filter( (valSearchCollection) => {
            valSearchCollection.furniture_style.forEach( val => {
              valStyleSelect === val ? arr.push(valSearchCollection) : ''
            })
          })
        })
      }
      this.searchCollection = arr
    },
    runFiltering () {

      this.haveRunFilter = true 

      if(this.inputValue && this.valueDeliveryTimeSelect.length && this.valueStyleSelect.length){
        this.filterSearch()
        this.filterDeliveryTimeSelect()
        this.filterStyle()
      }

      if(this.inputValue && this.valueDeliveryTimeSelect.length && !this.valueStyleSelect.length){
        this.filterSearch()
        this.filterDeliveryTimeSelect()
      }

      if(this.valueStyleSelect.length && this.valueDeliveryTimeSelect.length && !this.inputValue){
        this.filterDeliveryTimeSelect()
        this.filterStyle()
      }

      if(this.valueStyleSelect.length && this.inputValue && !this.valueDeliveryTimeSelect.length){
        this.filterSearch()
        this.filterStyle()
      }

      if(this.inputValue && !this.valueDeliveryTimeSelect.length && !this.valueStyleSelect.length){
        this.filterSearch()
      }

      if(!this.inputValue && !this.valueDeliveryTimeSelect.length && this.valueStyleSelect.length){
        this.filterStyle()
      }

      if(!this.inputValue && this.valueDeliveryTimeSelect.length && !this.valueStyleSelect.length){
        this.filterDeliveryTimeSelect()
      }

      if(!this.inputValue && !this.valueDeliveryTimeSelect.length && !this.valueStyleSelect.length){
        this.searchCollection = this. products
      }

    },
    convertToDays(val){
      if(val.toLowerCase().includes('week')){
        return 7*parseInt(val.split(' ')[0])
      } else if(val.toLowerCase().includes('more')){
        return 40
      } else if(val.toLowerCase().includes('month')){
        return 30*parseInt(val.split(' ')[0])
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/basics/_layout.scss";
@import "../styles/views/_finder.scss";
.header-container{
  background-color: #0064cf;
  padding: 30px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
