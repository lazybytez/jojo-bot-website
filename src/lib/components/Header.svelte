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
            <p>Public Servers<sup>(soon)</sup></p>
            <p>Help<sup>(soon)</sup></p>
            <p>Status<sup>(soon)</sup></p>
            <a
                class="hover:text-rosewater"
                target="_blank"
                href="https://discord.gg/bcV6TN2k9V"
                rel="noopener noreferrer nofollow">Our Discord</a
            >
            <a
                class="hover:text-rosewater"
                target="_blank"
                href="https://github.com/lazybytez/jojo-discord-bot"
                rel="noopener noreferrer nofollow">Contributing</a
            >
        </nav>
    </div>
    <div class="flex items-center space-x-6">
        <a
            class="hover:text-rosewater"
            href="https://discord.com/api/oauth2/authorize?client_id=597997684611219456&permissions=4398046511095&scope=bot%20applications.commands"
            rel="noopener noreferrer nofollow"
        >
            Invite Bot
        </a>
        <p class="hover:text-rosewater" href="#">
            Dashboard<sup>(soon)</sup>
        </p>
        <ThemeSwitcher />
    </div>
</nav>
