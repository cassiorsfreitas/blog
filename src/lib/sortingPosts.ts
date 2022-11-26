/* eslint-disable no-unused-vars */
function postOrganizer() {
  function ascending(posts: any, recommendationSize: number) {
    const sorted = posts.sort((a, b) => {
      return a.metadata.id - b.metadata.id
    })
    return sorted.slice(0, recommendationSize)
  }
  function descending(posts: any, recommendationSize: number) {
    const sorted = posts.sort((a, b) => {
      return b.metadata.id - a.metadata.id
    })
    return sorted.slice(0, recommendationSize)
  }
  return {
    ascending,
    descending
  }
}

export default postOrganizer
