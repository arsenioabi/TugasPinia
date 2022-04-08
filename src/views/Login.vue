<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');

const auth = useAuthStore();

const router = useRouter();

const onSubmit = () => {
  error.value = '';
  const res = auth.login(email.value, password.value);
  if (res) {
    router.push('/profile');
  } else {
    error.value = 'Invalid credentials';
  }
};
</script>

<template>
  <center><h1>Login</h1></center>
  <div class="container mt-4">
    <form @submit.prevent="onSubmit" autocomplete="off">
      <div class="alert alert-danger" v-if="error">
        {{ error }}
      </div>
      <div class="mb-3">
        <label for="email" class="mb-1"> Email: </label>
        <input
          id="email"
          v-model="email"
          class="form-control"
          type="email"
          placeholder="masukkan email anda"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="mb-1"> Password: </label>
        <input
          id="password"
          v-model="password"
          class="form-control"
          type="password"
          placeholder="masukkan password anda"
        />
      </div>
      <button class="btn btn-success">Login</button>
    </form>
  </div>
</template>

<style scoped></style>
