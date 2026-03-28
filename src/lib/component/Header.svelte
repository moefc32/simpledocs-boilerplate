<script>
    import { base } from '$app/paths';
    import { Menu } from 'lucide-svelte';

    import sidebarToggle from './stores/sidebarToggle';
    import Search from './Search.svelte';

    export let searchSource;
</script>

<header
    class="flex items-center gap-3 px-6 bg-[hsl(225,20%,15%)] w-full h-20 border-b border-gray-700 z-1200 fixed top-0 left-0"
>
    <div class="flex">
        <a
            href={base || '/'}
            class="flex items-center ps-10 bg-[url('/favicon.svg')] bg-left bg-no-repeat bg-contain text-xl font-semibold h-8 cursor-pointer"
        >
            <span
                class="truncate max-w-[calc(100vw-150px)] md:max-w-[calc(100vw-400px)] overflow-hidden"
            >
                {import.meta.env.VITE_APP_NAME}
            </span>
        </a>
    </div>
    <div class="hidden md:block ms-auto">
        <Search {searchSource} />
    </div>
    <button
        class="md:hidden ms-auto px-3 h-10 border-1 border-gray-700 rounded-sm cursor-pointer"
        on:click={() => sidebarToggle.set(!$sidebarToggle)}
    >
        <Menu />
    </button>
</header>
