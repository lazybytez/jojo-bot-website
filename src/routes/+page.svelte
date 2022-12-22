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
    import stockImage from '$lib/assets/images/stock-image.jpg';

</script>

<style>
    .vertical-line--home:before {
        @apply line-base;
        @apply bg-lavender;
        @apply mt-[3.5rem];
        @apply w-[2px];
        @apply left-auto;
        margin-left: calc(50vw - 6.05rem);
        height: calc(100% + 10rem);
    }

    .line-behind-home-title:before {
        @apply line-base;
        @apply bg-lavender;
        @apply h-[2px];
        @apply w-[2rem];
        @apply top-[1rem];

        /* lass mich in ruhe */
        right: -4.5rem;
    }

    .dott-behind-home-title {
        position: relative;
    }

    .dott-behind-home-title:after {
        @apply line-base;
        @apply bg-lavender;
        @apply rounded;
        @apply w-2;
        @apply h-2;
        @apply -right-10;
        @apply top-[1rem];

        /* the half of the dott itselfe + 1px (again the half of its size)*/
        transform: translateY(calc(-50% + 1px));
    }
</style>
<main>
    <Article>
        <!-- Left -->
        <div slot="left" id="intro" class="relative text-right h-full flex justify-center items-end flex-col">
            <!-- for the vertical line -> wrapper -->
            <div class="vertical-line--home pr-40 w-full ">
                <h1 class="text-6xl dott-behind-home-title line-behind-home-title before:mt-[2.5rem] after:mt-[2.5rem] ">JoJo's <i>bizarre</i> <br /> <sup>discord Bot</sup></h1>
                <p>some cool description,</p>
                <p>Used on: <a class="italic" href="https://google.de/">%guild-number%</a> Servers</p>
                <ul class="actions">
                    <li>
                        <a href="#second">
                            <span class="label hidden">next</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Right -->
        <div slot="right">
            <img class="object-cover h-screen" alt="" src="{stockImage}" />
        </div>
    </Article>
    <Article>
        <!-- Left -->
        <div slot="left" id="second" class="p-40 pt-40 text-right">
            <h2 class="dott-behind-home-title line-behind-home-title ">Discord bot cool weil! </h2>
        </div>

        <!-- Right -->
        <div slot="right" class="p-20 pt-40">
            <p>hier wirklich cool weil sehr langer text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        </div>
    </Article>
</main>
