## Getting Started with Eleventy

[Craig Buckler](https://www.sitepoint.com/getting-started-with-eleventy/)


## Create a new project
GitHub.com => new

Add README
( moves it over to `main`)

## Get it Locally
VSCode
Explorer => Clone Repo

before we add and node_modules, be sure to ignore them!
## .gitignore
node_modules
dist


## Load up the tools
```
npm i -D @11ty/eleventy
```

## First Page

`./src/index.md`

some `frontmatter` and a simple message.
<pre>
‐‐‐
title: 11ty starter site
‐‐‐

This is a demonstration website using the [11ty static site generator](https://www.11ty.dev/). It shows pages, blog posts, lists, and tags.

The whole build process is managed through 11ty.

</pre>


`.eleventy.js` config file
<pre>
// 11ty configuration
module.exports = config => {

  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: 'dist'
    }

  };
};
</pre>

add the script
"start": "npx eleventy --serve",

we will use the Browsersync server for now...

I had a big problem with `cut-n-paste`.
It seems the `---` cannot be copied from the webpage, you
must type it in by hand.
It messes up the `frontmatter`

Also, there cannot be a blank line before the ---

There could be a markdown tool to check for these gotchas.

## Creating Templates
Add description and layout keys to the frontmatter in index.md

Layout references `_includes/page.njk`
<pre>
{% include "partials/htmlhead.njk" %}

<main>
{% block content %}

  <h1>{{ title }}</h1>

  {{ content | safe }}

{% endblock %}
</main>

{% include "partials/htmlfoot.njk" %}
</pre>

Which in turn, references head and foot partials.

Not sure why we cannot have an `html.njk` file to wrap the `page.njk` but we leave it for now.


### Further Pages

src/about/index.md:

‐‐‐
title: About us
description: What we do.
‐‐‐

Some information about us.
src/about/team.md:

‐‐‐
title: Our team
description: Information about us.
‐‐‐

Who are we and what we do.
src/about/privacy.md:

‐‐‐
title: Privacy policy
description: We keep your details private.
‐‐‐

Our privacy policy.


Next, we add a `json` to hold this group's `frontmatter`

`src/about/about.json`
<pre>
{
  "layout": "page.njk"
}
</pre>

note that `./src/about.md` does not work.
we need `./src/about/about.md`, or
`./src/about/index.md` works as well.


### Navigation menu ( eleventy-navigation )

npm install -D @11ty/eleventy-navigation

and add the plugin to the 11ty configuration ...

<pre>
  /* --- PLUGINS --- */

  // navigation
  config.addPlugin( require('@11ty/eleventy-navigation') );

</pre>


And add the code into the page layout...
<pre>

<header>
  <nav>
    {{ collections.all | eleventyNavigation | eleventyNavigationToHtml | safe }}
  </nav>
</header>

</pre>

Now the frontmatter to all pages.

eleventyNavigation:
  key: home
  order: 100

eleventyNavigation:
  key: about
  order: 200

don't forget the parent: about option for the sub-pages.

#### Shortcode.
<pre>
  /* --- SHORTCODES --- */

  // page navigation
  config.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));
</pre>

This links in a `navlist` shortcode that twists and turns and spits out a snipped of `html` for each page.
Thankfully, someone else put it together.

