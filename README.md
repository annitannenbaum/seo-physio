# Astro Static Site with WP Content

### Animations

To add a new animation, add it to the `intersectionObserver` script (TO DO rewrite into a switch case), define your keyframes in `Layout.astro` and
add the `animated` and a keyword (i.e. left / right) as classes to the desired element. 

### Deployments

To deploy to production, push directly to or merge a PR with main. A preview deployment (courtesy of Vercel) is created whenever a PR is first created.