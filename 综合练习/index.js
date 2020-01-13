var  app = new Vue({
	el:'#app',
	data:{
		page:1
	},
	methods:{		
		getPage:function(page){
			this.page = page
		}
	}
})