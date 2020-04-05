---
title: SEO
---

# SEO

**Useful Tools:**

[Google Trends](https://trends.google.com/trends/?geo=US) - explore what the world is searching

[AnswerThePublic](https://answerthepublic.com/) - most common questions asked around a keyword

[SpyFU](https://www.spyfu.com/) - Search competitors keywords

[A good beginner guide from MOZ](https://moz.com/beginners-guide-to-seo/why-search-engine-marketing-is-necessary)

### Starting
When you create a new site you got to submit it to Google via [Google Search Console](https://search.google.com/search-console/about), verify domain, add file, submit sitemaps.

### Search Engines
Search engines have 3 primary functions:

1) Crawl - scour the internet for content. Basically for each URL they find they crawl the content
2) Index - store and organize content found during the crawling process. Once a page is in the index it’s in the running to be displayed as a result
3) Rank - they provide content that best matches a searcher’s query - so results are ordered by most to least relevant. 

Use **Robot.txt** to tell Google what **NOT** to index. (always located in the root directory, ie: mysite.com/robot.txt)
You always want all your pages linking to some other pages, **this is how crawlers find new pages!**

Robots meta tag are located in the `<head>` part of our page:

`index` - tells the engines whether the page should be crawled or kept in a search engines’ index for retrieval  (default)

`noindex` - we want the page to be EXCLUDED from search results
`
`follow` - tells search engine whether links should be followed on the page to other pages (default)

`nofollow` - search engines will not follow or any links on the page

`noarchive` - used to restrict search engines from saving a cached copy of a page. (ie: if you run a shop and your price changed regularly)

*noindex/nofollow are usually used together when trying to prevent a page from being followed and indexed.

```
<head>
<meta name=“robots” content=“noindex, nofollow” />
</head>
```

### H1
This should describe the main topic of the page (this will usually always be the title or a variation of it)
* It should contain the page’s primary keyword or phrase.
* Avoid using header tags to mark up non-heading elements
* Use this to introduce what the content on the page will discuss

### Titles + Meta Tags
On average search engines display the first 50-60 (~512 px) characters of a title in results.
Meta tag description should be around 150-300 characters in length. Search engines will usually cut off the description at 150 characters.

### SSL
HTTPS always - need to obtain an SSL certificate to ensure that your URLs are using https. SSL certificates are used to encrypt data, and ensure that any data passed between the web server and browser remains private.

HTTP/2 - improvement from traditional HTTP - you must be on HTTPS to migrate to this.

### Canonicalization
When google crawls the same content on different web pages, sometimes it doesn’t know which page to index.

The rel=“canonical” tag was invented to help search engines better index the preferred version of content and not all its duplicates. Basically saying: “hey, don’t index this - index THIS”.

ie: If you want to republish a piece of content with a small change, but don’t want to risk creating duplicate content - the tag will indicate that the page on which this tag appears should be treated as a duplicate of the specified URL.

Google recommends having a self-referencing canonical tag on every page on the site. 

### Improving SEO on your website
1) Have clear and concise navigation
2) Make sure all pages are linking to something as this is how pages get crawled, links from other pages
3) Consider submitting a sitemap to Google. This is one of the easiest ways to ensure Google is finding your highest priority pages. Create a file that meets Google standards and submit it through Google Search Console.
4) Engagement metrics (having the correct amount of these):
    * Clicks (visits from search)
    * Time on page
    * Bounce rate (the percentage of all website sessions where users viewed only one page)
    * Pogo-sticking (clicking on an organic result - but then returning to the SERP to choose another result)
5) Questions are gold! Figure out what people are asking and add the answers to an FAQ page on your site.

`<link rel=“canonical” href=“https://www.someurl.com” />`