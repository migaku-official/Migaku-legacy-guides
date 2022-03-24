<template>
  <div>
    <ListViewHeader
      :title="$t('landing.toolsSection.title')"
      :description="$t('landing.toolsSection.description')"
    />
    <template v-if="orderedCategories.length <= 0">
      <div class="Article-comingSoon">
        <!-- <ComingSoonCard /> -->
      </div>
    </template>
    <template v-else>
      <article v-for="(category, index) in orderedCategories" :key="index">
        <ArticleTeaser
          :content="category"
          :index="index + 1"
          :reverse="index % 2 !== 0"
        />
      </article>
    </template>
  </div>
</template>

<script>
import { groupByTheme } from '@/services/content'
import ListViewHeader from '~/components/articles/ListViewHeader.vue'
import ArticleTeaser from '~/components/articles/ArticleTeaser.vue'

export default {
  name: 'ToolsGuides',
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const prefix = `${defaultLocale}/tools-guides`
    const options = {
      deep: true,
    }
    const guides = await $content(prefix, options)
      .only([
        'slug',
        'description',
        'title',
        'shortTitle',
        'dir',
        'position',
        'headerImage',
        'illustration',
        'path',
      ])
      .fetch()
    return guides.length > 0
      ? {
          categories: groupByTheme(guides, defaultLocale, prefix),
        }
      : {
          categories: [],
        }
  },
  computed: {
    orderedCategories() {
      return this.categories.length > 0
        ? [...this.categories].sort((a, b) => a.position > b.position)
        : []
    },
  },
  head: {
    title: 'Migaku - Tools Guides',
  },
  components: {
    ListViewHeader,
    ArticleTeaser,
  },
}
</script>

<style scoped>
.Article-comingSoon {
  margin: 50px auto;
  text-align: center;
}
</style>
