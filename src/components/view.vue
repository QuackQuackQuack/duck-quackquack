<template>
  <table id="app">
      <th>타이틀</th>
      <th>서브 타이틀</th>
      <th>원가</th>
      <th>할인가격</th>
      <th>구매갯수</th>
    <tbody v-for="item in items">
      <td>{{item.title}}</td>
      <td>{{item.sub_title}}</td>
      <td>{{item.cost}} 원</td>
      <td>{{item.price}} 원</td>
      <td>{{item.quantity}} 개 구매</td>
    </tbody>
  </table>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      items: []
    }
  },
  beforeMount() {
    var HostUrl = '/api/edit/'+ this.$route.params.id;
    this.$http.get(HostUrl)
      .then(function(response) {
        this.items = response.data;
        console.log(this.items);
      }, function(error) {
        console.log('error in .js:');
        console.log(error);
      }
    );
  }
}
</script>
