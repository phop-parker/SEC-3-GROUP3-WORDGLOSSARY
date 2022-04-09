<script setup>
defineProps({
    membersList: {
        type: Array,
        require: true
    },
})

</script>
 
<template>
    <div>
        <h2>GROUP 3 FROM SEC 3</h2>
        <div class="cards">
        <div class="card" v-for="(member, index) in membersList" :key="index">
            <img :src="member.img" :alt="member.studentId" style="width:100%" />
            <div class="container">
                <h4>
                    <b>{{ member.name }} {{ member.surname }}</b>
                </h4>
                <p>{{ member.studentId }}</p>
            </div>
        </div>
    </div>
    </div>
</template>
 
<style scoped>
.cards{
        display: flex;
      justify-content: center;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 20%;
    margin: 4px;


}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}
</style>