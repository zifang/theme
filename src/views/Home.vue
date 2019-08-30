<template>
  <div class="home">
    欢迎来到theme乐园，共创我们的theme主题曲
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
<style lang="scss">
	.home {
		margin: 200px 0;
		font-size: 30px;
		font-weight: bold;
	}
</style>
