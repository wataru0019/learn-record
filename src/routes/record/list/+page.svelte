<script lang="ts">
    let { data } = $props();
</script>

<div class="container">
    <h1>記録一覧</h1>
    <ul>
        {#each data.records as record}
            <li>
                <p>{record.category}</p>
                <p>{record.title}</p>
                <p>{record.content}</p>
                <p>{record.date}</p>
            </li>
        {/each}
    </ul>
</div>