<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import campo from "../../lib/campo.svg"

</script>
<Navbar style="background-color:#44ddc8;" let:hidden let:toggle>
    <NavBrand href="/">
        <img src="{campo}" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Club Index</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/clubs">Find Clubs</NavLi>
        <NavLi href="/new">Add/update Club</NavLi>
        <NavLi href="/about">About</NavLi>
    </NavUl>
</Navbar>
<center>
    <div style="border:2px solid black;border-radius:10px;width:80%;height:100%;padding:10px;margin-top:20px;margin-bottom:20px;">
        <button class="club">
            <h1 class="clubName">Club 1</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 2</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 3</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 4</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 5</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 6</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 7</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 8</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 9</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
        <button class="club">
            <h1 class="clubName">Club 10</h1>
            <h1 class="clubDisc">desc</h1>
        </button>
    </div>
</center>
<style>
    .clubName {
        float: left;
        display: inline;
        margin-left: 5px;
    }
    .clubDisc {
        float: right;
        display: inline;
        margin-right: 5px;
    }
    .club {
        border:2px solid black;
        border-radius:5px;
        width:90%;
        margin-top:5px;
        margin-bottom:5px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
</style>