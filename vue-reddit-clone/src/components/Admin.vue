<template>
    <div>
        <div v-if="isAdmin">
            <div>
                <h3>Hi admin</h3>
            </div>
        </div>
        <div v-else>
            <div>
                <h3>Are you Admin ?</h3>
                <form>
                    <span>
                        <input type="text" id="adminSpell" className="form-control" v-model="adminSpell" required />
                        <button className="btn btn-success" @click="goAdmin">Post</button>
                    </span>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Admin',
    data() {
        return {
            adminSpell: ''
        }
    },
    methods: {
        ...mapActions(['beAdmin', 'getUserRoles']),
        goAdmin(e) {
            e.preventDefault();
            let adminRequest = {
                username: localStorage.getItem("username"),
                refreshToken: localStorage.getItem("refreshToken"),
                adminSpell: this.adminSpell
            }
            this.beAdmin(adminRequest);
        }
    },
    computed: mapGetters(['isAdmin']),
    created() {
        this.getUserRoles();
    }
}
</script>

<style scoped>

</style>