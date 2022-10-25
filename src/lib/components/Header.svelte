<script>
    import ThemeSwitcher from '$lib/components/Theme/Switcher.svelte';
</script>

<nav class="bg-crust flex justify-between align-center h-16 items-center px-8">
    <div class="flex space-x-6">
        <a href="/">
            <h1 class="font-bold text-4xl text-mauve">JoJo</h1>
        </a>
        <nav class="flex items-center space-x-6 font-semibold">
            <a class="hover:text-rosewater" href="/commands">Commands</a>
            <a class="">Public Servers<sup>(soon)</sup></a>
            <a class="">Help<sup>(soon)</sup></a>
            <a class="">Status<sup>(soon)</sup></a>
            <a class="hover:text-rosewater" target="_blank" href="https://discord.gg/bcV6TN2k9V"
                >Our Discord</a
            >
            <a
                class="hover:text-rosewater"
                target="_blank"
                href="https://github.com/lazybytez/jojo-discord-bot">Contributing</a
            >
        </nav>
    </div>
    <div>
        <a
            class="pr-4 hover:text-rosewater"
            href="https://discord.com/api/oauth2/authorize?client_id=597997684611219456&permissions=4398046511095&scope=bot%20applications.commands"
        >
            Invite Bot
        </a>
        <a
            class="pr-4 hover:text-rosewater"
        >
            Dashboard<sup>(soon)</sup>
        </a>
        <ThemeSwitcher />
    </div>
</nav>
