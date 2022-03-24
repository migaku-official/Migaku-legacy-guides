<template>
  <div>
    <ArticleHeader
      :title="toolGuide.title"
      :description="toolGuide.description"
      :image="toolGuide.headerImage"
    />
    <component v-if="false" :is="component" />
    <nav class="toolGuide-nav">
      <ul>
        <li>
          <Link to="/tools-guides" no-style>List view</Link>
        </li>
        <li class="toolGuideNav-title">{{ toolGuide.title }}</li>
        <li>{{ $t('tools_guides.reading') }}</li>
      </ul>
    </nav>
    <article class="toolGuide-container mt-10">
      <nuxt-content :document="toolGuide" />
    </article>
  </div>
</template>

<script>
import Link from '@/components/Link'
import MigakuImage from '@/components/MigakuImage'
import MigakuVideo from '@/components/MigakuVideo'
import MigakuTableOfContent from '@/components/MigakuTableOfContent'
import ColoredText from '@/components/ColoredText.vue'
import ArticleHeader from '~/components/articles/ArticleHeader.vue'

export default {
  name: 'ToolGuide',
  components: {
    InternalLink: Link,
    MigakuImage,
    MigakuVideo,
    MigakuTableOfContent,
    ColoredText,
    ArticleHeader,
  },
  async asyncData({ $content, params, app }) {
    const defaultLocale = app.i18n.locale
    const toolGuide = await $content(
      `${defaultLocale}/tools-guides/${params.category}`,
      params.slug
    ).fetch()

    return { toolGuide }
  },
  data() {
    return {
      component: '',
    }
  },
  mounted() {
    const links = document.querySelectorAll('a')
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = e.target.getAttribute('href')
        const isInternalPageLink = href.includes('#')

        if (isInternalPageLink) {
          document.getElementById(href.replace(/.*#/, '')).scrollIntoView({
            behavior: 'smooth',
          })
        } else {
          const replaced = href.replace('/en/', '/')
          window.location.href = replaced
          return
        }

        // e.target.setAttribute('href', replaced)
      })
    })
  },
  head() {
    return {
      title: this.toolGuide.title,
      base: {
        href: this.toolGuide.path,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.toolGuide.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.toolGuide.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.toolGuide.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://migaku.io/tools-guide/${this.$route.params.category}/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://migaku.io/tools-guide/${this.$route.params.category}/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.toolGuide.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.toolGuide.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.toolGuide.headerImage,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.toolGuide.headerImage,
        },
        {
          property: 'article:tag',
          content: 'Language learning, immersion learning, fluency',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.toolGuide-container {
  max-width: 778px;
  margin: 100px auto;

  @media (max-width: 1200px) {
    width: 85%;
    margin: auto;
  }
}

.toolGuideNav-title {
  @media (max-width: 600px) {
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.toolGuide-nav {
  width: 100vw;
  transform: translateX(calc(((100vw - 1500px) / 2) * -1));

  @media (max-width: 1500px) {
    transform: none;
  }

  li:first-child {
    margin-left: calc((100vw - 972px) / 2);

    @media (max-width: 1500px) {
      margin-left: calc((100vw - 648px) / 2);
    }

    @media (max-width: 1000px) {
      margin-top: 40px;
      margin-left: 20px;
    }

    @media (max-width: 800px) {
      margin-top: 0;
      margin-left: 20px;
    }
  }

  li {
    list-style: none;
    display: inline-block;
    position: relative;
    padding-right: 15px;
    margin-right: 5px;

    &:last-child {
      color: var(--color-blue);
    }

    &::after {
      content: '>';
      position: absolute;
      top: 0;
      right: 0;
      font-weight: bold;
      color: var(--color-blue);
    }

    &:last-child::after {
      display: none;
    }
  }
}

/* CONTENT */

.toolGuide-container {
  h1 {
    font-size: 35px;
    font-weight: 500;
    margin: 50px 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 400;
    position: relative;
    margin: 50px 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 1px;
      background: #c4c4c4;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 30px 0;
  }

  h4 {
    font-size: 17px;
    font-weight: 500;
    margin: 30px 0;
  }

  // li {
  //   list-style: inside;
  //   ul {
  //     position: relative;
  //     padding-left: 25px;
  //     margin: 5px;
  //     &::after {
  //       content: '';
  //       background: var(--color-blue);
  //       position: absolute;
  //       top: 0;
  //       left: 0;
  //       bottom: 0;
  //       width: 3px;
  //       opacity: 0.2;
  //     }
  //   }
  // }

  li {
    margin: 10px 15px;
  }

  ul {
    & > li {
      list-style: circle;
    }
  }

  ol {
    & > li {
      list-style: decimal;
    }
  }

  p {
    line-height: 1.5rem;
    margin: 15px 0;
  }

  strong {
    display: inline-block;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.05);
    padding: 7px;
  }

  a {
    font-size: 16px;
    color: var(--color-blue);
    position: relative;
    transition: color 0.3s;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: width 0.3s;
      background: var(--color-blue);
    }

    &:hover::after {
      width: 100%;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
}

/* DARK MODE */

.Migaku-DarkMode .toolGuide-nav {
  li {
    &:last-child {
      color: var(--color-orange);
    }

    &::after {
      color: var(--color-orange);
    }
  }
}

.Migaku-DarkMode .toolGuide-container {
  a {
    color: var(--color-orange) !important;

    &::after {
      background: var(--color-orange);
    }
  }

  pre {
    background: var(--color-dark-grey-darken-2);
  }
}
</style>
