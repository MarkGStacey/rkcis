<template>
  <Layout>
    <div class="container">
      <Hero />
      Literature reviews
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <!-- <LatestJournals :journals="$page.journals.edges" /> -->
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost(filter: {categories: {contains: ["lit-review"]}}) {
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
