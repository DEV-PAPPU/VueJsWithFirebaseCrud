<template>
    <div>
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Edit Student Details</h1>

        </div>
        <form @submit.prevent="onUpdateForm">
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" v-model="student.firstName" required>
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" v-model="student.lastName" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="student.email" required>
            </div>
            <div class="mb-3">
                <label for="mobileNumber" class="form-label">Phone</label>
                <input type="text" class="form-control" v-model="student.mobileNumber" required>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary btn-block">Update Student</button>
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
                student: {
                }
            }
        },
        created() {
            let dbRef = db.child(this.$route.params.id);
            dbRef.get().then((doc) => {
               
                this.student = doc.val();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.child(this.$route.params.id)
                .update(this.student).then(() => {
                    
                     this.$router.push('/students')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>