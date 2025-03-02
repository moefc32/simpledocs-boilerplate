<script>
    const getYear = new Date().getFullYear();
    const currentYear = (getYear > 2025 ? `2025 - ` : '') + getYear;
</script>

<footer
    class="flex flex-col lg:flex-row items-center px-6 border-t-[1px] border-gray-500 text-gray-400 text-center min-h-[60px]"
>
    <div class="flex-1 text-center md:text-left">
        Dibuat oleh
        <a href="https://mf-chan.com" target="_blank" class="link">Mfc</a>
        &copy; {currentYear}
    </div>
    <div class="flex-1 text-center md:text-right">
        Simpledocs berlisensi
        <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            class="link"
        >
            MIT
        </a>
    </div>
</footer>
