<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { Search } from 'lucide-svelte';
    import Fuse from 'fuse.js';

    import sidebarToggle from './stores/sidebarToggle';

    export let searchSource;

    const fuseOptions = {
        isCaseSensitive: false,
        findAllMatches: true,
        keys: [
            { name: 'title', weight: 0.75 },
            { name: 'contents', weight: 0.25 },
        ],
        threshold: 0.2,
        ignoreLocation: true,
    };

    let searchInput;
    let searchTimeout;
    let searchKeyword;
    let searchResult = [];
    let isSearchInputActive = false;

    async function handleKeydown() {
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            doSearch();
        }, 200);
    }

    async function doSearch() {
        searchResult = [];

        if (searchKeyword) {
            const fuse = new Fuse(searchSource, fuseOptions);
            let result = fuse.search(searchKeyword);

            searchResult = result.slice(0, 5).map(item => item.item);
        }
    }

    onMount(() => {
        window.addEventListener('keydown', event => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                searchInput?.focus();
            }
        });

        function checkActive() {
            isSearchInputActive =
                searchInput?.contains(document.activeElement) ||
                document
                    .querySelector('.search-dropdown')
                    ?.contains(document.activeElement);
        }

        document.addEventListener('focusin', checkActive);
        document.addEventListener('focusout', () =>
            setTimeout(checkActive, 50),
        );
    });

    $: if (!searchKeyword) searchResult = [];
</script>

<div class="flex items-center text-sm relative">
    <span class="flex justify-center text-gray-500 w-11">
        <Search size={16} />
    </span>
    <input
        bind:this={searchInput}
        type="search"
        class="ps-10 {isSearchInputActive
            ? 'me-0 pe-4'
            : '-me-18 pe-22'} w-full -ms-11 md:w-[280px] h-[40px] border-[1px] border-gray-600 rounded-lg"
        placeholder="Search..."
        on:input={handleKeydown}
        bind:value={searchKeyword}
    />
    {#if !isSearchInputActive}
        <span class="hidden md:inline text-gray-500 w-18">
            <kbd>Ctrl</kbd> + <kbd>K</kbd>
        </span>
    {/if}
    {#if searchResult.length && isSearchInputActive}
        <div
            class="search-dropdown flex flex-col gap-1 p-2 bg-slate-800 w-full md:w-[280px] border-[1px] border-gray-600 rounded-lg shadow-xl absolute z-[100] top-[45px] md:top-[60px] right-0"
        >
            {#each searchResult as item, i}
                <a
                    href={`${base}/${item.slug}`}
                    class="px-3 py-2 hover:bg-gray-500/25 rounded-sm transition duration-150 ease-in-out"
                    on:click={() => {
                        searchKeyword = '';
                        sidebarToggle.set(false);
                    }}
                >
                    {item.title}
                </a>
            {/each}
        </div>
    {/if}
</div>
