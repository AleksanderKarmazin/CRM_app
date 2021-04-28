<template>
    <div class="grey darken-1 empty-layout">
        <router-view></router-view>
		
    </div>
</template>

// <script>
import messages from '../utils/messages'


export default  {
    computed:{
        error () {
            return this.$store.getters.error

        }
    },
    watch: {
        error(error) {
            switch (error) {
                case 'Invalid email or password':
                    this.$error(messages.unvalidCredentials || 'Что - то пошло не так ')
                    break;
                case 'User already exists':
                    this.$error(messages.userAlreadyExist || 'Что - то пошло не так ')
                    break;
                default:
                    this.$error(this.$store.getters.user.name)
                    break;
            }
        }
    }
}

</script>