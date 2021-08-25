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
