<script>
    import { GradientButton, P, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import campo from "../lib/campo.svg"
    
    import {SignIN} from "../firebaseTools"
    import { loggedIn } from "../stores";
    let isloggedin;
    loggedIn.subscribe((value) => {
	    isloggedin = value;
    });
</script>
<center>
    <Navbar style="background-color:#44ddc8;" let:hidden let:toggle>
        <NavBrand href="/">
            <img src="{campo}" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Club Index</span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        {#if isloggedin}
        <NavUl {hidden}>
            <NavLi href="/clubs">Find Clubs</NavLi>
            <NavLi href="/new">Add/update Club</NavLi>
            <NavLi href="/about">About</NavLi>
        </NavUl>
        {/if}
    </Navbar>
        <!-- <h1>{isloggedin}</h1> -->
        <div style="width:40%;padding-top:30px;padding-bottom:30px;position:relative;top:30vh;border:1px black solid;border-radius:15px">
            <P size="xl" align="center">Welcome to the Campo Club Directory</P>
            <P style="margin-top:10px" align="center">Here you can find a list and join all the clubs</P>
        </div>
    
    {#if !isloggedin}
        <GradientButton on:click={SignIN} color="blue">Sign Up/In</GradientButton>
        <P size="xl" align="center">Log in/Sign up to use this</P>
    {/if}
</center>