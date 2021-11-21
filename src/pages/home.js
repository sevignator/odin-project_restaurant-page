import chefImgUrl from "../images/chef.jpg";

export const homeHtml = `
  <section class="home-content">
    <div class="hero-banner">
      <p class="banner-text">The warmest pho in town, period.</p>
      <button class="banner-button">Order online</button>
    </div>
    <div class="featured-quote">
      <blockquote>
        <p>“We've been proudly serving the residents of Photown for over 15 years. Try our authentic Vietnamese beef and chicken noodle soups!”</p>
        <footer>The Chef</footer>
      </blockquote>
    </div>
    <div class="featured-picture">
      <img src="${chefImgUrl}" alt="">
    </div>
  </section>
`;
