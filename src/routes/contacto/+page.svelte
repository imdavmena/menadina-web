<script lang="ts">
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  const handleSubmit = () => {
    status = 'Gracias. Tu mensaje ha sido preparado para envío.';
  };
</script>

<svelte:head>
  <title>Contacto | MENADINA</title>
  <meta name="description" content="Contáctanos por WhatsApp o correo para recibir atención personalizada en MENADINA. Importaciones directas al mercado dominicano." />
</svelte:head>

<section class="bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-10 max-w-3xl">
      <p class="text-sm uppercase tracking-[0.3em] text-emerald-700">Contacto</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Hablemos de tu próxima importación.</h1>
      <p class="mt-4 text-lg leading-8 text-slate-600">Envíanos tus datos y te responderemos con opciones de catálogo, precios y tiempos de envío.</p>
    </div>

    <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <form class="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft" on:submit|preventDefault={handleSubmit}>
        <div>
          <label class="block text-sm font-semibold text-slate-900" for="name">Nombre</label>
          <input id="name" type="text" bind:value={name} required class="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/40" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-slate-900" for="email">Correo</label>
          <input id="email" type="email" bind:value={email} required class="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/40" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-slate-900" for="message">Mensaje</label>
          <textarea id="message" bind:value={message} rows="6" required class="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/40"></textarea>
        </div>
        <button class="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500" type="submit">Enviar mensaje</button>
        {#if status}
          <p class="mt-3 text-sm font-medium text-emerald-700">{status}</p>
        {/if}
      </form>

      <aside class="space-y-8 rounded-[2rem] bg-white p-8 shadow-soft">
        <div>
          <h2 class="text-xl font-semibold text-slate-950">Atención rápida</h2>
          <p class="mt-3 text-sm leading-7 text-slate-600">Preferimos atender tus pedidos y dudas por WhatsApp para ofrecer respuestas inmediatas.</p>
        </div>
        <div class="space-y-4 rounded-[1.75rem] bg-slate-950 p-6 text-white">
          <p class="text-sm uppercase tracking-[0.3em] text-emerald-300">WhatsApp</p>
          <p class="text-lg font-semibold">+1 800 123 4567</p>
          <p class="text-sm leading-7 text-slate-200">Disponible 7 días para cotizaciones, pedidos y asesoría de catálogo.</p>
        </div>
      </aside>
    </div>
  </div>
</section>
