<script>
    import { Link, MoveRight } from 'lucide-svelte';

    export let item;
</script>

<a
    href={item.target}
    target="_blank"
    class="flex items-center gap-4 px-5 py-3 bg-blue-500/60 hover:bg-blue-500/75 text-[15px] leading-5 transition duration-250 ease-in-out rounded-lg cursor-pointer"
>
    <Link size={20} />
    <span class="inline-flex flex-col">
        <span class="text-sm">Link</span>
        <span class="text-lg">{item.label}</span>
    </span>
    <span class="ms-auto">
        <MoveRight size={20} />
    </span>
</a>
