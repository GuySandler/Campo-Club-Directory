<script>
    import { P, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import campo from "../lib/campo.svg"
    // https://auth0.com/blog/authenticating-svelte-apps/
    import { onMount } from "svelte";
  import auth from "../authService";
  import { isAuthenticated, user, user_tasks, tasks } from "../stores.js";
  import TaskItem from "./TaskItem.svelte";

  let auth0Client;
  let newTask;

  onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });

  function login() {
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }

  function addItem() {
    let newTaskObject = {
      id: genRandom(),
      description: newTask,
      completed: false,
      user: $user.email
    };

    console.log(newTaskObject);

    let updatedTasks = [...$tasks, newTaskObject];

    tasks.set(updatedTasks);

    newTask = "";
  }

  function genRandom(length = 7) {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
</script>
<center>
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
    <div style="width:40%;padding-top:30px;padding-bottom:30px;position:relative;top:30vh;border:1px black solid;border-radius:15px">
        <P size="xl" align="center">Welcome to the Campo Club Directory</P>
        <P style="margin-top:10px" align="center">Here you can find a list and join all the clubs</P>
    </div>
</center>