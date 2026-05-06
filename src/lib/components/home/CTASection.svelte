<script lang="ts">
  import Button from '$components/ui/Button.svelte';
</script>

<section class="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl rounded-[2rem] bg-slate-950/10 p-8 shadow-soft backdrop-blur-md sm:p-12">
    <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div class="space-y-4">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-200">Prepárate para vender</p>
        <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Lleva tu catálogo a redes y WhatsApp con una imagen profesional.</h2>
        <p class="max-w-xl text-sm leading-7 text-slate-200">Te ayudamos a convertir productos importados en ofertas claras, listas para clientes que compran por Instagram y Facebook.</p>
      </div>
      <div class="space-y-4 rounded-[1.75rem] bg-white/10 p-6 text-slate-100 shadow-soft">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-200">Recibe novedades</p>
        <form class="space-y-4" on:submit|preventDefault={() => {}}>
          <label class="block text-sm font-semibold" for="email">Email</label>
          <input id="email" type="email" placeholder="Tu correo" class="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40" />
          <Button type="submit" class="w-full">Quiero más información</Button>
        </form>
      </div>
    </div>
  </div>
</section>
