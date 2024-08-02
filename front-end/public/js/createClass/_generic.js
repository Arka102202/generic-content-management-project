export const addMediaQuery = (isMax = true, width = 10, classToPut = "") => {

  return `@media (${isMax ? "max-width" : "min-width"}: ${width}px){
            ${classToPut}
        }`;
}