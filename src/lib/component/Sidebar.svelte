<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    import sidebarToggle from './stores/sidebarToggle';
    import Search from './Search.svelte';

    export let searchSource;
    export let documentation;

    $: location = $page.url.pathname.replace(/\/$/, '');
</script>

<aside
    class="{$sidebarToggle
        ? 'left-0'
        : '-left-[150vw]'} p-6 bg-slate-800 md:bg-transparent w-full min-w-64 max-w-[calc(100%-24px)] md:max-w-64 h-[calc(100vh-72px)] transition-[left] duration-250 ease-in-out border-e border-gray-700 overflow-y-auto z-1000 fixed md:sticky top-18"
>
    <div class="md:hidden mb-6">
        <Search {searchSource} />
    </div>
    <nav class="flex flex-1 flex-col items-stretch gap-1">
        <a
            href={base || '/'}
            class="{base.replace(/\/$/, '') === location
                ? 'bg-indigo-500/60 hover:bg-indigo-500/75 text-white'
                : 'text-white/60 hover:text-white'} -mx-2 px-2 py-1 transition duration-150 ease-in-out rounded-sm"
            on:click={() => sidebarToggle.set(false)}
        >
            Home
        </a>
        {#each documentation as section, i}
            <div class="mt-5 mb-2 text-[.8rem] font-bold uppercase">
                {section.name}
            </div>
            {#each section.pages as item, j}
                <a
                    href={`${base}/${item.slug}`}
                    class="{`${base}/${item.slug}` === location
                        ? 'bg-indigo-500/60 hover:bg-indigo-500/75 text-white'
                        : 'text-white/60 hover:text-white'} -mx-2 px-2 py-1 truncate transition duration-150 ease-in-out rounded-sm"
                    title={item.title}
                    on:click={() => sidebarToggle.set(false)}
                >
                    {item.title}
                </a>
            {/each}
        {/each}
    </nav>
</aside>

<style>
    aside::-webkit-scrollbar {
        width: 0.65rem;
    }

    aside::-webkit-scrollbar-track {
        background: rgba(100%, 100%, 100%, 0.85);
    }

    aside::-webkit-scrollbar-thumb {
        background: var(--color-gray-500);
    }

    aside::-webkit-scrollbar-thumb:hover {
        background: var(--color-gray-600);
    }
</style>
