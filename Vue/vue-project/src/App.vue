<!-- 

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->



<!-- <template>
  <div class="flex flex-col bg-gradient-to-r from-red-100 to-blue-300 h-screen m-0 p-0">
    <h1 class="flex flex-col font-bold ">Lab 1 ISCS - View</h1>
   <form class="flex flex-col"> 
    <form class="content-center">
      <div>
        <label>Email:</label>
        <input type="email" v-model.trim="email" required>
        <span v-if="!validEmail">Please enter a valid email address</span>
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" v-model.trim="firstName" required>
        <span v-if="!validName">Please enter a valid first name</span>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model.trim="lastName" required>
        <span v-if="!validName">Please enter a valid last name</span>
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" v-model.trim="phoneNumber" required>
        <span v-if="!validPhone">Please enter a valid phone number</span>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" :disabled="!validForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  },
  computed: {
    validEmail() {
      // Use a regular expression to check for a valid email address
      const emailRegex = /^\S+@\S+\.\S+$/
      return emailRegex.test(this.email)
    },
    validName() {
      // Use a regular expression to check for a valid name (only letters and spaces)
      const nameRegex = /^[a-zA-Z\s]+$/
      return nameRegex.test(this.firstName) && nameRegex.test(this.lastName)
    },
    validPhone() {
      // Use a regular expression to check for a valid phone number (10 digits)
      const phoneRegex = /^(09\d{2}-\d{3}-\d{4})$/
      return phoneRegex.test(this.phoneNumber)
    },
    validForm() {
      return this.validEmail && this.validName && this.validPhone
    }
  }
}
</script> -->

<!-- <script>
import { required, email, numeric } from 'vuelidate/lib/validators'

  export default {
    name: 'MyForm',
    data() {
      return {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
      }
    },
  validations: {
    email: { required, email },
    firstName: { required },
    lastName: { required },
    phoneNumber: { required, numeric }
  }
}
</script> -->






<template>
  <div class="flex justify-center items-center h-screen">
    <div class="rounded-lg bg-gray-100 p-8">
      <form class="w-full max-w-sm">

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="JuanDeLaCruz@gmail.com" v-model="email">
          <span class="text-red-500 text-xs italic" v-if="!validEmail">Please enter a valid email address.</span>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-first-name">
            First Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-first-name" type="text" placeholder="Juan" v-model="firstName">
          <p class="text-red-500 text-xs italic" v-if="!validFirstName">Please enter a valid first name.</p>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name">
            Last Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-last-name" type="text" placeholder="Dela Cruz" v-model="lastName">
          <p class="text-red-500 text-xs italic" v-if="!validLastName">Please enter a valid last name.</p>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone-number">
            Phone Number
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-phone-number" type="text" placeholder="09XX-XXX-XXXX" v-model="phoneNumber">
          <p class="text-red-500 text-xs italic" v-if="!validPhone">Please enter a valid phone number.</p>
        </div>
      </div>

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!validForm" @click="say('Form Successfully Submitted!')">
            Submit
          </button>
        </div>
      </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  },
  computed: {
    validEmail() {
      const emailRegex = /^\S+@\S+\.\S+$/
      return emailRegex.test(this.email)
    },
    validFirstName() {
      const firstNameRegex = /^[a-zA-Z\s]+$/
      return firstNameRegex.test(this.firstName)
    },
    validLastName() {
      const lastNameRegex = /^[a-zA-Z\s]+$/
      return lastNameRegex.test(this.lastName)
    },
    validPhone() {
      const phoneRegex = /^(09\d{2}-\d{3}-\d{4})$/
      return phoneRegex.test(this.phoneNumber)
    },
    validForm() {
      return this.validEmail && this.validFirstName && this.validLastName && this.validPhone
    }
  },
  methods: {
    say(message){
      alert(message)
    }
  },
}
</script>

<style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

