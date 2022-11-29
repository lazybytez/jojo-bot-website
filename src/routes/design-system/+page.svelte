<script lang="ts">
    import type { MarkdownData } from '$lib/types/Markdown';
    import { UserIcon, InfoIcon } from 'svelte-feather-icons';

    export let data: MarkdownData;
</script>

<svelte:head>
    <title>Design System | JoJo Bot</title>
</svelte:head>

<main class="p-8 rounded bg-surface-0 max-w-4xl mx-auto my-8 sm:my-20 space-y-4">
    <h1 class="text-4xl underline">Design System</h1>
    <h2 class="text-3xl underline">Colors</h2>
    <div>
        <b>Green / Success</b>
        <div class="flex space-x-4">
            <div class="bg-green w-10 h-10 rounded" />
            <div class="bg-green/70 w-10 h-10 rounded" />
        </div>
    </div>
    <div>
        <b>Blue / Info</b>
        <div class="flex space-x-4">
            <div class="bg-blue w-10 h-10 rounded" />
            <div class="bg-blue/70 w-10 h-10 rounded" />
        </div>
    </div>
    <div>
        <b>Yellow / Warning</b>
        <div class="flex space-x-4">
            <div class="bg-yellow w-10 h-10 rounded" />
            <div class="bg-yellow/70 w-10 h-10 rounded" />
        </div>
    </div>
    <div>
        <b>Red / Error</b>
        <div class="flex space-x-4">
            <div class="bg-red w-10 h-10 rounded" />
            <div class="bg-red/70 w-10 h-10 rounded" />
        </div>
    </div>
    <div>
        <b>Company Colors / Primary, Secondary, etc</b>
        <div class="flex space-x-4">
            <div class="bg-mauve w-10 h-10 rounded" />
            <div class="bg-lavender w-10 h-10 rounded" />
        </div>
    </div>
    <div>
        <b>Dark / Background</b>
        <div class="flex space-x-4">
            <div class="bg-crust w-10 h-10 rounded border-solid border-2" />
            <div class="bg-mantle w-10 h-10 rounded border-solid border-2" />
            <div class="bg-base w-10 h-10 rounded border-solid border-2" />
        </div>
    </div>
    <div>
        <b>Light / Foreground</b>
        <div class="flex space-x-4">
            <div class="bg-surface-0 w-10 h-10 rounded border-solid border-2" />
            <div class="bg-surface-1 w-10 h-10 rounded border-solid border-2" />
            <div class="bg-surface-2 w-10 h-10 rounded border-solid border-2" />
            <div class="bg-overlay-0 w-10 h-10 rounded border-solid border-2" />
            <div class="bg-overlay-1 w-10 h-10 rounded border-solid border-2" />
            <div class="bg-overlay-2 w-10 h-10 rounded border-solid border-2" />
        </div>
    </div>
    <h2 class="text-3xl underline">Typography</h2>
    <div>
        <div class="space-y-4">
            <h2 class="text-2xl mb-4 underline">Headings</h2>

            <h1 class="text-4xl">Heading 1</h1>
            <h2 class="text-3xl">Heading 2</h2>
            <h3 class="text-2xl">Heading 3</h3>
            <h4 class="text-xl">Heading 4</h4>
            <h5 class="text-lg">Heading 5</h5>
            <h6 class="text-sm">Heading 6</h6>

            <h2 class="text-2xl mb-4 underline">Styling</h2>

            <p>
                Text Regular in <code class="text-peach">p</code> element. With
                <i>Text Italic</i>
                and <b>Text Bold</b>
            </p>

            <p class="font-thin">Text 100</p>
            <p class="font-extralight">Text 200</p>
            <p class="font-light">Text 300</p>
            <p class="font-normal">Text 400</p>
            <p class="font-medium">Text 500</p>
            <p class="font-semibold">Text 600</p>
            <p class="font-bold">Text 700</p>
            <p class="font-extrabold">Text 800</p>

            <h2 class="text-2xl mb-4 underline">Lists</h2>

            <ul class="list-disc">
                <li>This is an unordered list</li>
                <li>This is an unordered list</li>
            </ul>
            <ul class="list-none">
                <li>This is a list without marker</li>
                <li>This is a list without marker</li>
            </ul>
            <ol class="list-decimal">
                <li>This is an ordered list</li>
                <li>This is an ordered list</li>
            </ol>
        </div>
    </div>
    <h2 class="text-3xl underline">Inputs</h2>
    <div class="flex flex-col max-w-sm">
        <label for="designSystemEmailAddress">New email address*</label>
        <input
            name="designSystemEmailAddress"
            class="mb-4 placeholder:text-subtext-1 bg-surface-1 px-6 py-4 rounded text shadow outline-none focus:ring-mauve focus:ring-2"
            type="email"
            required
            placeholder="Enter email address..."
        />
        <label for="designSystemPassword">Password*</label>
        <input
            name="designSystemPassword"
            class="tracking-widest placeholder:tracking-normal placeholder:text-subtext-1 bg-surface-1 px-6 py-4 rounded text shadow outline-none focus:ring-mauve focus:ring-2 border-b-red border-b-2 "
            type="password"
            required
            placeholder="Enter password..."
        />
        <small class="mb-4 ">Passwords must have a minimum length of 8 characters.</small>
        <h3 class="text-2xl mb-6 underline">Alternative Inputs</h3>

        <div class="relative z-0 mb-6 w-full group">
            <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text bg-transparent border-0 border-b-2 border-overlay-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue peer"
                placeholder=" "
                required
            />
            <label
                for="floating_email"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                >Email address</label
            >
        </div>

        <label for="designSystemEmailAddressAlt">New email address*</label>
        <input
            name="designSystemEmailAddressAlt"
            class="mb-4 placeholder:text-subtext-1 bg-inherit px-6 py-4 text outline-none focus:ring-mauve focus:ring-2 "
            type="email"
            required
            placeholder="Enter email address..."
        />
        <label for="designSystemPasswordAlt">Password*</label>
        <input
            name="designSystemPasswordAlt"
            class="tracking-widest placeholder:tracking-normal placeholder:text-subtext-1 bg-inherit px-6 py-4 text outline-none focus:ring-mauve focus:ring-2 border-b-red border-b-2 "
            type="password"
            required
            placeholder="Enter password..."
        />
        <small class="mb-4 ">Passwords must have a minimum length of 8 characters.</small>
    </div>
    <h2 class="text-3xl underline">Custom Multifunctional Selects</h2>
    <div />
    <h2 class="text-3xl underline">Buttons</h2>
    <div />
    <h2 class="text-3xl underline">Buttons Disabled</h2>
    <div />
    <h2 class="text-3xl underline">Buttons with Icon</h2>
    <div />
    <h2 class="text-3xl underline">Icons</h2>
    <div class="space-y-2">
        <div class="flex space-x-4">
            <span>xs:</span>
            <UserIcon size="18" />
        </div>
        <div class="flex space-x-4">
            <span>sm: </span>
            <UserIcon size="20" />
        </div>
        <div class="flex space-x-4">
            <span>md:</span>
            <UserIcon size="24" />
        </div>
        <div class="flex space-x-4">
            <span>lg:</span>
            <UserIcon size="32" />
        </div>
    </div>
    <h2 class="text-3xl underline">Links</h2>
    <div class="flex flex-col">
        <a
            href="_#"
            class="text hover:text-rosewater focus:text-rosewater active:text-rosewater hover:underline"
            >This is a hidden Link. Ex: for Headers</a
        >
        <a
            href="_#"
            class="text hover:text-rosewater focus:text-rosewater active:text-rosewater underline"
            >This is a hidden Link with underline. Ex: In Text</a
        >
        <a
            href="_#"
            class="text-sapphire hover:text-rosewater focus:text-rosewater active:text-rosewater hover:underline"
            >This is a visible Link with underline</a
        >
        <a
            href="_#"
            class="text-sapphire hover:text-rosewater focus:text-rosewater active:text-rosewater underline"
            >This is a visible Link with underline</a
        >
    </div>
    <h2 class="text-3xl underline">Spacings</h2>
    <div class="flex flex-col space-y-2">
        <div class="tracking-tighter">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div class="tracking-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <div class="tracking-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <div class="tracking-wide">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <div class="tracking-wider">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <div class="tracking-widest">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
    </div>
    <h2 class="text-3xl underline">Checkboxes</h2>
    <div>
        <div>Checkbox with green checked field</div>
        <input type="checkbox" class="w-6 h-6 bg-surface-1 border rounded text-green" />
        <input checked type="checkbox" class="w-6 h-6 bg-surface-1 border rounded text-green" />
    </div>
    <h2 class="text-3xl underline">Labels</h2>
    <div class="flex space-x-4">
        <div class="bg-crust p-1 uppercase text-sm font-semibold font-mono">Example</div>
        <div class="bg-mauve p-1 uppercase text-sm font-semibold font-mono text-basic">Primary</div>
        <div class="bg-lavender p-1 uppercase text-sm font-semibold font-mono text-basic">
            Secondary
        </div>
    </div>
    <div class="flex space-x-4">
        <div class="bg-blue p-1 uppercase text-sm font-semibold font-mono text-basic">Info</div>
        <div class="bg-green p-1 uppercase text-sm font-semibold font-mono text-basic">Success</div>
        <div class="bg-yellow p-1 uppercase text-sm font-semibold font-mono text-basic">
            Warning
        </div>
        <div class="bg-red p-1 uppercase text-sm font-semibold font-mono text-basic">Error</div>
    </div>
    <h2 class="text-3xl underline">Messages</h2>
    <div class="space-y-4">
        <div class="flex">
            <div class="bg-blue w-12 h-12 justify-center items-center flex text-basic">
                <InfoIcon size="28" />
            </div>
            <div class="bg-blue/80 max items-center flex text-basic pl-6 w-full">
                Here you can edit your Settings
            </div>
        </div>
        <div class="flex">
            <div class="bg-green w-12 h-12 justify-center items-center flex text-basic">
                <InfoIcon size="28" />
            </div>
            <div class="bg-green/80 max-h-12 items-center flex text-basic pl-6 w-full">
                Your Settings have been saved
            </div>
        </div>
        <div class="flex">
            <div class="bg-yellow w-12 h-12 justify-center items-center flex text-basic">
                <InfoIcon size="28" />
            </div>
            <div class="bg-yellow/80 max-h-12 items-center flex text-basic pl-6 w-full">
                Currently you cannot save settings
            </div>
        </div>
        <div class="flex">
            <div class="bg-red w-12 h-12 justify-center items-center flex text-basic">
                <InfoIcon size="28" />
            </div>
            <div class="bg-red/80 max-h-12 items-center flex text-basic pl-6 w-full">
                Your Settings have not been saved
            </div>
        </div>
        <div />
    </div>
</main>
<div
    class="bg-surface-0 prose lg:prose-lg mx-4 sm:mx-auto p-8 rounded mb-8 sm:mb-20 text max-w-screen-2xl"
>
    <h1 class="text-subtext-1">Automatic Markdown Styling</h1>
    <svelte:component this={data.content} />
</div>
