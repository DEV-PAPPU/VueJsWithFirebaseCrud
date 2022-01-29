<template>
 <div>
      <div class="container">
      <h3 class="my-4 panel-title">Vue Js With Google Firebase-Hosting CRUD</h3>
    <div class="row py-5">
      <div class="col-md-7">
        <table class="table">
          <thead>
            <tr>
              <!-- <th scope="col">#Id</th> -->
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.name">
              <!-- <td>{{user.id}}</td> -->
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.phone}}</td>
              <td>
                <button class="btn btn-danger mx-3" @click='deleteUser(user)'>Delete</button>
                <button class="btn btn-primary" @click='editUser(user)'>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-5">
        <div class="panel panel-default form_body bg-white">
          <div class="panel-heading">
            <h3 class="panel-title"></h3>
          </div>
          <div class="panel-body">
            <form>
              <fieldset>
                <div class="form-group">
                  <input class="form-control" type="text" v-model="form.name" required placeholder="name">
                </div>
                <div class="my-4 form-group">
                  <input class="form-control" type="email" v-model="form.email" required placeholder="email">
                </div>

                <div class="mb-4 form-group">
                  <input class="form-control" type="phone" v-model="form.phone" required placeholder="phone">
                </div>
                <button v-if="isEdit" @click.prevent="updateUser" class="btn btn-lg btn-success btn-block">Update
                </button>

                <button v-else @click.prevent="userLogin" class="btn btn-lg btn-success btn-block">Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import firebase from '../config/firebase';
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
</style>