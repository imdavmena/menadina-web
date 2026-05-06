<script lang="ts">
  import '../app.css';
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import CTAWhatsApp from '$components/home/CTAWhatsApp.svelte';
</script>

<div class="min-h-screen bg-slate-50 text-slate-900">
  <Header />

  <main class="relative">
    <slot />
  </main>

  <Footer />
  <CTAWhatsApp />
</div>
