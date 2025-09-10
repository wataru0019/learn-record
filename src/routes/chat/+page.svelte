<script lang="ts">
    interface Message {
        role: 'user' | 'assistant';
        content: string;
    }
    let messages: Message[] = $state([])
    let userMessage: string = $state('')

    // const handleSubmit = async (e: Event) => {
    //     e.preventDefault();
    //     if (!userMessage.trim()) return;

    //     messages = [...messages, { role: 'user', content: userMessage }];
    //     userMessage = '';
    //     return
    // }
    $inspect(messages)
    import { Chat } from '@ai-sdk/svelte';

    const chat = new Chat({});

    function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    chat.sendMessage({ text: userMessage });
    userMessage = '';
    }
</script>

<div class="container">
    <ul>
        {#each chat.messages as message, messageIndex (messageIndex)}
          <li>
            <div>{message.role}</div>
            <div>
              {#each message.parts as part, partIndex (partIndex)}
                {#if part.type === 'text'}
                  <div>{part.text}</div>
                {/if}
              {/each}
            </div>
          </li>
        {/each}
      </ul>
      <form onsubmit={handleSubmit}>
        <input bind:value={userMessage} />
        <button type="submit">Send</button>
      </form>
</div>