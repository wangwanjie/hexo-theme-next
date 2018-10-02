{% if page.banner_img %}
  {% set background_image = page.banner_img %}
{% elseif is_post() and post.banner_img %}
  {% set background_image = post.banner_img %}
{% endif %}

{% if background_image %}
<script language="javascript">
  (function() {
    let background = $('.header').css('background-image');
    background = background.slice(0, background.lastIndexOf(','));
    let url = "{{ background_image }}";
    background += `, url(${url})`;
    $('.header').css('background-image', background);
  }());
</script>
{% endif %}