<script>
	let email = '';
	let firstName = '';
	let lastName = '';
	let phoneNumber = '';
  
	function handleSubmit() {
	  if (!email || !firstName || !lastName || !phoneNumber) {
		alert('Please fill out all fields.');
	  } 
	  else if (!isValidEmail()) {
		alert('Please enter a valid email address.');
	  }
	  else if (!isValidFirstName()) {
		alert('Please enter a valid first name.');
	  } 
	  else if (!isValidLastName()) {
		alert('Please enter a valid last name.');
	  } 
	  else if (!isValidPhoneNumber()) {
		alert('Please enter a valid phone number.');
	  } 
	  else {
		alert('Form submitted successfully!');
		// Submit form data to server here
	  }
	}
  
	function isValidEmail() {
	  // Simple email validation using regex
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return emailRegex.test(email);
	}
  
	function isValidPhoneNumber() {
	  // Simple phone number validation using regex
	  //const phoneNumberRegex = /^\d{10}$/;
	  const phoneNumberRegex = /^(09\d{2}-\d{3}-\d{4})$/;
	  return phoneNumberRegex.test(phoneNumber);
	}

	function isValidFirstName() {	
		const firstNameRegex = /^[a-zA-Z\s]+$/
      	return firstNameRegex.test(firstName)
	}

	function isValidLastName(){
		const lastNameRegex = /^[a-zA-Z\s]+$/
      	return lastNameRegex.test(lastName)
	}

	// const validEmail = isValidEmail();
	$: isValidEmailListener = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	$: isValidFirstNameListener = /^[a-zA-Z\s]+$/.test(firstName)
	$: isValidLastNameListener = /^[a-zA-Z\s]+$/.test(lastName)
	$: isValidPhoneNumberListener = /^(09\d{2}-\d{3}-\d{4})$/.test(phoneNumber)

  </script>

  <!-- <script>
	let email = '';
	let firstName = '';
	let lastName = '';
	let phoneNumber = '';
	
	const emailRegex = /^\S+@\S+\.\S+$/;
	const firstNameRegex = /^[a-zA-Z\s]+$/;
	const lastNameRegex = /^[a-zA-Z\s]+$/;
	const phoneRegex = /^(09\d{2}-\d{3}-\d{4})$/;
	
	const validEmail = () => {
	  return emailRegex.test(email);
	};
	
	const validFirstName = () => {
	  return firstNameRegex.test(firstName);
	};
	
	const validLastName = () => {
	  return lastNameRegex.test(lastName);
	};
	
	const validPhone = () => {
	  return phoneRegex.test(phoneNumber);
	};
	
	const validForm = () => {
	  return validEmail() && validFirstName() && validLastName() && validPhone();
	};
	
	const say = (message) => {
	  alert(message);
	};
  </script> -->

