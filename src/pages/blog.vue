<template>
    <div id="blogIndex">
        <div class="blogWrap">
            <blogs />
        </div>
    </div>
</template>

<script>
import blogs from '@/components/blogs'

export default {
    name: 'blogIndex',
    components: {
        blogs
    },
    data(){
        return{
            
        }
    },
}
</script>


<style lang="scss" scoped>

@import "@/styles/_variables.scss";
@import "@/styles/_common.scss";

.blogWrap{
    padding: 25px 0;
}

</style>