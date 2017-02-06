<template>
  <div class="add-data">
    <form id="contact" action="/add" method="post">
      <h2>{{msg.add}}</h2>
      <fieldset>
        <input placeholder="메인 타이틀" type="text" name="title" tabindex="1" >
      </fieldset>
      <fieldset>
        <input placeholder="서브 타이틀" type="text" name="sub_title" tabindex="2">
      </fieldset>
      <fieldset>
        <input placeholder="원래 가격" type="text" name="cost" tabindex="3">
      </fieldset>
      <fieldset>
        <input placeholder="판매 가격" type="text" name="price" tabindex="4">
      </fieldset>
      <fieldset>
        <input placeholder="판매된 수량" type="text" name="quantity" tabindex="5">
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="" data-submit="submit">Submit</button>
      </fieldset>
    </form>
  </div>
</template>


<script>
export default {
  name: 'add',
  data () {
    return {
      msg: {
        edit: 'Edit Data',
      }
    }
  },
  beforeMount() {
    console.log('dad');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-data {
	max-width:400px;
	width:100%;
	margin:0 auto;
	position:relative;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

#contact {
	background:#F9F9F9;
	padding:25px;
	margin:50px 0;
}

#contact h3 {
	color: #F96;
	display: block;
	font-size: 30px;
	font-weight: 400;
}

#contact h4 {
	margin:5px 0 15px;
	display:block;
	font-size:13px;
}

fieldset {
	border: medium none !important;
	margin: 0 0 10px;
	min-width: 100%;
	padding: 0;
	width: 100%;
}

#contact input[type="text"]{
	width:100%;
	border:1px solid #CCC;
	background:#FFF;
	margin:0 0 5px;
	padding:10px;
}

#contact input[type="text"]:hover {
	-webkit-transition:border-color 0.3s ease-in-out;
	-moz-transition:border-color 0.3s ease-in-out;
	transition:border-color 0.3s ease-in-out;
	border:1px solid #AAA;
}

#contact button[type="submit"] {
	cursor:pointer;
	width:100%;
	border:none;
	background:#0CF;
	color:#FFF;
	margin:0 0 5px;
	padding:10px;
	font-size:15px;
}

#contact button[type="submit"]:hover {
	background:#09C;
	-webkit-transition:background 0.3s ease-in-out;
	-moz-transition:background 0.3s ease-in-out;
	transition:background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

#contact input:focus, #contact textarea:focus {
	outline:0;
	border:1px solid #999;
}
::-webkit-input-placeholder {
 color:#888;
}
:-moz-placeholder {
 color:#888;
}
::-moz-placeholder {
 color:#888;
}
:-ms-input-placeholder {
 color:#888;
}
</style>
