<template>
  <div id="app" class="wmp_recommend">
    <div>
      <label>이름 검색 : </label>
      <input v-model="query"></dd>
    </div>
    <div class="section_recomlist">
      <ul class="list_combine">
        <li v-for="(item, index) in computedList" v-bind:key="item.title">
          <div class="link">
            <a v-bind:href="'/#/view/'+ item.id">
              <span class="box_thumb">
              	<img class="lazy" src="http://img.wemep.co.kr/deal/3/382/1663823/2a0f93ba557bb118b49f90ef4e7908dc6f53ac28.jpg">
              </span>
              <span class="box_desc">
                <span class="standardinfo">{{item.sub_title}}</span>
              	<strong class="tit_desc">{{item.title}}</strong>
  		          <span class="txt_info ">
              		<span class="discount">{{dealPercent[index]}}<span class="percent">%</span></span>
              		<span class="price">
                    <span class="prime">{{ item.cost}}<span class="won">원</span></span>
              		  <span class="sale">{{ item.price}}<span class="won">원</span></span>
              	  </span>
                </span>
                <span class="txt_num"><strong class="point">{{ item.quantity}}</strong>개 구매</span>
              </span>
            </a>
          </div>
        <li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      query: '',
      items: []
    }
  },
  computed: {
    computedList: function () {
      var vm = this;
      return this.items.filter(function (item) {
        return item.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      })
    },
    dealPercent: function () {
      return this.items.map(function(item) {
        var rate = 100- (item.price*100/ item.cost);
        var result = rate.toFixed();
        if (result === 'Infinity' || result === '-Infinity') {
          return 0;
        } else {
          return result;
        }
      });
    }
  },
  beforeMount() {
    var HostUrl = '/json/data.json';
    this.$http.get(HostUrl )
      .then(function(response) {
        this.items = response.data;
      }, function(error) {
        console.log('error in .js:');
        console.log(error);
      }
    );
  }
}
</script>

<style scoped>
.wmp_recommend {overflow:hidden;}
.section_recomlist {overflow:hidden;}
.list_combine {overflow:hidden;margin:0;padding-bottom:20px;}
.list_combine li {
  float: left;
  position: relative;
  width: 451px;
  height: 381px;
  margin: 11px 0 0 11px;
  z-index: 0;
  list-style: none;
}
.list_combine li .link {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  height: 380px;
}
.list_combine li .box_thumb,
.list_combine li .box_thumb img {width:449px;height:248px;}
.list_combine li .box_desc {position:absolute;top:258px;left:21px;display:block;height:90px;width:409px;padding:0 !important;text-align:left;}
.list_combine li .box_desc .standardinfo {display:block;overflow:hidden;height:13px;width:100%;font-size:11px;line-height:13px;color:#999;white-space:nowrap;letter-spacing:-1px;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;text-align:left}


* + html .list_combine li  .box_desc {display:block;height:113px;padding:10px 19px 6px;}
.list_combine li .box_desc .tit_desc {
  height: 24px;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  line-height: 24px;
  display: block;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list_combine li .box_desc .discount {
  overflow: hidden;
  float: left;
  margin-right:15px;
  font-size: 40px;
  color: #ce1710;
  font-family: Tahoma;
  margin-top:-2px;padding-top:3px;
  height:45px;
  line-height:45px;
}
.list_combine li .box_desc .price {float: left;padding-top:6px;}
.list_combine li .box_desc .discount .percent {font-size:18px;padding-left:2px;}
.list_combine li .box_desc .prime {display:block;overflow:hidden;height:16px;font-size:14px;line-height:16px;font-family:Tahoma;color:#999;text-decoration:line-through;}
.list_combine li .box_desc .prime .won {font-size:12px;font-family:'돋움',dotum,sans-serif;}
.list_combine li .box_desc .sale {display:block;overflow:hidden;height:21px;font-weight:bold;font-size:18px;line-height:21px;font-family:Tahoma;color:#333;}
.list_combine li .box_desc .sale .won {font-size:16px;font-family:'돋움',dotum,sans-serif;}
.list_combine li .txt_num {
  top:59px;
  right:0;
  position: absolute;
  font-size: 12px;
  line-height: 20px;
  color: #333;
}




</style>
