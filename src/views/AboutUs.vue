<script setup>
import MemberList from "../components/MemberList.vue"
const members = [
{ name: "Sarida", surname: "Buakaew", studentId: "63130500112", img: "../src/assets/63130500112.png" },
{ name: "Sarisa", surname: "Phulakorn", studentId: "63130500116", img: "../src/assets/63130500116.png" },
{ name: "Siraphop", surname: "Pattaragatewit", studentId: "63130500119", img: "../src/assets/63130500119.png" },
{ name: "Supichaya", surname: "Muennunch", studentId: "63130500123", img: "../src/assets/63130500123.png" },
{ name: "Thanat", surname: "Leeruengkij", studentId: "63130500156", img: "../src/assets/63130500156.png" }]

</script>
 
<template>
<MemberList :membersList="members"/>
</template>
 
<style>
</style>