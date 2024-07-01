export const CAT_IMAGE_ENDPOINT_PREFIX = 'https://cataas.com/cat'
const CAT_IMAGE_ENDPOINT_TEXT_PARAMS = '?fontSize=50&fontColor=lightgrey'
const CAT_IMAGE_ENDPOINT_JSON_PARAMS = '?json=true'

export async function fetchRandomImageWithText(text) {
  const res = await fetch(
    `${CAT_IMAGE_ENDPOINT_PREFIX}/says/${text}${CAT_IMAGE_ENDPOINT_JSON_PARAMS}`,
  )
  const data = await res.json()
  const { _id } = data
  return `${CAT_IMAGE_ENDPOINT_PREFIX}/${_id}/says/${text}${CAT_IMAGE_ENDPOINT_TEXT_PARAMS}`
}
