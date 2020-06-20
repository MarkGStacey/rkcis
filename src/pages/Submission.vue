<template>
  <Layout>
    <div class="container">
      <Hero />
      Posts to be submitted
      <SubmissionList :projects="$page.projects.edges"/>
    </div>
    <!-- <LatestJournals :journals="$page.journals.edges" /> -->
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost(sort: [{by:"order", order:ASC}], filter: {categories: {contains: ["submission"]}}) {
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        modified (format: "YYYY-MM-DD")
        title
        categories
        thumbnail (quality: 90)
        path
        order
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import SubmissionList from "@/components/SubmissionList"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    SubmissionList,
    LatestJournals
  }
}
</script>
