<template>
    <div class="jr-header">
        <div class="clearfix">
            <ul class="nav-inline pull-right">
                <li><a href="javascript:;" @click="toggle('default')">default</a></li>
                <li><a href="javascript:;" @click="toggle('red')">red</a></li>
                <li><a href="javascript:;" @click="toggle('green')">green</a></li>
            </ul>
            <h4>theme</h4>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue} from 'vue-property-decorator';
    @Component
    export default class Header extends Vue {
        name =  'Header';

        toggle(theme: string): void {
            const styles = ['red', 'default', 'green'];
            styles.forEach((item: string) => {
                Array.from(document.querySelectorAll('.' + item + '-theme')).forEach((el) => {
                    el.classList.replace(item + '-theme', theme + '-theme');
                });
            });
        }
    }

</script>
<style lang="scss">
    @import "./header-base.scss";
</style>