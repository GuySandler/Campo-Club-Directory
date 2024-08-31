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