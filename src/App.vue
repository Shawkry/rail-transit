<template>
	<div id="app">
		<vue-particles color="#55ffff" :particleOpacity="0.7" :particlesNumber="50" shapeType="circle" :particleSize="7"
		 linesColor="#409EFF" :linesWidth="1" :lineLinked="false" :lineOpacity="0.7" :linesDistance="150" :moveSpeed="2"
		 :hoverEffect="false" hoverMode="grab" :clickEffect="false" clickMode="push">
		</vue-particles>
		<router-view v-if="isRouterAlive"></router-view>
	</div>
</template>
<script>
    export default {
        name: 'App',
        provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
            return {
                reload: this.reload                                              
            }
        },
        data() {
            return{
                isRouterAlive: true                    //控制视图是否显示的变量
            }
        },
        methods: {
            reload () {
                this.isRouterAlive = false;            //先关闭，
                this.$nextTick(function () {
                    this.isRouterAlive = true;         //再打开
                }) 
            }
        }
    }
</script>

<style>
	#particles-js {
	  width: 100%;
	  height: calc(100% - 100px);
	  position: absolute;
	}
</style>
