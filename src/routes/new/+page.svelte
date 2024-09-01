<script>
    import { Textarea, Select, Label, Input, GradientButton, P, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import campo from "../../lib/campo.svg"
    import generator from 'generate-password-ts';
    let page = 0;
    function add() {page = 1;}
    function update() {page = 2;}
    function submitadd() {
        // alert("submitted");
        passgen();
        submited = true;
    }
    function passgen() {
        passcode = generator.generate({length: 10,numbers: true, symbols: true, uppercase: true, lowercase: true})
    }
    let types = [
        { value: 'academic', name: 'Academic Club' },
        { value: 'sport', name: 'Sports Club' },
        { value: 'diverse', name: 'Diversity Club' },
        { value: 'service', name: 'Service Club' },
        { value: 'hobby', name: 'Hobby Club' },
        { value: 'other', name: 'Other Type Of Club' },
    ];
    let name = "";
    let when = "";
    let where = "";
    let type = "";
    let disc = "";
    let email = "";
    let submited = false;
    let passcode = "";

    let passcorrect = false;
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
    {#if page == 0}
        <div style="width:40%;padding-top:30px;padding-bottom:30px;position:relative;top:30vh;border:1px black solid;border-radius:15px">
            <P size="xl" align="center" style="margin-bottom:10px;">Are you here for Updating or Adding a club?</P>
            <GradientButton style="margin-right:10px;" on:click={add} color="blue">Add</GradientButton>
            <GradientButton style="margin-left:10px;" on:click={update} color="cyan">Update</GradientButton>
        </div>
    {/if}
    {#if page == 1}
    <div style="width:75%;padding-top:30px;padding-bottom:30px;position:relative;top:5vh;border:1px black solid;border-radius:15px;margin-bottom:75px;">
        {#if submited == false}
            <P size="xl" align="center" style="margin-bottom:10px;">Adding a new club</P>
            <P align="center" style="margin-bottom:10px;">note that you will need to resubmit this every schoolyear</P>
            <br>
            <Label class="space-y-2 mb-5">
                <span>Name of club</span>
                <Input bind:value={name} style="width:30%;" placeholder="name" />
            </Label>
            <Label class="inline-block mr-5 space-y-2">
                <span>Where do you meet?</span>
                <Input bind:value={where} style="width:100%;" placeholder="room 10" />
            </Label>
            <Label class="inline-block ml-5 space-y-2">
                <span>When do you meet?</span>
                <Input bind:value={when} style="width:100%;" placeholder="Fidays at lunch" />
            </Label>
            <br>
            <span>Club Type</span>
            <Select bind:value={type} id="types" style="width:50%;" underline class="mt-2" items={types} />
            <br>
            <Textarea bind:value={disc} style="width:75%;" placeholder="Discription of club" rows="4" name="message" />
            <br>
            <Label class="inline-block ml-5 space-y-2">
                <span>Contact Email</span>
                <Input bind:value={email} type="email" pattern="[^ @]*@[^ @]*" style="width:100%;" placeholder="Email" />
            </Label>
            <br>
            <GradientButton style="margin-top:10px;" on:click={submitadd} color="green">Submit</GradientButton>
        {/if}
        {#if submited == true}
            <P size="xl" align="center" style="margin-bottom:10px;">Thank you for submitting a club</P>
            <P align="center" style="margin-bottom:10px;">Your club will be added to the list soon</P>
            <P align="center" style="margin-bottom:10px;"><strong>Remember this passcode</strong> to edit your club later, if you forgot it <strong>TOO BAD</strong>: {passcode}</P>
        {/if}
    </div>
    {/if}
    {#if page == 2}
    <div style="width:75%;padding-top:30px;padding-bottom:30px;position:relative;top:5vh;border:1px black solid;border-radius:15px;margin-bottom:75px;">
        {#if passcorrect == false}
            <P size="xl" align="center" style="margin-bottom:10px;">Update a Club</P>
            <br>
        {/if}
        {#if passcorrect == true}
            <Label class="space-y-2 mb-5">
                <span>Name of club</span>
                <Input bind:value={name} style="width:30%;" placeholder="name" />
            </Label>
            <Label class="inline-block mr-5 space-y-2">
                <span>Where do you meet?</span>
                <Input bind:value={where} style="width:100%;" placeholder="room 10" />
            </Label>
            <Label class="inline-block ml-5 space-y-2">
                <span>When do you meet?</span>
                <Input bind:value={when} style="width:100%;" placeholder="Fidays at lunch" />
            </Label>
            <br>
            <span>Club Type</span>
            <Select bind:value={type} id="types" style="width:50%;" underline class="mt-2" items={types} />
            <br>
            <Textarea bind:value={disc} style="width:75%;" placeholder="Discription of club" rows="4" name="message" />
            <br>
            <Label class="inline-block ml-5 space-y-2">
                <span>Contact Email</span>
                <Input bind:value={email} type="email" pattern="[^ @]*@[^ @]*" style="width:100%;" placeholder="Email" />
            </Label>
            <br>
            <GradientButton style="margin-top:10px;" on:click={submitadd} color="green">Submit</GradientButton>
        {/if}
    </div>
    {/if}
</center>