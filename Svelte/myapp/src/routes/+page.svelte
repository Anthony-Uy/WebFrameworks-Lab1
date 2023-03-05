<!-- <script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->

<script>
	let email = '';
	let firstName = '';
	let lastName = '';
	let phoneNumber = '';
  
	function handleSubmit() {
	  if (!email || !firstName || !lastName || !phoneNumber) {
		alert('Please fill out all fields.');
	  } else if (!isValidEmail(email)) {
		alert('Please enter a valid email address.');
	  } else if (!isValidPhoneNumber(phoneNumber)) {
		alert('Please enter a valid phone number.');
	  } else {
		alert('Form submitted successfully!');
		// Submit form data to server here
	  }
	}
  
	function isValidEmail(email) {
	  // Simple email validation using regex
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return emailRegex.test(email);
	}
  
	function isValidPhoneNumber(phoneNumber) {
	  // Simple phone number validation using regex
	  //const phoneNumberRegex = /^\d{10}$/;
	  const phoneNumberRegex = /^(09\d{2}-\d{3}-\d{4})$/;
	  return phoneNumberRegex.test(phoneNumber);
	}
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>

	<label for="email">Email:</label>
	<input type="email" id="email" bind:value={email} required>
  
	<label for="firstName">First Name:</label>
	<input type="text" id="firstName" bind:value={firstName} required>
  
	<label for="lastName">Last Name:</label>
	<input type="text" id="lastName" bind:value={lastName} required>
  
	<label for="phoneNumber">Phone Number:</label>
	<input type="tel" id="phoneNumber" bind:value={phoneNumber} required>
  
	<button type="submit">Submit</button>
  </form>

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
  </style>