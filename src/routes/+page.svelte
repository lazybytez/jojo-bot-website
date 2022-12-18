<svelte:head>
    <title>Startseite | JoJo Bot</title>
</svelte:head>
<!-- <main
    class="bg-surface-0 max-w-lg mx-auto my-8 sm:my-20 rounded py-20 flex flex-col items-center shadow-lg"
>
    <h1 class="text-4xl sm:text-5xl">JoJo Discord Bot</h1>
    <span class="py-6"> / </span>

    <a
        href="https://discord.com/api/oauth2/authorize?client_id=597997684611219456&permissions=4398046511095&scope=bot%20applications.commands"
        rel="noopener noreferrer nofollow"
        class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer active:shadow-none shadow-lg bg-gradient-to-tr from-mauve to-pink text-xl text-center text-basic hover:text-crust active:text-crust"
    >
        <span class="relative mx-16 my-2">Invite Bot Here</span>
    </a>

</main> -->
<script lang="ts">
    import Article from "$lib/components/Article.svelte";
</script>
<main>
    <Article>
            <!-- Left -->
            <div slot="left" id="intro" class="text-right pr-40 h-full flex justify-center items-end flex-col">
                <h1 class="text-6xl dott-after-h1 line-after-h1">JoJo's <i>bizar</i> <br /> <sup>discord Bot</sup></h1>
                <p>some cool description,</p>
                <p>Used on: <a>guild-number%</a> Servers</p>
            </div>

            <!-- Right -->
            <div slot="right">
                <img class="object-cover h-screen" alt="" src="https://media.discordapp.net/attachments/1025140816936697918/1025143871451177110/unknown.png?width=736&height=702" />
            </div>
    </Article>
    <Article>
            <!-- Left -->
            <div slot="left" id="second" class="p-40 pt-40 text-right">
                <h2>Discord bot cool weil! </h2>
            </div>

            <!-- Right -->
            <div slot="right" class="p-20 pt-40">
                <p>hier wirklich cool weil sehr langer text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
            </div>
    </Article>
</main>
