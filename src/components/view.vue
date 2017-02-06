<template>
  <div>
    <div class="view-wrap">
      <h1>{{view_title}}</h1>
      <table id="app">
        <tbody v-for="item in items">
          <tr>
            <th>서브타이틀</th>
            <td>{{item.sub_title}}</td>
          </tr>
          <tr>
            <th>원가</th>
            <td>{{item.cost}} 원</td>
          </tr>
          <tr>
            <th>할인가격</th>
            <td>{{item.price}} 원</td>
          </tr>
          <tr>
            <th>구매갯수</th>
            <td>{{item.quantity}} 개 구매</td>
          </tr>
        </tbody>
      </table>
      <button class="button" v-on:click="editData(items[0].id)">수정</button>
    </div>
  <div>
</template>

<style scoped>
.view-wrap {padding:10px;overflow:hidden;}
.view-wrap table {border-collapse:collapse;border:1px solid #eee;width:100%}
.view-wrap table th, .view-wrap table td {padding:5px 0px 5px 20px;border-right:1px solid #eee;border-bottom:1px solid #eee;}
.view-wrap table th {width:30%;background-color:#f9f9f9;}
.view-wrap table td {width:70%}
.button {float:right;margin-top:15px;width:120px;height:40px;text-align:center;font-size:12px;border:1px solid #eee;background-color:#f9f9f9;}
</style>
<script>
export default {
  name: 'app',
  data () {
    return {
      view_title: '',
      items: []
    }
  },
  beforeMount() {
    var HostUrl = '/api/edit/'+ this.$route.params.id;
    this.$http.get(HostUrl)
      .then(function(response) {
        this.items = response.data;
        this.view_title = this.items[0].title;
        console.log(this.items);
      }, function(error) {
        console.log('error in .js:');
        console.log(error);
      }
    );
  },
  methods: {
    editData: function (id) {
      location.href = '/#/edit/' + id;
    }
  }
}
</script>
