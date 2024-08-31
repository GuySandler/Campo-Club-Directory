<script>
    import { Hr, DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import campo from "../../lib/campo.svg"

</script>
<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img src="{campo}" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Club Index</span>
    </NavBrand>
    <DarkMode style="margin-left:10px;"></DarkMode>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/clubs">Find Clubs</NavLi>
        <NavLi href="/new">Add Club</NavLi>
        <NavLi href="/about" style="border:1px #0093AD solid;padding-left:10px;padding-right:10px;background:#0093AD;">About</NavLi>
    </NavUl>
</Navbar>
<div>
    <Hr>Made by Guy Sandler</Hr>
</div>