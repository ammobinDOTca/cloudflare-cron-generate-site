declare var SCHEDULED_WEBHOOK: string

export async function handleScheduled(): Promise<void> {
  await fetch(SCHEDULED_WEBHOOK, { method: 'POST' })
}
