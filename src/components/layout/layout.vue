
<template>
    <div class="jr-container default-theme">
       <Header></Header>
    </div>
</template>

<script lang="ts">
    import { Component, Vue} from 'vue-property-decorator';
    import Header from '../header/header.vue';
    @Component({
        components:  {
            Header
        }
    })
    export default class Layout extends Vue {
        name = 'Layout';
    }

</script>