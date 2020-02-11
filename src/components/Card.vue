<template>
  <div class="overflow-hidden">
    <div class="float-left card-container" v-for="data in datas" v-bind:key="data.name">
      <div class="d-flex mb-10">
        <div class="w-50 text-left font-weight-bold">{{data.name}}</div>
        <div class="w-50 text-right price font-weight-bold">IDR {{addDot(data.price)}},-</div>
      </div>
      <div class="text-left mb-10">{{shortDescription(data.description)}}</div>
      <div class="text-left mb-10 text-blue">{{convertCategory(data.furniture_style)}}</div>
      <div class="text-right text-blue text-underline font-weight-bold">Delivery days: {{data.delivery_time}} Day(s)</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: {
    datas: Array
  },
  methods: {
    convertCategory (text) {
      return text.join(", ")
    },
    addDot(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    shortDescription (desc) {
      return desc.length > 114 ? `${desc.substring(0, 114)}...` : desc;
    }
  }
}
</script>

<style>
  @import "../styles/basics/_layout.scss";
  @import "../styles/components/_card.scss";
</style>