<div class="flex justify-center items-center h-screen">
	<div class="rounded-lg bg-gray-100 p-8">

  	<form class="w-full max-w-sm" on:submit|preventDefault={handleSubmit}>
	<!-- <form class="w-full max-w-sm"> -->

	<div class="md:flex md:items-center mb-6">
		<div class="md:w-1/3">
			<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email">Email:</label>
		</div>
		<div class="md:w-2/3">
			<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="JuanDeLaCruz@gmail.com" type="email" id="email" bind:value={email} required>
			{#if !isValidEmailListener}
				<p class="text-red-500 text-xs italic">Please enter a valid email.</p>
			{/if}
		</div>
	</div>

	<div class="md:flex md:items-center mb-6">
		<div class="md:w-1/3">
			<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="firstName">First Name:</label>
		</div>
		<div class="md:w-2/3">	
			<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Juan" type="text" id="firstName" bind:value={firstName} required>
			{#if !isValidFirstNameListener}
				<p class="text-red-500 text-xs italic">Please enter a valid first name.</p>
			{/if}
		</div>
	</div>

	<div class="md:flex md:items-center mb-6">
		<div class="md:w-1/3">
			<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="lastName">Last Name:</label>
		</div>
		<div class="md:w-2/3">
			<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="De La Cruz" type="text" id="lastName" bind:value={lastName} required>
			{#if !isValidLastNameListener}
				<p class="text-red-500 text-xs italic">Please enter a valid last name.</p>
			{/if}
		</div>
	</div>

	<div class="md:flex md:items-center mb-6">
		<div class="md:w-1/3">
			<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="phoneNumber">Phone Number:</label>
		</div>
		<div class="md:w-2/3">
			<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="09XX-XXX-XXXX" type="tel" id="phoneNumber" bind:value={phoneNumber} required>
			{#if !isValidPhoneNumberListener}
				<p class="text-red-500 text-xs italic">Please enter a phone number.</p>
			{/if}
		</div>
	</div>

	<div class="md:flex md:items-center">
		<div class="md:w-1/3">
		</div>
		<div class="md:w-2/3">
			<button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
		</div>
	</div>

  	</form>

	</div>
</div>
  <!---
  <style>
	* {
      box-sizing: border-box;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    form > div{
      display: flex;
      justify-content: space-between;
    }

    form > div + * {
      margin-top: 10px;
    }
  </style> -->

  <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
       Welcome!
    </p>
    <p class="text-gray-500 text-lg">
       SvelteKit and Tailwind CSS in action
    </p>
</div> -->






<!-- This is the transformed code from vue -->
<!-- <script>
	let email = '';
	let firstName = '';
	let lastName = '';
	let phoneNumber = '';
  
	const validateEmail = () => {
	  return /\S+@\S+\.\S+/.test(email);
	};
  
	const validateName = (name) => {
	  return /^[A-Za-z\s]+$/.test(name);
	};
  
	const validatePhone = () => {
	  return /^\d{4}-\d{3}-\d{4}$/.test(phoneNumber);
	};
  
	const validEmail = validateEmail();
	const validFirstName = validateName(firstName);
	const validLastName = validateName(lastName);
	const validPhone = validatePhone();
	const validForm = validEmail && validFirstName && validLastName && validPhone;
  
	const say = (message) => {
	  alert(message);
	};
  </script>

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
			<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="JuanDeLaCruz@gmail.com" bind:value={email}>
			{#if !validEmail}
			  <span class="text-red-500 text-xs italic">Please enter a valid email address.</span>
			{/if}
		  </div>
		</div>
  
		<div class="md:flex md:items-center mb-6">
		  <div class="md:w-1/3">
			<label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-first-name">
			  First Name
			</label>
		  </div>
		  <div class="md:w-2/3">
			<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-first-name" type="text" placeholder="Juan" bind:value={firstName}>
			{#if !validFirstName}
			  <p class="text-red-500 text-xs italic">Please enter a valid first name.</p>
			{/if}
		  </div>
		</div>

		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
			  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name">
				Last Name
			  </label>
			</div>
			<div class="md:w-2/3">
			  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-last-name" type="text" placeholder="Dela Cruz" bind:value={lastName}>
			  {#if !validLastName}
			  <p class="text-red-500 text-xs italic">Please enter a valid last name.</p>
			  {/if}
			</div>
		</div>

		<div class="md:flex md:items-center mb-6">
			<div class="md:w-1/3">
			  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phhone-number">
				Phone Number
			  </label>
			</div>
			<div class="md:w-2/3">
			  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-last-name" type="text" placeholder="09XX-XXX-XXXX" bind:value={phoneNumber}>
			  {#if !validPhone}
			  <p class="text-red-500 text-xs italic">Please enter a valid phone number.</p>
			  {/if}
			</div>
		</div>
		
		<div class="md:flex md:items-center">
			<div class="md:w-1/3"></div>
			<div class="md:w-2/3">
			  <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
				Submit
			  </button>
			</div>
		  </div>

	</form>

	</div>
</div> -->

  
  