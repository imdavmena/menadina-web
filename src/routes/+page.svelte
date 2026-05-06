<script lang="ts">
  import Hero from '$components/home/Hero.svelte';
  import FeaturedCategories from '$components/home/FeaturedCategories.svelte';
  import FeaturedProducts from '$components/home/FeaturedProducts.svelte';
  import TrustSection from '$components/home/TrustSection.svelte';
  import Testimonials from '$components/home/Testimonials.svelte';
  import FAQSection from '$components/home/FAQSection.svelte';
  import CTASection from '$components/home/CTASection.svelte';
</script>

<svelte:head>
  <title>MENADINA | Importadora familiar de productos desde China</title>
  <meta name="description" content="MENADINA importa productos de alta rotación desde China para vender en República Dominicana con catálogo profesional, WhatsApp y redes sociales." />
  <meta property="og:title" content="MENADINA | Importadora familiar de productos desde China" />
  <meta property="og:description" content="Catálogo profesional para Instagram, Facebook y Shopify. Atención rápida por WhatsApp y stock en RD." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://menadina.do" />
  <meta property="og:image" content="https://menadina.do/og-image.png" />
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MENADINA',
      url: 'https://menadina.do',
      logo: 'https://menadina.do/logo.png',
      sameAs: ['https://www.instagram.com/menadina', 'https://www.facebook.com/menadina'],
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: '+18001234567',
        contactType: 'customer support',
        areaServed: 'DO'
      }]
    })}
  </script>
</svelte:head>

<Hero />
<FeaturedCategories />
<FeaturedProducts />
<TrustSection />
<Testimonials />
<FAQSection />
<CTASection />
