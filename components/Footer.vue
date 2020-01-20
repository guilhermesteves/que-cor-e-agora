<template lang="pug">
  footer.footer-section.section.light-footer.no-padding-bottom
    .footer-logo
      img(src='http://placehold.it/200x70', alt='logo')
      p.font-second Que cor é agora?

    .footer-social
      a.fa.fa-facebook-square.wow.fadeIn(href='#.', data-wow-offset='150', data-wow-delay='0s')
      a.fa.fa-twitter.wow.fadeIn(href='#.', data-wow-offset='150', data-wow-delay='.15s')
      a.fa.fa-google-plus.wow.fadeIn(href='#.', data-wow-offset='150', data-wow-delay='.3s')
      a.fa.fa-pinterest.wow.fadeIn(href='#.', data-wow-offset='150', data-wow-delay='.45s')
      a.fa.fa-youtube-play.wow.fadeIn(href='#.', data-wow-offset='150', data-wow-delay='.6s')
    #go-top.go-top.go-top-out.in-page-scroll
      .circle1
      a.square(href='#top')
        span
      .rectangle
      .circle2
    .footer-bottom
      a.footer-bottom-text.font-second(href='', target='_blank') Que cor é agora? &copy; {{year}}. All Right Reserved.
</template>

<script>
export default {
  computed: {
    year() {
      return `2015 - ${new Date().getFullYear()}`
    }
  }
  // TODO: Adicionar os links de redes sociais
  // TODO: Hrefs com constants
  // TODO: Adicionar o logo do footer
}
</script>

<style lang="scss"></style>
