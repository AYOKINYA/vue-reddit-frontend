<template>
    <div>
        <div class="d-flex flex-column votebox">
            <div v-if="isLoggedIn">
                <div class="p-2">
                    <i class="fas fa-arrow-up upvote" @click="vote('UPVOTE')"
                    :style="[post.upVote ? {color: 'green'} : {}]">Upvote</i>
                </div>
            </div>
            <div class="p-2 votecount">{{post.voteCount}}</div>
            <div v-if="isLoggedIn">
                <div class="p-2">
                    <i class="fas fa-arrow-down downvote" @click="vote('DOWNVOTE')"
                    :style="[post.downVote ? {color: 'red'} : {}]">Downvote</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VoteService from '../services/VoteService';

export default {
    name: 'VoteButton',
    methods: {
        vote(voteType) {
            if (voteType !== "UPVOTE" && voteType !== "DOWNVOTE")
            {
                alert("What kind of vote is this?");
                return ;
            }

            let vote = {
                postId: this.post.id,
                voteType: voteType
            }

            console.log("inputs : " + JSON.stringify(vote));
            
            VoteService.makeVote(vote).then(res => {
                console.log(res.data);
                this.$emit('updatePost', this.vote);
            })
        }
    },
    computed: mapGetters(['isLoggedIn']),
    props: ['post'],
    
}
</script>

<style scoped>
.votebox {    
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 1em;    
}

.votesection{
    margin:0px;
    background-color: #ffffff;
}
.upvote,.downvote {
    cursor: pointer;
    border-radius: 2px solid;        
}
.upvote:hover {
    color: green;
}
.downvote:hover {
    color: red;
}

.votecount{
    font-weight: bold;    
}

</style>