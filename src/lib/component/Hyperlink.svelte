<script>
    import { Link, MoveRight } from 'lucide-svelte';

    export let item;
</script>

<a
    href={item.target}
    target="_blank"
    class="flex items-center gap-4 px-5 py-3 bg-indigo-500/60 hover:bg-indigo-500/75 text-[15px] leading-5 transition duration-250 ease-in-out rounded-lg cursor-pointer"
    title={item.label || item.target}
>
    <Link size={20} />
    <span class="inline-flex flex-col">
        <span class={item.label ? 'text-white/75 text-sm' : 'text-lg'}>
            External Link
        </span>
        <span class="text-lg">{item.label}</span>
    </span>
    <span class="ms-auto">
        <MoveRight size={20} />
    </span>
</a>
