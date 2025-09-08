<script lang="ts">
    const categories = [
        { value: 'english', label: '英語' },
        { value: 'programming', label: 'プログラミング' },
        { value: 'it', label: 'IT' },
        { value: 'history', label: '歴史' }
    ]
</script>

<svelte:head>
    <title>記録ページ</title>
</svelte:head>

<div class="container">
    <h1>記録ページ</h1>
    <form method="POST">
        <div class="form-group">
            <label for="category">カテゴリ</label>
            <select id="catedory" name="category">
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
                
                ></textarea>
        </div>
        <div class="form-group">
            <label for="derivery-date">納期</label>
            <input type="date" id="derivery-data" name="derivery-data" />
        </div>
        <div class="form-group">
            <button type="submit">保存</button>
        </div>
    </form>
    <ul>
        {#each categories as category}
            <li><a href={`/record/${category.value}/register`}>{category.label}</a></li>
        {/each}
    </ul>
</div>

<style>

</style>
