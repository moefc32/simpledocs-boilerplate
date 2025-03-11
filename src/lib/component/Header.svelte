<script>
    import { base } from '$app/paths';
    import { Menu } from 'lucide-svelte';

    import sidebarToggle from './stores/sidebarToggle';
    import Search from './Search.svelte';

    export let searchSource;
</script>

<header
    class="flex items-center gap-3 px-6 bg-[hsl(225,20%,15%)] w-full h-[70px] border-b-[1px] border-gray-700 z-[1200] fixed top-0 left-0"
>
    <a
        href={base}
        class="flex items-center gap-2 me-auto text-[1.4rem]"
        on:click={() => sidebarToggle.set(false)}
    >
        <span
            class="truncate max-w-[calc(100vw-150px)] md:max-w-[calc(100vw-400px)] overflow-hidden"
        >
            {import.meta.env.VITE_APP_NAME}
        </span>
    </a>
    <div class="hidden md:block ms-auto">
        <Search {searchSource} />
    </div>
    <button
        class="md:hidden px-3 h-[40px] border-[1px] border-gray-700 rounded-sm cursor-pointer"
        on:click={() => sidebarToggle.set(!$sidebarToggle)}
    >
        <Menu />
    </button>
</header>
