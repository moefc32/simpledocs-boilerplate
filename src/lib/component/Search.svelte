<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { Search } from 'lucide-svelte';
    import Fuse from 'fuse.js';

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
        window.addEventListener('keydown', evt => {
            if (evt.ctrlKey && evt.key === 'k') {
                evt.preventDefault();
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

<div class="hidden md:flex items-center ms-auto text-sm relative">
    {#if !isSearchInputActive}
        <span class="-me-[250px] text-gray-500">
            <kbd>Ctrl</kbd> + <kbd>K</kbd>
        </span>
    {/if}
    <span class="-me-7 text-gray-500">
        <Search size={14} />
    </span>
    <input
        bind:this={searchInput}
        type="search"
        class="ps-9 {isSearchInputActive
            ? 'pe-3'
            : 'pe-20'} w-[280px] h-[35px] border-[1px] border-gray-600 rounded-lg"
        placeholder="Search..."
        on:input={handleKeydown}
        bind:value={searchKeyword}
    />
    {#if searchResult.length && isSearchInputActive}
        <div
            class="search-dropdown flex flex-col gap-1 p-2 bg-slate-800 w-[280px] border-[1px] border-gray-600 rounded-lg shadow-lg absolute z-[100] top-[60px] right-0"
        >
            {#each searchResult as item, i}
                <a
                    href={item.slug}
                    class="px-3 py-2 hover:bg-gray-500/25 rounded-sm transition duration-150 ease-in-out"
                    on:click={() => (searchKeyword = '')}
                >
                    {item.title}
                </a>
            {/each}
        </div>
    {/if}
</div>
