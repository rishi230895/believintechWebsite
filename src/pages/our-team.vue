<template>
    <div id="team">
       <our-team />
        <team />
    </div>
</template>

<script>
import ourTeam from '@/components/our-team'
// import team from '@/components/team'

export default {
  name: 'home',
  components: {
    ourTeam,
    // team
  }
}
</script>
