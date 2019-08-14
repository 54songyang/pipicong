<template>
  <div id="vue-keyboard">
		<v-input
	    ref="virtualInput"
	    v-model="amount"
	    :placeholder="placeText"
	    :is-auto-focus="true"
	    @show-key-board="showKeyBoard">
	  </v-input>
		<v-keyboard ref="virtualKeyBoard"></v-keyboard>
		<div class="text">您输入的金额是:&#165;<span v-text="amount"></span></div>
	</div>
</template>
<script>
import vInput from './virtual-input';
import vKeyboard from './virtual-keyboard';
export default {
  name:'keyboard',
  components: {
			vInput,
			vKeyboard,
	},
	data(){
		return {
			placeText: '请输入金额',
			amount: ''
		}
	},
	methods:{
		showKeyBoard() {
			//键盘弹出的同时，传入输入框对象
      this.$refs.virtualKeyBoard.$emit('getInputVm', this.$refs.virtualInput);
		}
	},
	mounted() {
		if ('addEventListener' in document) {
		    document.addEventListener('DOMContentLoaded', function(){
		        FastClick.attach(document.body);
		    }, false);
		}
		//保证子组件实例化完成之后将virtualInput的实例传给virtualKeyBoard
		this.$refs.virtualKeyBoard.$emit('getInputVm', this.$refs.virtualInput);
	}
}
</script>
<style lang="less">

</style>
