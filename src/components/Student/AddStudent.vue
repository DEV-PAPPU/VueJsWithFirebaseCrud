<template>
<div>
    <div class="pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Add Student</h1>
        <p class="custom-text"><strong>therichpost.com</strong></p>
    </div>
    <form @submit.prevent="onFormSubmit">
        <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="user.firstName" required>
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="user.lastName" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="user.email" required>
        </div>
        <div class="mb-3">
            <label for="mobileNumber" class="form-label">Phone</label>
            <input type="text" class="form-control" v-model="user.mobileNumber" required>
        </div>
        <div class="mb-3">
            <button class="btn btn-primary btn-block">Add Student</button>
        </div>
    </form>
</div>
       
</template>
<script>
  import firebase from '../../config/db';
  const db = firebase.ref("students-list");
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.push(this.user).then(() => {
                    alert("Student successfully created!");
                    this.$router.push('/students')
                    this.user.firstName = ''
                    this.user.lastName = ''
                    this.user.email = ''
                    this.user.mobileNumber = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>