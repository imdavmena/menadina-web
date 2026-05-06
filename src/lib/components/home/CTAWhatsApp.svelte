<script lang="ts">
  import { buildWhatsappUrl } from '$utils/whatsapp';
  import { env } from '$env/dynamic/public';

  const whatsappUrl = buildWhatsappUrl(
    env.PUBLIC_WHATSAPP_NUMBER ?? '18001234567',
    'Hola MENADINA, quiero hablar sobre un pedido.'
  );
</script>

<a
  href={whatsappUrl}
  target="_blank"
  rel="noreferrer"
  aria-label="Abrir chat de WhatsApp"
  class="fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-300"
>
  <span class="text-xl">💬</span>
  WhatsApp
</a>
