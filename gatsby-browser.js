/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './global.scss';

const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location)

  console.log(currentPosition)

  return false
}

export { 
  shouldUpdateScroll
}