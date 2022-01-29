<template>
  <div class="row">
    <div class="col-md-2 navbar-light bg-light sidebar">
      <div class="px-2">
          <h2 class="my-3">Menu Items</h2>
           <router-link :to="{name: 'StudentList'}" class="btn my-4 btn-primary">Student List</router-link>
           <router-link :to="{name: 'FirebaseStore'}" class="btn btn-primary">Firebase Store</router-link>
      </div>
    </div>
    <div class="col-md-9 mx-4 px-4">
      <div v-if="currentRouteName == 'Home'">
      </div>
      <div v-else>
        <router-view />
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import firebase from '../src/config/firebase';
export default {
  data() {
    return {
        form:{
            name: '',
            email: '',
            phone: '',
            },
            users: [],
            useredit: '',
            isEdit: false,
    }
  },
  methods: {
      userLogin(){
           
           firebase.firestore.collection('user').add(this.form).then(res =>{
             console.log(res);
             this.loadUser();
           })
           .catch(e =>{
             console.log(e)
           })
      },

      loadUser(){
        firebase.firestore.collection('user').get().then(res =>{
             res.forEach(item =>{
               this.users.push({...item.data(),...{id: item.id}});
              //  console.log({...item.data(),...{id: item.id}})
             })
           })
      },

            deleteUser(user){

          if( confirm('Are You Sure ?') ){
              firebase.firestore.collection('user').doc(user.id).delete().then(res =>{
                alert('User Delete Success',res);
                this.loadUser();
               })
          }

      },

      editUser(user){
          this.editUser = user;
          this.form = null;
          this.form = user;
          this.isEdit = true
      },

      updateUser(){
          firebase.firestore.collection("user").doc(this.editUser.id).update(this.form);
          this.loadUser();
          this.editUser = '';
          this.form = '';
          this.isEdit = false;
      },

  },

  mounted(){
    this.loadUser();
  }
}
</script>

<style scoped>
.form__div{
    display: flex;
    justify-content: center;
    margin: 50px 0px;
}

.form_body{
    padding: 30px 20px;
}

.sidebar{
  height: 100vh;
}
</style>