<script lang="ts">
    import { onMount } from 'svelte';
    const categories = [
        { value: 'english', label: '英語' },
        { value: 'programming', label: 'プログラミング' },
        { value: 'it', label: 'IT' },
        { value: 'history', label: '歴史' }
    ]
    let { data } = $props()
    console.log(data)
    let catedory = $state(data.selectCategory.catedory || "english")
    let goal = $state(data.selectCategory.goal || "")

    $inspect(catedory)

    // yyyy-MM-dd 形式に変換
    const formatDate = (d: any) =>
    d.toISOString().split("T")[0]; // "2024-12-31"

    // let date_value = formatDate("1970-01-01T00:00:00.000Z");
    let deriveryDate = $state(data.selectCategory.deriveryDate || formatDate(new Date()));
</script>

<svelte:head>
    <title>記録ページ</title>
</svelte:head>

<div class="container">
    <h1>記録ページ</h1>
    <form method="POST">
        <div class="form-group">
            <label for="category">カテゴリ</label>
            <select id="catedory" name="category" bind:value={catedory}>
                {#each categories as category}
                    <option value={category.value}>{category.label}</option>
                {/each}
            </select>
        </div>
        <div class="form-group">
            <label for="goal">目標</label>
            <textarea
                id="goal"
                name="goal"
                rows="3"
                placeholder="各カテゴリーの目標を入力してください"
                bind:value={goal}
                ></textarea>
        </div>
        <div class="form-group">
            <label for="derivery-date">納期</label>
            <input type="date" id="derivery-data" name="derivery-data" value={deriveryDate} />
        </div>
        <div class="form-group">
            <button type="submit">保存</button>
        </div>
    </form>
</div>

<style>

</style>
