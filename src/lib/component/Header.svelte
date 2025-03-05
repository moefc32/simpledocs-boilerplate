<script>
    import { BookOpen } from 'lucide-svelte';
</script>

<header
    class="flex items-center gap-3 px-6 w-full h-[70px] border-b-[1px] border-gray-700"
>
    <a href="/" class="flex items-center gap-2 text-[1.35rem]">
        <BookOpen size={24} />
        {import.meta.env.VITE_APP_NAME}
    </a>
</header>
