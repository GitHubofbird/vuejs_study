Vue.component('page-button', {
	props: {
		nextMsg: {
			type: String,
			default: '下一步'
		},
		backMsg:{
			type:String,
			default:'上一步'
		},
		resetMsg:{
			type:String,
			default:'重置'
		},
		page:{
			default:1,
			type:Number,
		}
	},
	template: `
	<div>
		<button @click="next">{{nextMsg}}</button>
		<button @click="back">{{backMsg}}</button>
		<button @click="back">{{resetMsg}}</button>
	</div>
	`,
	methods: {
		next:function(){
			this.page++
			this.$emit('next',this.page)
		},
		back:function(){
			this.page--
			this.$emit('back',this.page)
		}
	}
})
