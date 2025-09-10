import { createOpenAI } from '@ai-sdk/openai';
import { streamText, type UIMessage, convertToModelMessages } from 'ai';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, platform }) => {
  const apiKey = platform?.env?.OPENAI_API_KEY; // ← ここがポイント
  if (!apiKey) {
    return new Response('OPENAI_API_KEY is missing', { status: 500 });
  }

  const openai = createOpenAI({ apiKey }); // モジュール外/ハンドラ内で初期化
  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
};